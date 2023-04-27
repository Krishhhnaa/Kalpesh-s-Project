const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) throw err;
  console.log('Connected to MongoDB');
});

module.exports = client;