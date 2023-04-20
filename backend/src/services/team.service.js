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

// Asignar una tecnologia a un team

async function addTechnologyToTeam(TeamId, TechnologyIds) {
  // Verificar que el equipo exista
  const team = await getTeam(TeamId);

  // Verificar que todas las tecnologías existan
  const technologies = await models.Technology.findAll({
    where: { id: TechnologyIds },
  });
  if (technologies.length !== TechnologyIds.length) {
    throw new Error("Una o más tecnologías no existen");
  }

  // Verificar que el equipo no tenga ya la tecnología
  const existingTeamTechnology = await models.TeamTechnology.findAll({
    where: { TeamId, TechnologyId: TechnologyIds },
  });

  if (existingTeamTechnology.length > 0) {
    throw new Error("El equipo ya tiene una o más de estas tecnologías");
  }

  // Agregar las tecnologías al equipo
  const teamTechnologies = await Promise.all(
    TechnologyIds.map((TechnologyId) => {
      return models.TeamTechnology.create({ TeamId, TechnologyId });
    })
  );

  const result = await models.TeamTechnology.findAll({
    where: { TeamId, TechnologyId: TechnologyIds },
    //include: { model: models.Technology, attributes: ["name"] },
  });

  return result;
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
  addTechnologyToTeam,
};

//Crear un team

//ASIGNAR una tecnologia a un team
// async function addTechnologyToTeam(teamId, technologyId) {
//     // Verificar que el equipo exista
//     const team = await getTeam(teamId)

//   // Buscamos las tecnologías por sus ids y verificamos que existan
//   const technologies = await models.Technology.findAll({
//     where: { id: technologyId },
//   });

//   if (technologies.length !== technologyId.length) {
//     throw new Error("Alguna(s) tecnología(s) no existe(n)");
//   }

//    // Creamos un array con objetos de TeamTechnology
//    const teamTechnologies = technologyId.map((techId) => ({
//     teamId: teamId,
//     technologyId: techId,
//   }));

//   console.log('====================================');
//   console.log(teamTechnologies);
//   console.log('====================================');

//   // Agregamos las tecnologías al equipo
//   //const teamTechnologies = await models.TeamTechnology.create({teamId, technologyId});
//     const result = await models.TeamTechnology.bulkCreate(teamTechnologies);

//   return result;
// }

// async function addTechnologyToTeam(TeamId, TechnologyId) {
//   // Verificar que el equipo exista
//   const team = await getTeam(TeamId)

//   // Buscamos la tecnología por su id y verificamos que exista
//   const technology = await models.Technology.findOne({ where: { id: TechnologyId } });
//   if (!technology) {
//     throw new Error("La tecnología no existe");
//   }

//   // Agregamos la tecnología al equipo
//   const teamTechnology = await models.TeamTechnology.create({TeamId, TechnologyId});

//   return teamTechnology;
// }
