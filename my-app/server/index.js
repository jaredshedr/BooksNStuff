/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

// const { addAuthor } = require('../db/authors.js');

const app = express();
app.use(express.json());
app.use(cors(({ origin: '*', methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'] })));

app.use(express.static(path.join(__dirname, '../build')));

app.post('/authors', (req, res) => {
  addAuthor(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  })
})


app.post('/authors/books', (req, res) => {
  var config = {
    method: 'get',
    url: `https://www.googleapis.com/books/v1/volumes?q={${req.body.author}}`,
    headers: {
      'API_KEY': process.env.API_KEY,
    }
  };

  axios(config)
  .then((response) => res.status(200).send(response.data) )
  .catch((err) => res.status(500).send(err));
})





const port = 3030;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
