const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors')

const authorSchema = mongoose.Schema({
  userName: String,
  authorName: String,
  releases: [{name: String, date: String}],
  books: []
});

let Author = mongoose.model('Author', authorSchema);


module.exports.addAuthor = function (data, callback) {
  // console.log('in db', data);
  Author.findOneAndUpdate({userName: data.user, authorName: data.author}, {userName: data.user, authorName: data.author}, {overwrite: true, upsert: true})
    .then((res) => {
      callback(null, res);
    })
    .catch(err => callback(err, null));
}


module.exports.getAll = function (user, callback) {
  // console.log('indb', user)
  Author.find({userName: user}).exec()
    .then((res) => {
      // console.log(res);
      callback(null, res);
    })
    .catch(err => callback(err, null))
}

module.exports.deleteAuthor = function (data, callback) {
  // console.log('in dbd', data);
  Author.deleteOne({ _id: data.author}).exec()
    .then((res) => {
      // console.log(res)
      callback(null, res)
    })
    .catch((err) => console.log(err))
}

module.exports.addBook = function (data, callback) {
  // console.log('indb', data);
  Author.find({userName: data.user, authorName: data.author})
    .then((res) => {
      // console.log(res);
      let existing = res[0].books || [];
      let newBook = {title: data.book.volumeInfo.title, image: data.book.volumeInfo.imageLinks.smallThumbnail, read: true, Description: data.book.volumeInfo.description}
      existing.push(newBook);
      Author.findOneAndUpdate({userName: data.user, authorName: data.author}, {books: existing}, { upsert: true })
        .then((response) => {
          // console.log(response);
          Author.find({userName: data.user, authorName: data.author})
            .then((response) => {
              callback(null, response[0].books)
            })
        })
  })
  .catch(err => callback(err, null));
}