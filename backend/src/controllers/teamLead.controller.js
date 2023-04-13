const teamLeadService = require("../services/teamLead.service");

//Obtener un team lead
const getTeamLead = async (req, res, next) => {
  try {
    const teamLeadId = req.params.id;    
    const teamLead = await teamLeadService.getTeamLead(teamLeadId);
    res.status(200).json({ success: true, teamLead });
  } catch (error) {
    next(error);
  }
};

//Crear un teamLead 
const createTeamLead = async (req, res, next) => {
  try {
    const { id } = req.body;    
    const teamLead = await teamLeadService.createTeamLead(id);
    res.status(201).json({ success: true, msg: teamLead });
  } catch (error) {
    next(error);
  }
};


//Obtener todos los grupos de un teamLead 
const getTeams = async (req, res, next) => {
  try {
    const { id } = req.params.id;    
    const teamLead = await teamLeadService.getTeams(id);
    res.status(201).json({ success: true, data: teamLead });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTeamLead,
  createTeamLead,
  getTeams,
};
