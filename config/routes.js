'use strict'

const express = require('express');
const router = express.Router();

const shortnerUrlRoutes = require('../src/ShortnerUrl/route');

router.use(function timeLog(req, res, next) {
    console.log(`Acesso em ${new Date()} por ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
    next();
});

router.use('/shortner', shortnerUrlRoutes);

module.exports = router;