'use strict'

const base62 = require('base62/lib/ascii');
const shortnerRepository = require('../repository');

const shortner = async (req, res) => {
    let startedTime = new Date().getTime();
    let toSave = {
        alias: req.body.alias,
        originalURL: req.body.originalURL,
        identifier: null
    };
    try {
        
        toSave.identifier = await shortnerRepository.getLastCreated() + 1;
        
        if (!toSave.alias) 
            toSave.alias = base62.encode(toSave.identifier);    
        
        const aliasExists = await shortnerRepository.aliasIsUnique(toSave.alias);
        
        if(req.body.alias && aliasExists) {
            const errorExists = {
                alias: toSave.alias,
                err_code: '001',
                description: 'CUSTOM ALIAS ALREADY EXISTS'
            };
            res.status(400).send(errorExists);
            return;
        };
        
        await shortnerRepository.save(toSave)
        
    } catch (erro) {
        res.status(400).send(erro);
    }

    let output = {
        alias: toSave.alias,
        url: `http://shortner.com/${toSave.alias}`,
        statitics: {
            timeTaken: `${new Date().getTime() - startedTime}ms`
        }
    };
    res.status(200).send(output);
};

module.exports = {
    shortner
};