'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    alias: {
        type: String,
        required: false,
        trim: true,
        unique: true
    },
    originalURL: {
        type: String,
        required: true,
        trim: true
    },
    identifier: {
        type: Number,
        required: false,
        trim: true
    }
});


module.exports = mongoose.model('Shortner', schema);