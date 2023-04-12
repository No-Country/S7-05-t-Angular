'use strict'
import { Admin as _Admin } from '../database/models/admin.model';
const SECRET_KEY = 'secretkey123456';  //cambiar!!
const jwt = require('jsonwebtoken');

async function login(req, res) {
    let datos = req.body;
    if (datos) {
        console.log('controlador usuario: ', datos);
        let control = await _Admin.findOne({email: datos.email});
        console.log('control', control);
        if (control) {
            if (datos.password == control.password) {
                const expiresIn = 6 * 60 * 60;
                const accessToken = jwt.sign({ id: id_usuario, id_sucursal: sucursal.id }, SECRET_KEY, { expiresIn: expiresIn });
                callback(null, {usuario: control, expiresIn: expiresIn, accessToken: accessToken});
            } else {
                res.status(200).send({message: "Usuario o contraseña incorrectos"});
            }
        } else {
            res.status(200).send({message: "Usuario o contraseña incorrectos"});
        }
    } else {
        res.status(403).send({message: 'Debe loguearse para poder realizar esta operacion'} );
    }
}

export default {
    login
};
