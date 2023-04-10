const { Student, StudentSchema } = require("./student.model");
const { Team, TeamSchema } = require("./team.model");
const { TeamLead, TeamLeadSchema } = require("./teamLead.model");
const { Admin, AdminSchema } = require("./admin.model");
const { Selected, SelectedSchema } = require("./selected.model");
const { Technology } = require("./technology.model");
const { StudentTechnology } = require("./student-technologies.model");
const { TeamTechnology } = require("./team-technologies.model");
function setupModels(sequelize) {
  Admin.init(AdminSchema, Admin.config(sequelize));
  Team.init(TeamSchema, Team.config(sequelize));
  Student.init(StudentSchema, Student.config(sequelize));
  TeamLead.init(TeamLeadSchema, TeamLead.config(sequelize));
  Selected.init(SelectedSchema, Selected.config(sequelize));
  Technology.init(SelectedSchema, Technology.config(sequelize));
  StudentTechnology.init(SelectedSchema, StudentTechnology.config(sequelize));
  TeamTechnology.init(SelectedSchema, TeamTechnology.config(sequelize));

  Admin.associate(sequelize.models);
  Team.associate(sequelize.models);
  Student.associate(sequelize.models);
  TeamLead.associate(sequelize.models);
  Selected.associate(sequelize.models);
  Technology.associate(sequelize.models);
  StudentTechnology.associate(sequelize.models);
  TeamTechnology.associate(sequelize.models);
}

module.exports = setupModels;
