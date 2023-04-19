const { TeamLead, Student, Team } = require("../database/models");
const studentService = require("../services/student.service");
const teamService = require("../services/team.service");
const { models } = require("../database/db");

// Obtener todos los team Lead
async function getAllTeamLeads(teamLeadId) {
  const teamLeads = await models.TeamLead.findAll({
    attributes: ["id"],
    include: [
      {
        model: models.Student,
        as: "Student",
        attributes: ["id", "name", "email", "phone", "isActive"],
      },
      {
        model: models.Team,
        as: "teams",
        attributes: ["id", "name", "isActive"],
        include: [
          {
            model: models.Selected,
            as: "selected",
            attributes: ["id", "name", "isActive"]
          },
        ]  
      }
    ],
  });
  return teamLeads;
}

//Obtener un Team Lead
async function getTeamLead(teamLeadId) {
  // Verificar que el team lead existe en la base de datos
  const teamLead = await models.TeamLead.findOne({
    where: { id: teamLeadId },
    attributes: ["id"],
    include: [
      {
        model: models.Student,
        as: "Student",
        attributes: ["id", "name", "email", "phone", "isTeamLead", "isActive"],
      },
      {
        model: models.Team,
        as: "teams",
        attributes: ["id", "name", "isActive"],
        include: [
          {
            model: models.Selected,
            as: "selected",
            attributes: ["id", "name", "isActive"]
          },
        ]  
      }
    ],
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
    throw new Error("El estudiante ya tiene el rol de Team Lead");
  }

  // Verificar que el estudiante existe en la base de datos
  const student = await studentService.getStudent(studentId);

  // Verificar que el estudiante esté activo
  if (!student.isActive) {
    throw new Error("El estudiante no está activo");
  }

  // Crear el nuevo team lead
  const newTeamLead = await models.TeamLead.create({ studentId });

  // Actualizar la columna isTeamLead en la tabla Student
  await models.Student.update(
    { isTeamLead: true },
    {
      where: { id: studentId },
    }
  );

  teamLeadExits.isTeamLead = true;
  const { adminId, updatedAt, createdAt, ...teamLeadData } =
    newTeamLead.dataValues;
  return teamLeadData;
}

// Asignar un team lead a un equipo
async function addTeamLeadtoTeam(teamLeadId, teamId) {
  const teamLead = await getTeamLead(teamLeadId);
  const team = await teamService.getTeam(teamId);

  //Verificar si el equipo ya tiene asignado un TL
  if(team.dataValues.team_leadId) {
    throw new Error("El equipo ya tiene un tl asignado");
  }

  //Asignar team lead
  const teamLeadToTeam = team.team_leadId = teamLeadId;
  await team.save();
  return teamLeadToTeam;
}

async function getTeams(teamLeadId) {
  // Verificar que el team lead existe en la base de datos
  const teams = await models.TeamLead.findAll({
    where: {studentId: teamLeadId},
    attributes: ["id"],
    include: [
      {
        model: models.Team,
        as: "teams",
        attributes: ["name"], // atributos de la entidad Technology
      },
    ]
  });
  //No se ha encontrado el team lead
  if (!teams) {
    throw new Error("El team lead no tiene grupos asociados");
  }
  return teams;
}

module.exports = {
  getAllTeamLeads,
  createTeamLead,
  getTeamLead,
  addTeamLeadtoTeam,
  getTeams,
};
