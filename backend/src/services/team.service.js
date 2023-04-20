const { models } = require("../database/db");

//Obtener todos los equipos ordenados de forma ascendente
const getAllTeam = async () => {
  const teams = await models.Team.findAll({
    order: [["name", "ASC"]],
    attributes: ["id", "name", "isActive"],
    include: [
      {
        model: models.Selected,
        as: "selected",
        attributes: ["id", "name", "isActive"],
      },
      {
        model: models.TeamLead,
        as: "teamLead",
        attributes: ["id"],
        include: [
          {
            model: models.Student,
            as: "Student",
            attributes: ["id", "name", "email"],
          },
        ],
      },
      {
        model: models.Student,
        as: "students",
        through: {
          model: models.TeamStudent,
          attributes: [],
        },
        attributes: ["id", "name"],
      },
    ],
  });
  return teams;
};

//Obtener un team por id
async function getTeam(teamId) {
  const team = await models.Team.findOne({
    where: { id: teamId },
    attributes: ["id", "name", "isActive"],
    include: [
      {
        model: models.Selected,
        as: "selected",
        attributes: ["id", "name", "isActive"],
      },
      {
        model: models.TeamLead,
        as: "teamLead",
        attributes: ["id"],
        include: [
          {
            model: models.Student,
            as: "Student",
            attributes: ["id", "name", "email"],
          },
        ],
      },
      {
        model: models.Student,
        as: "students",
        through: {
          model: models.TeamStudent,
          attributes: [],
        },
        attributes: ["id", "name"],
      },
    ],
  });

  if (!team) {
    throw new Error("El equipo no se encuentra en la base de datos");
  }
  return team;
}

// Obtener teams y sus technologias
async function getTechnologyTeam() {
  const teamsTech = await models.Team.findAll({
    include: [
      {
        model: models.Technology,
        as: "technologies",
        through: {
          model: models.TeamTechnology,
          attributes: [],
        },
        attributes: ["id", "name"], // atributos de la entidad Technology
      },
    ],
  });
  return teamsTech;
}

module.exports = {
  getTeam,
  getAllTeam,
  getTechnologyTeam,
};

//Crear un team
