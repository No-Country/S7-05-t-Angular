const teamService = require("../services/team.service");

//Obtener todos los equipos
const getAllTeam = async (req, res, next) => {
  try {
    const teams = await teamService.getAllTeam();
    res.status(200).json({ success: true, teams });
  } catch (error) {
    next(error);
  }
};

// Obtener un equipo
const getTeam = async (req, res, next) => {
  try {
    const teamId = req.params.id;
    const team = await teamService.getTeam(teamId);
    res.status(200).json({ success: true, team });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTeam,
  getAllTeam,
};
