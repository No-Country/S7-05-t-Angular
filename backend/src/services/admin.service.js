const { TeamLead, Student, Team } = require("../database/models");
const studentService = require("../services/student.service");
const { models } = require("../database/db");

//Obtener un Team Lead
async function getTeamLeaders() {
  // Verificar que el team lead existe en la base de datos
  const teamLeaders = await models.TeamLead.findAll({
    include: [{model: models.Team, as: 'teams'}]
  });

  //No se ha encontrado el team lead
  if (!teamLeaders) {
    throw new Error("No existe team leaders cargados");
  }
  return teamLeaders;
}
 
module.exports = {
  getTeamLeaders,
};
