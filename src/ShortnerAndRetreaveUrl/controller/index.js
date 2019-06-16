'use strict'

const getError = require('../helpers/errors');
const base62 = require('base62/lib/ascii');
const shortnerRepository = require('../repository');


const shortner = async (req, res) => {
    let startedTime = new Date().getTime();
    let toSave = {
        alias: req.body.alias,
        originalURL: req.body.originalURL,
        identifier: null,
        calledTimes: 0
    };
    try {
        
        toSave.identifier = await shortnerRepository.countAll() + 1;
        
        if (!toSave.alias) 
            toSave.alias = base62.encode(toSave.identifier);    
        
        const aliasExists = await shortnerRepository.findByAlias(toSave.alias);
        
        if(req.body.alias && aliasExists) {
            res.status(400).send(getError('001', `Alias '${toSave.alias}'`));
            return;
        };
        
        await shortnerRepository.save(toSave)
        
        let output = {
            alias: toSave.alias,
            url: `http://shortner.com/${toSave.alias}`,
            statitics: {
                timeTaken: `${new Date().getTime() - startedTime}ms`
            }
        };
        res.status(200).send(output);
        
    } catch (error) {
        res.status(400).send(error);
    }

};


const retreave = async (req, res) => {

    let urlToGo = null;

    try {
        const shortner = await shortnerRepository.findByAlias(req.params.url);
        if (!shortner) {
            res.status(400).send(getError('002'));
            return;
        }
    
        shortner.calledTimes++;
        urlToGo = shortner.originalURL;
        await shortnerRepository.save(shortner);
        res.status(200).redirect(urlToGo);
    } catch (error) {
        res.status(400).send(erro);
    }

};

const moreAccessed = async (req, res) => {

    const moreAccesseds = await shortnerRepository.findBycalledTimes();

    res.send(moreAccesseds);

};


module.exports = {
    shortner,
    retreave,
    moreAccessed
};