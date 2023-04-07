const { Student, StudentSchema } = require("./student.model");
const { Team, TeamSchema } = require("./team.model");
const { TeamLead, TeamLeadSchema } = require("./teamLead.model");
const { Admin, AdminSchema } = require("./admin.model");
function setupModels(sequelize) {
  Admin.init(AdminSchema, Admin.config(sequelize));
  Team.init(TeamSchema, Team.config(sequelize));
  Student.init(StudentSchema, Student.config(sequelize));
  TeamLead.init(TeamLeadSchema, TeamLead.config(sequelize));
  
  Admin.associate(sequelize.models);
  Team.associate(sequelize.models);
  Student.associate(sequelize.models);
  TeamLead.associate(sequelize.models);
}

module.exports = setupModels;
