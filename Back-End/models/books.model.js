const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  ID:         { type: Number, unique: true, required: true },
  BookName:   { type: String, unique: true, required: true },
  AuthorName: { type: String, required: true },
  Category:   { type: String, required: true },
  Price:      { type: String, required: true },
});

bookSchema.set('toJSON', {
  virtuals: false,
  versionKey: false
});

module.exports = mongoose.model('Book',bookSchema);