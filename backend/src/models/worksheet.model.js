const mongoose = require('mongoose');

const WorksheetSchema = new mongoose.Schema({
  grade: { type: mongoose.Schema.Types.ObjectId, ref: 'Grade', required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  title: { type: String, required: true, trim: true }, // e.g., Letter-tracing a-z
  description: { type: String, default: '' },
  category: { type: String, trim: true }, // optional category/tag
  driveFileId: { type: String, required: true }, // Google Drive fileId
  mimeType: { type: String },
  fileName: { type: String },
  size: { type: Number }, // bytes
  published: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

WorksheetSchema.index({ grade: 1 });
WorksheetSchema.index({ subject: 1 });
WorksheetSchema.index({ category: 1 });
WorksheetSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Worksheet', WorksheetSchema);
