const stream = require('stream');
const Worksheet = require('../models/worksheet.model');
const APIError = require('../utils/APIError');
const APIResponse = require('../utils/APIResponse');
const { drive } = require('../services/googleDriveOauth');
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;


async function uploadBufferToDrive(buffer, filename, mimeType) {
  if (!FOLDER_ID) throw new APIError(500, 'Drive folder not configured');

  const bufferStream = new stream.PassThrough();
  bufferStream.end(buffer);

  const res = await drive.files.create({
    requestBody: {
      name: filename,
      parents: [FOLDER_ID]
    },
    media: {
      mimeType,
      body: bufferStream
    },
    fields: 'id,name,mimeType,size'
  });

  return res.data; 
}

exports.uploadWorksheet = async (req, res, next) => {
  try {
    const { title, gradeId, subjectId, category } = req.body;
    const file = req.file;
    if (!file) return next(new APIError(400, 'PDF file is required'));

    if (!title || !gradeId || !subjectId) {
      return next(new APIError(400, 'title, gradeId and subjectId are required'));
    }

    if (!file.mimetype || !file.mimetype.includes('pdf')) {
      return next(new APIError(400, 'Only PDF files are allowed'));
    }

    const uploaded = await uploadBufferToDrive(file.buffer, file.originalname, file.mimetype);

    const ws = new Worksheet({
      title,
      description: req.body.description || '',
      grade: gradeId,
      subject: subjectId,
      category: category || '',
      driveFileId: uploaded.id,
      mimeType: uploaded.mimeType,
      fileName: uploaded.name,
      size: uploaded.size
    });

    await ws.save();

    res.status(201).json(new APIResponse(201, ws, 'Worksheet uploaded successfully'));
  } catch (err) {
    next(err);
  }
};

exports.deleteWorksheet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ws = await Worksheet.findById(id);
    if (!ws) return next(new APIError(404, 'Worksheet not found'));

    try {
      await drive.files.delete({ fileId: ws.driveFileId });
    } catch (e) {
      console.warn('Drive delete failed:', e.message || e);
    }

    await ws.remove();

    res.json(new APIResponse(200, null, 'Worksheet deleted'));
  } catch (err) {
    next(err);
  }
};
