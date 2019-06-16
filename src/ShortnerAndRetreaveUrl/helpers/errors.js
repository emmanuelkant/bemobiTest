'use strict'

const errors = [
    {
        err_code: '001',
        description: 'CUSTOM ALIAS ALREADY EXISTS'
    },
    {
        err_code: '002',
        description: 'SHORTENED URL NOT FOUND'
    }
];

const defaultError = {
    description: 'Any or more errors occurred'
}

const getError = (code, data) => {
    const error = errors.find(err => {
        return err.err_code === code;
    });
    if (!error) 
        return defaultError;

    if (data) 
        error.data = data;
    
    return error;
}


module.exports = getError;