const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, // e.g., Preschool
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true }, // e.g., preschool
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Grade', GradeSchema);
