'use strict'

const Shortner = require('../model/shortner');

function save(obj) {
    let newShortner = new Shortner(obj);
    return newShortner.save();
}

function getLastCreated() {
    Shortner().find({});
}

function aliasIsUnique(alias) {



    console.log(Shortner);
    Shortner.find({ alias })
        .then(r => {
            console.log(r)
        })
        .catch(t => {
            console.log(t)
        })
    console.log('Olha aqui');
}

module.exports = {
    save,
    getLastCreated,
    aliasIsUnique
}