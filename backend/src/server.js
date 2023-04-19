const express = require('express');
require('dotenv').config()
const morgan = require('morgan');
const routerApi = require('./routes');
require('./database/db');
const server = express();

const PORT = process.env.PORT || 3000
server.use(morgan('dev'));

server.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



routerApi(server);
// server.get('/', ( req, res ) => {
//     res.send('HELLO WORD')
// })

server.listen(PORT, () => {
    console.log(`server on port : ${PORT}`)
});
