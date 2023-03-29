const express = require('express');
require('dotenv').config()
const morgan = require('morgan');
require('./database/Db');
const server = express();

const PORT = process.env.PORT || 3000
server.use(morgan('dev'));
server.get('/', ( req, res ) => {
    res.send('HELLO WORD')
})

server.listen(PORT, () => {
    console.log(`server on port : ${PORT}`)
});
