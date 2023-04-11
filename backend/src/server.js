const express = require('express');
require('dotenv').config()
const morgan = require('morgan');
const routerApi = require('./routes');
require('./database/db');
const server = express();

const PORT = process.env.PORT || 3000
server.use(morgan('dev'));

routerApi(server);
// server.get('/', ( req, res ) => {
//     res.send('HELLO WORD')
// })

server.listen(PORT, () => {
    console.log(`server on port : ${PORT}`)
});
