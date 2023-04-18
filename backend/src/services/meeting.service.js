const { models } = require("../database/db");
const teamService = require("../services/team.service");

// Obtener las semanas
const getAllWeeks = async () => {
  const getWeeks = await models.Week.findAll({
    attributes: ["id", "number"],
  });
  return getWeeks;
};

//Obtener una semana en partícular
const getOneWeek = async (weekId) => {
  const getWeek = await models.Week.findByPk(weekId, {
    attributes: ["id", "number"],
  });
  return getWeek;
};

// Crear una reunión
async function createMeeting({
  weekId,
  teamId,
  meet_number,
  date,
  observation,
}) {
  // Si no se encontró la semana, enviar un error
  const week = await models.Week.findByPk(weekId);
  if (!week) {
    throw new Error("La semana no existe");
  }

  // Verificar que el team existe
  const team = await teamService.getTeam(teamId);

  // Validar que el número de la reunión sea válido
  if ((meet_number != 1) & (meet_number != 2)) {
    throw new Error("Número de reunión no válido");
  }

  if (!date) {
    throw new Error("La fecha de la reunión es obligatoria");
  }

  // Validar que la observación no exceda los 500 caracteres
  if (observation && observation.length > 500) {
    throw new Error("La observación excede el límite de 500 caracteres");
  }

  // Verificar que no exista la reunión:
  const existingMeeting = await models.Meeting.findOne({
    weekId,
    teamId,
    meet_number,
  });

  if (existingMeeting) {
    throw new Error("Esta reunión ya fue registrada");
  }

  // Guardamos en la base de datos la información
  const meeting = await models.Meeting.create({
    weekId,
    teamId,
    meet_number,
    date,
    observation,
  });

  return meeting;
}

// Obtener un meeting por ID
async function getMeetingWithId(meetingId) {
  const meeting = await models.Meeting.findByPk(meetingId, {
    attributes: [
      "id",
      "teamId",
      "weekId",
      "meet_number",
      "date",
      "observation",
    ],
  });

  return meeting;
}

// Crear la asistencia de un estudiante al meeting
const createAttendance = async ({ is_present, studentId, meetingId }) => {
  // Verificar que la reunión exista
  const meeting = await models.Meeting.findByPk(meetingId);
  if (!meeting) {
    throw new Error("La reunión no existe");
  }

  // Verificar que el estudiante exista en el equipo
  const teamId = meeting.dataValues.teamId;
  const teamStudents = await teamService.getTeam(teamId);
  const students = teamStudents.students.map((student) => student.id);
  const studentExists = students.includes(studentId);

  if (!studentExists) {
    throw new Error("El estudiante no pertenece al equipo");
  }

  // Verificar que haya asistido
  if (is_present !== true && is_present !== false) {
    throw new Error("Se debe seleccionar si el estudiante asistió");
  }

  // Verificar que la asistencia no haya sido registrada previamente
  const existingAttendance = await models.Attendance.findOne({
    where: {
      studentId,
      meetingId,
    },
  });
  if (existingAttendance) {
    throw new Error("La asistencia ya fue registrada");
  }

  // Crear la asistencia
  const attendance = await models.Attendance.create({
    is_present,
    studentId,
    meetingId,
  });

  return attendance;
};

module.exports = {
  getAllWeeks,
  createMeeting,
  getOneWeek,
  createAttendance,
  getMeetingWithId,
};
