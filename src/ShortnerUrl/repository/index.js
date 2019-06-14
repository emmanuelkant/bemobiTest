'use strict'

const Shortner = require('../model/shortner');

function save(newDoc) {
    const newShortner = new Shortner(newDoc);
    return newShortner.save();
}

function getLastCreated() {
    return Shortner.countDocuments({});
}

function aliasIsUnique(alias) {
    return Shortner.findOne({ alias })
}

module.exports = {
    save,
    getLastCreated,
    aliasIsUnique
}