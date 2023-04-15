'use strict'

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456'; //cambiar!!!

exports.authorization = function (req,res,next) {
    let token = req.headers['authorization'] 
    // token = token.slice(4, token.length);
    jwt.verify(token, SECRET_KEY, function(err, decodedToken) {
      if(err) { 
        return  res.status(404).send({message: 'El token NO es valido'});
        }
      else {
    //    req.id_usuario = decodedToken.id; 
       next();
      }
    });}

exports.ensureAuth = function(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message: 'La peticion no tiene la cabecera de autentificacion'});
    }
    var token = req.headers.authorization.replace(/[""]+/g,''); 
    try{
        var payload = jwt.decode(token,secret);
        if(payload.exp <= moment().unix()){
            return  res.status(401).send({message: 'El token ha expirado'});
        }
    }catch(ex){
        return  res.status(404).send({message: 'El token NO es valido'});
    }
    req.user = payload;
    next();
};