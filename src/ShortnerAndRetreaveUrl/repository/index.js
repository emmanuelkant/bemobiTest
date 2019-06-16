'use strict'

const Shortner = require('../model/shortner');

const save = (newDoc) => {
    const newShortner = new Shortner(newDoc);
    return newShortner.save();
}

const countAll = () => {
    return Shortner.countDocuments({});
}

const findByAlias = alias => {
    return Shortner.findOne({ alias })
}

const findBycalledTimes = () => {
    return Shortner.find({ }, [], {
        skip: 0,
        limit: 10,
        sort: {
            calledTimes: -1
        }
    })
}

module.exports = {
    save,
    countAll,
    findByAlias,
    findBycalledTimes
}