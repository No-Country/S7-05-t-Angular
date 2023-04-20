const meetingService = require("../services/meeting.service");
const attendanceService = require("../services/meeting.service");

// Obtener las semanas
const getAllWeeks = async (req, res, next) => {
  try {
    const getWeeks = await meetingService.getAllWeeks();
    res.status(200).json({ success: "Consulta exitosa", getWeeks });
  } catch (error) {
    next(error);
  }
};

// Obtener una semana en partícular
const getOneWeek = async (req, res, next) => {
  try {
    const weekId = req.params.id;
    const getWeek = await meetingService.getOneWeek(weekId);
    res.status(200).json({ success: "Consulta exitosa", getWeek });
  } catch (error) {
    next(error);
  }
};

// Crear una reunión
const createMeeting = async (req, res, next) => {
  try {
    const { weekId, teamId, meet_number, date, observation } = req.body;

    const meeting = await meetingService.createMeeting({
      weekId,
      teamId,
      meet_number,
      date,
      observation,
    });

    res.status(201).json({ success: "Reunión creada correctamente", meeting });
  } catch (error) {
    next(error);
  }
};

// Crear la asistencia de un estudiante al meeting
const createAttendance = async (req, res, next) => {
  try {
    const { is_present, studentId, meetingId } = req.body;
    const attendance = await attendanceService.createAttendance({
      is_present,
      studentId,
      meetingId,
    });

    res
      .status(201)
      .json({ success: "Asistencia creada correctamente", attendance });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Obtener un meeting por ID

const getMeetingWithId = async (req, res, next) => {
  try {
    const meetingId = req.params.id;

    const meeting = await meetingService.getMeetingWithId(meetingId);

    res.status(200).json({ success: true, meeting });
  } catch (error) {
    next(error);
  }
};

const obtenerMeetingSemana = async (req, res, next) => {
  try {
    const { teamId, weekId, meet_number } = req.body;

    const meeting = await meetingService.obtenerMeetingSemana(teamId, weekId, meet_number);

    res.status(200).json({ success: true, meeting });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  createMeeting,
  getAllWeeks,
  getOneWeek,
  createAttendance,
  getMeetingWithId,
  obtenerMeetingSemana,
};
