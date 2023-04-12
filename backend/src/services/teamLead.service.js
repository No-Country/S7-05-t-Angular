const { TeamLead, Student, Team } = require("../database/models");
const studentService = require("../services/student.service");
const { models } = require("../database/db");

//Obtener un Team Lead
async function getTeamLead(teamLeadId) {
  // Verificar que el team lead existe en la base de datos
  const teamLead = await models.TeamLead.findOne({
    where: {id: teamLeadId},
    attributes: ['id', 'studentId'],
    include: [{model: models.Student, as: 'Student'}]
  });

  //No se ha encontrado el team lead
  if (!teamLead) {
    throw new Error("El team lead no se encuentra en la base de datos");
  }
  return teamLead;
}

async function createTeamLead(studentId) {

  // Verificar que el estudiante no tenga el rol de Team Lead:
  const teamLeadExits = await studentService.getStudent(studentId);    

  if (teamLeadExits.isTeamLead) {
    throw new Error('El estudiante ya tiene el rol de Team Lead');
  }

  // Verificar que el estudiante existe en la base de datos
  const student = await studentService.getStudent(studentId);

  // Verificar que el estudiante esté activo
  if(!student.isActive){
    throw new Error("El estudiante no está activo");
  }

  // Crear el nuevo team lead
  const newTeamLead = await models.TeamLead.create({ studentId });
  
  // Actualizar la columna isTeamLead en la tabla Student
  await models.Student.update({ isTeamLead: true }, {
    where: { id: studentId }
  });

  teamLeadExits.isTeamLead = true;
  const { adminId, ...teamLeadData } = newTeamLead.dataValues;
  return teamLeadData;
}

  
  
module.exports = {
  createTeamLead,
  getTeamLead,
};
