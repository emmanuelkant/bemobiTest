'use strict'

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://bemobi:bemobi@cluster0-ke1jk.gcp.mongodb.net/bemobi?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) console.erro(err);
});

module.exports = client;
