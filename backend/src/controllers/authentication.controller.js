const { models } = require("../database/db");

const crypto = require('crypto');

const generateSecretKey = () => {
  const length = 32;
  return crypto.randomBytes(length).toString('hex');
};

const SECRET_KEY = generateSecretKey();
const jwt = require('jsonwebtoken');

const loginTL = async (req, res, next) => {
    try {
        let datos = req.body;
        if (datos) {
            let control = await models.Student.findOne({ where: {email: datos.email, isTeamLead: true, isActive: true }});
            if (control) {
                if (datos.password == control.dataValues.password) {
                    const expiresIn = 6 * 60 * 60;
                    const accessToken = jwt.sign({ id: control.dataValues.id }, SECRET_KEY, { expiresIn: expiresIn });
                    res.status(200).json({ usuario: control, expiresIn: expiresIn, accessToken: accessToken });
                } else {
                    res.status(200).json({ message: "Usuario o contraseña incorrectos" });
                }
            } else {
                res.status(200).json({ message: "Usuario o contraseña incorrectos" });
            }
        } else {
            res.status(403).json({ message: 'Debe loguearse para poder realizar esta operacion' });
        }
    } catch (error) {
        next(error);
    }
}

const loginAdmin = async (req, res, next) => {
    try {
        let datos = req.body;
        if (datos) {
            let control = await models.Admin.findOne({ email: datos.email, isActive: true });
            if (control) {
                if (datos.password == control.dataValues.password) {
                    const expiresIn = 6 * 60 * 60;
                    const accessToken = jwt.sign({ id: control.dataValues.id }, SECRET_KEY, { expiresIn: expiresIn });
                    res.status(200).json({ usuario: control.dataValues, expiresIn: expiresIn, accessToken: accessToken });
                } else {
                    res.status(200).json({ message: "Usuario o contraseña incorrectos" });
                }
            } else {
                res.status(200).json({ message: "Usuario o contraseña incorrectos" });
            }
        } else {
            res.status(403).json({ message: 'Debe loguearse para poder realizar esta operacion' });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    loginTL,
    loginAdmin,
};