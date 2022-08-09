const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors')

const authorSchema = mongoose.Schema({
  userName: String,
  authorName: String,
  releases: [{name: String, date: String}],
  books: [{ title: String, image: String, read: Boolean, Description: String }]
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
  Author.find({username: user}).exec()
    .then((res) => {
      callback(null, res);
    })
    .catch(err => callback(err, null))
}

module.exports.deleteAuthor = function (data, callback) {
  console.log('in dbd', data);
  Author.deleteOne({userName: data.user, authorName: data.author})
    .then((res) => {
      callback(null, res)
    })
    .catch((err) => console.log(err))
}