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

// Asignar una tecnologia a un team
const addTechnologyToTeam = async(req, res, next) => {
  try {
    const teamId = req.body.teamId;
    const technologyId = req.body.technologyId;

    const teamTechnologies = await teamService.addTechnologyToTeam(teamId, technologyId);
    res.status(201).json({ success: "Tecnologia agregada correctamente", teamTechnologies });

  } catch (error) {
    console.log('====================================');
    console.log(error.message);
    console.log('====================================');
    next(error);
  }
}


// Obtener teams y sus technologias
const getTechnologyToTeam = async (req, res, next) => {
  try {
    const teamTechnology = await teamService.getTechnologyTeam();
    res.status(200).json({ success: true, data: teamTechnology });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTeam,
  getAllTeam,
  getTechnologyToTeam,
  addTechnologyToTeam,
};
