const { models } = require("../database/db");
const { Op, or } = require("sequelize");


// Obtener todas las tecnologías

async function gettAllTechnologies(){
    const technologies = await models.Technology.findAll({
        attributes: ["id", "name"],
    });
    return technologies;
}


// Obtener una tecnología por nombre
async function searchTechnology(term) {
    const technology = await models.Technology.findAll({
        where: {
            [Op.or]: [
                {name: {[Op.iLike]: `%${term}%`}},
            ]
        },
        attributes: ["id", "name"]
    })

    return technology;
}


module.exports = {
    gettAllTechnologies,
    searchTechnology
  };
  