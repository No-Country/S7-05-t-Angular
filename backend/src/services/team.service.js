const { models } = require("../database/db");

//Obtener todos los equipos ordenados de forma ascendente
const getAllTeam = async () => {
  const teams = await models.Team.findAll({
    order: [["name", "ASC"]],
    attributes: ["id", "name", "isActive", "team_leadId"],
    include: [
      {
        model: models.Selected,
        as: "selected",
        attributes: ["id", "name", "isActive"]
      }
    ]
  });
  return teams;
};

//Obtener un team por id
async function getTeam(teamId) {
  const team = await models.Team.findOne({
    where: { id: teamId },
    attributes: ["id", "name", "isActive", "team_leadId"],
    include: [
      {
        model: models.Selected,
        as: "selected",
        attributes: ["id", "name", "isActive"]
      }
    ]
  });

  if (!team) {
    throw new Error("El equipo no se encuentra en la base de datos");
  }
  return team;
}

module.exports = {
  getTeam,
  getAllTeam,
};

//Crear un team
