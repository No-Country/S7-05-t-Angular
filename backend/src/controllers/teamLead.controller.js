const teamLeadService = require("../services/teamLead.service");

//Obtener todos los team Leads
const getAllTeamLeads = async (req, res, next) => {
  try {
    const allTeamLeads = await teamLeadService.getAllTeamLeads();
    res.status(200).json({ success: true, data: allTeamLeads });
  } catch (error) {
    next(error);
  }
};

//Obtener un team lead
const getTeamLead = async (req, res, next) => {
  try {
    const teamLeadId = req.params.id;
    const teamLead = await teamLeadService.getTeamLead(teamLeadId);
    res.status(200).json({ success: true, teamLead });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Crear un teamLead
const createTeamLead = async (req, res, next) => {
  try {
    const id = req.params.id;
    const teamLead = await teamLeadService.createTeamLead(id);
    res
      .status(201)
      .json({ success: "Team Lead creado correctamente", msg: teamLead });
  } catch (error) {
    console.log(error);
    //return res.status(500).json({ error: error.message });
    next(error);
  }
};

// Asignar un team lead a un equipo
const addTeamLeadtoTeam = async (req, res, next) => {
  try {
    const teamLeadId = req.body.teamLeadId;
    const teamId = req.body.teamId;

    const teamUpdateTl = await teamLeadService.addTeamLeadtoTeam(teamLeadId, teamId)

    res.status(200).json({
      success: true,
      message: "Líder de equipo asignado exitosamente",
      teamUpdateTl
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};


//Obtener todos los grupos de un teamLead 
const getTeams = async (req, res, next) => {
  try {
    const id = req.params.id;    
    const teamLead = await teamLeadService.getTeams(id);
    res.status(201).json({ success: true, data: teamLead });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTeamLeads,
  getTeamLead,
  createTeamLead,
  addTeamLeadtoTeam,
  getTeams
};
