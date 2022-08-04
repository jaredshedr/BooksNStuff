const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors')

const authorSchema = mongoose.Schema({
  userName: String,
  authorName: String,
  releases: [String],
  books: [{ title: String, image: String, read: Boolean, Description: String }]
});

let Author = mongoose.model('Author', authorSchema);


module.exports.addAuthor = function (data, callback) {
  console.log('in db', data);
}
