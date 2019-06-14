'use strict'

const express = require('express');
const app = express();

// Utilitários
const bodyParser = require('body-parser');

// Rotas
const allRoutes = require('./routes');

// Conexão do banco
const mongoClient = require('./db');



mongoClient.connect(err => {
    if (err) console.error(err);
});

// Carregando Models
const Shortner = require('../src/ShortnerUrl/model/shortner');

app.use(bodyParser.json());

app.use('/', allRoutes);


module.exports = app;

