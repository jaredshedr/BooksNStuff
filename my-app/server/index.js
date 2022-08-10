/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const schedule = require('node-schedule');



const { addAuthor, getAll, deleteAuthor, addBook, deleteBook, addUpcomingRelease, eraseNewRelease, getAllData } = require('../db/authors.js');

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

app.post('/erase/newrelease', (req, res) => {
  eraseNewRelease(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log('it hitme')
      res.status(200).send(data);
    }
  })
})

app.post('/messages', (req, res) => {
  // console.log(new Date (req.body.date))

  addUpcomingRelease(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })

  // res.header('Content-Type', 'application/json');
  // client.messages
  //   .create({
  //     messagingServiceSid: process.env.MID,
  //     from: process.env.TWILIO_PHONE_NUMBER,
  //     to: req.body.phone,
  //     body: `${req.body.bookName} by ${req.body.author} is coming out!`,
  //     sendAt: new Date(req.body.date),
  //     scheduleType: 'fixed'
  //   })
  //   .then(() => {
  //     console.log('message created')
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
});

let emailDispatch = schedule.scheduleJob('0 8 * * *', function(){
  console.log('The answer to life, the universe, and everything!');
  getAllData((err, data) => {
    if (err) {
      console.log(err);
    } else {
      let allData = data;
      let currentDate = new Date().toString().slice(4, 15);

      for (let item of allData) {
        if (item.releases.length > 0) {
          let itemDate = new Date(item.releases[0].date).toString().slice(4, 15);
          itemDate.setDate(itemDate.getDate() + 1);
          if (itemDate === currentDate) {
            client.messages
              .create({
                from: process.env.TWILIO_PHONE_NUMBER,
                to: item.releases[0].phone,
                body: `${item.releases[0].title} is coming out today!`
              })
              .then(() => {
                console.log('message created')
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
      }
    }
  })
});

const port = 3030;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
