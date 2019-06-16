'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.put('/shortner/', controller.shortner);
router.get('/:url', controller.retreave);
router.get('/moreAccessed/all', controller.moreAccessed);

module.exports = router;