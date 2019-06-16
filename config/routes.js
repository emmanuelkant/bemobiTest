'use strict'

const express = require('express');
const router = express.Router();

const shortnerAndRetreaveUrlRoutes = require('../src/ShortnerAndRetreaveUrl/route');

router.use(function timeLog(req, res, next) {
    console.log(`Acesso em ${new Date()} por ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
    next();
});

router.use('/', shortnerAndRetreaveUrlRoutes);

module.exports = router;