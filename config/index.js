'use strict'

const express = require('express');
const app = express();

// Utilitários
const bodyParser = require('body-parser');
const cors = require('cors');

// Rotas
const allRoutes = require('./routes');

// Conexão do banco
const DB_STR = require('./db');
const mongoose = require('mongoose');

const uri = `${DB_STR.BASE_PATH}${DB_STR.USER}:${DB_STR.PASSWORD}@${DB_STR.CLUSTER}/${DB_STR.COLLECTION}`;
mongoose.connect(uri, {useNewUrlParser: true})

// Carregando Models
const Shortner = require('../src/ShortnerAndRetreaveUrl/model/shortner');

app.use(bodyParser.json());
app.use(cors());

app.use('/', allRoutes);


module.exports = app;

