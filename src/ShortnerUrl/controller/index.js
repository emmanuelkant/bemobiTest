'use strict'

const base62 = require('base62/lib/ascii');
const shortnerRepository = require('../repository');


const shortner = (req, res) => {
    console.log('entrei');
    let output = {
        alias: req.body.alias,
        originalURL: req.body.url,
        identifier: 1
    };
    shortnerRepository.save(output)
        .then(r => {
            res.send(r);
        })
        .catch(y => {
            res.send(y);
        })

    //output.identifier = shortnerRepository.getLastCreated() + 1;
    // output.identifier = 1;
    
    // if (!output.alias) 
    //     output.alias = base62.encode(output.identifier);    
    
    // if(!shortnerRepository.aliasIsUnique(output.alias)) {
    //     const erroExists = {
    //         alias: output.alias,
    //         err_code: '001',
    //         description: 'CUSTOM ALIAS ALREADY EXISTS'
    //     };
    //     res.status(400).send(erroExists);
    //     return;
    // };

    // shortnerRepository.save(output)
    //     .then(response => {
    //         res.status(200).send(response);
    //     })
    //     .catch(err => {
    //         res.status(400).send(err);
    //     })
    console.log('terminou');
};

module.exports = {
    shortner
};