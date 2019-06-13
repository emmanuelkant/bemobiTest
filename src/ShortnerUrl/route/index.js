'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.put('/', controller.shortner);

module.exports = router;