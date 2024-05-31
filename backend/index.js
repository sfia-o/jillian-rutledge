// load .env data into process.env
require('dotenv').config();

// Web server config
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');

//Setup cross origin resource sharing
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

const db = require("./db");

// Separated Routes for each Resource
// const spots = require("./routes/spots");

// Mount all resource routes
// app.use("/api", spots(db));

// Home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});