'use strict'

const app = require('./config');

const port = process.env.PORT;

app.listen(port || 8080);
console.log(port);