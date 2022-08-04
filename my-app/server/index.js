/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const path = require('path');
// const cors = require('cors');

const User = require('../db/user.js');

const app = express();
app.use(express.json());
// app.use(cors(({ origin: '*', methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'] })));

app.use(express.static(path.join(__dirname, '../build')));







const port = 3030;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
