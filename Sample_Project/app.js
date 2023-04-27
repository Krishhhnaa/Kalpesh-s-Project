const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Make sure to replace the client variable with the connection to your own MongoDB database, and to add your own routes and middleware as necessary.
const client = require('./db');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/data', (req, res) => {
  const collection = client.db("test").collection("data");
  collection.find().toArray((err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Connect to MongoDB and start server
client.connect((err) => {
  if (err) throw err;
  console.log('Connected to MongoDB');

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
});
