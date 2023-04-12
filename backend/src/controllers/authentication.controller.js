const { models } = require("../database/db");


const SECRET_KEY = 'secretkey123456';  //cambiar!!
const jwt = require('jsonwebtoken');

const loginTL = async (req, res, next) => {
    try {
        let datos = req.body;
        if (datos) {
            console.log('controlador usuario: ', datos);
            let control = await models.TeamLead.findOne({email: datos.email, isActive: true});
            console.log('control', control);
            if (control) {
                if (datos.password == control.password) {
                    const expiresIn = 6 * 60 * 60;
                    const accessToken = jwt.sign({ id: id_usuario, id_sucursal: sucursal.id }, SECRET_KEY, { expiresIn: expiresIn });
                    res.status(200).json({usuario: control, expiresIn: expiresIn, accessToken: accessToken});
                } else {
                    res.status(200).json({message: "Usuario o contraseña incorrectos"});
                }
            } else {
                res.status(200).json({message: "Usuario o contraseña incorrectos"});
            }
        } else {
            res.status(403).json({message: 'Debe loguearse para poder realizar esta operacion'} );
        }
    } catch (error) {
        next(error);
    }
}

const loginAdmin = async (req, res, next) => {
    try {
        let datos = req.body;
        if (datos) {
            console.log('controlador usuario: ', datos);
            let control = await models.Admin.findOne({email: datos.email, isActive: true});
            console.log('control', control);
            if (control) {
                if (datos.password == control.password) {
                    const expiresIn = 6 * 60 * 60;
                    const accessToken = jwt.sign({ id: id_usuario, id_sucursal: sucursal.id }, SECRET_KEY, { expiresIn: expiresIn });
                    res.status(200).json({usuario: control, expiresIn: expiresIn, accessToken: accessToken});
                } else {
                    res.status(200).json({message: "Usuario o contraseña incorrectos"});
                }
            } else {
                res.status(200).json({message: "Usuario o contraseña incorrectos"});
            }
        } else {
            res.status(403).json({message: 'Debe loguearse para poder realizar esta operacion'} );
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    loginTL,
    loginAdmin,
  };
  
