'use strict'

const express = require('express');
const app = express();

// Utilitários
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Rotas
const allRoutes = require('./routes');

mongoose.connect('');

app.use(bodyParser.json());

app.use('/', allRoutes);


module.exports = app;

