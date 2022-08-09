/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const { addAuthor, getAll, deleteAuthor, addBook, deleteBook } = require('../db/authors.js');

const app = express();
app.use(express.json());
app.use(cors(({ origin: '*', methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'] })));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/authors', (req, res) => {
  // console.log(req.query.user);
  getAll(req.query.user, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/authors', (req, res) => {
  addAuthor(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.delete('/authors',(req, res) => {
  deleteAuthor(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/authors/books', (req, res) => {
  var config = {
    method: 'get',
    url: `https://www.googleapis.com/books/v1/volumes?q={${req.body.book}}`,
    headers: {
      'API_KEY': process.env.API_KEY,
    }
  };

  axios(config)
  .then((response) => res.status(200).send(response.data) )
  .catch((err) => res.status(500).send(err));
})

app.post('/authors/addbook', (req, res) => {
  addBook(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log('it hitme')
      res.status(200).send(data);
    }
  })
})

app.post('/authors/deletebook', (req, res) => {
  deleteBook(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log('it hitme')
      res.status(200).send(data);
    }
  })
})

const port = 3030;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
