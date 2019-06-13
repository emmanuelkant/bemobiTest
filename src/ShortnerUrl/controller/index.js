'use strict'

const base62 = require('base62/lib/ascii');
const funcs = require('./functions');
const shortnerRepository = require('../repository');


const shortner = (req, res) => {
    let output = {
        alias: req.body.alias,
        originalURL: req.body.url,
        identifier: null
    };
    
    output.identifier = shortnerRepository.getLastCreated() + 1;
    
    if (!output.alias) 
        output.alias = base62.encode(output.identifier);    
    
    if(!funcs.aliasIsUnique(output.alias)) {
        const erro = {
            alias: output.alias,
            err_code: 001,
            description: 'CUSTOM ALIAS ALREADY EXISTS'
        };
        res.send(erro);
        return;
    };

    shortnerRepository.save(output);

    res.send("output");
};

module.exports = {
    shortner
};