const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  grade: { type: mongoose.Schema.Types.ObjectId, ref: 'Grade', required: true },
  name: { type: String, required: true, trim: true }, // e.g., Tracing, English
  slug: { type: String, required: true, lowercase: true, trim: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subject', SubjectSchema);
