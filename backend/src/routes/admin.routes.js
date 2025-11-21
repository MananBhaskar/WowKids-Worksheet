const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB
const asyncHandler = require('../utils/asyncHandler');
const adminAuth = require('../middlewares/adminAuth.middleware');
const { uploadWorksheet, deleteWorksheet } = require('../controllers/admin.worksheet.controller');

router.post('/worksheets', adminAuth, upload.single('file'), asyncHandler(uploadWorksheet));
router.delete('/worksheets/:id', adminAuth, asyncHandler(deleteWorksheet));

module.exports = router;
