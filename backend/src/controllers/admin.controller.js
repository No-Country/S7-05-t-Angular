const adminService = require("../services/admin.service");

//Obtener un team lead
const getTeamLeades = async (req, res, next) => {
  try {
    const teamLeaders = await adminService.getTeamLeaders();
    res.status(200).json({ success: true, teamLeaders });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getTeamLeades,
};
