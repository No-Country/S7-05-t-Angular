const { Student, StudentSchema } = require("./student.model");
const { Team, TeamSchema } = require("./team.model");
const { TeamLead, TeamLeadSchema } = require("./teamLead.model");
const { Admin, AdminSchema } = require("./admin.model");
const { Selected, SelectedSchema } = require("./selected.model");
const { Technology } = require("./technology.model");
const { StudentTechnology } = require("./student-technologies.model");
const { TeamTechnology } = require("./team-technologies.model");
const {TeamStudent} = require("./team-student.model")
const {Activity} = require("./activity.model");
const {Week} = require("./week.model");
const {Meeting} = require("./meeting.model");
const {Attendance} = require("./attendance.model");
const {StudentActivity} = require("./studentActivity.model");


function setupModels(sequelize) {
  Admin.init(AdminSchema, Admin.config(sequelize));
  Team.init(TeamSchema, Team.config(sequelize));
  Student.init(StudentSchema, Student.config(sequelize));
  TeamLead.init(TeamLeadSchema, TeamLead.config(sequelize));
  Selected.init(SelectedSchema, Selected.config(sequelize));
  Technology.init(SelectedSchema, Technology.config(sequelize));
  StudentTechnology.init(SelectedSchema, StudentTechnology.config(sequelize));
  TeamTechnology.init(SelectedSchema, TeamTechnology.config(sequelize));
  TeamStudent.init(SelectedSchema, TeamStudent.config(sequelize));
  Activity.init(SelectedSchema, Activity.config(sequelize));
  Week.init(SelectedSchema, Week.config(sequelize));
  Meeting.init(SelectedSchema, Meeting.config(sequelize));
  Attendance.init(SelectedSchema, Attendance.config(sequelize));
  StudentActivity.init(SelectedSchema, StudentActivity.config(sequelize));

  Admin.associate(sequelize.models);
  Team.associate(sequelize.models);
  Student.associate(sequelize.models);
  TeamLead.associate(sequelize.models);
  Selected.associate(sequelize.models);
  Technology.associate(sequelize.models);
  StudentTechnology.associate(sequelize.models);
  TeamTechnology.associate(sequelize.models);
  TeamStudent.associate(sequelize.models);
  Activity.associate(sequelize.models);
  Week.associate(sequelize.models);
  Meeting.associate(sequelize.models);
  Attendance.associate(sequelize.models);
  StudentActivity.associate(sequelize.models);
}

module.exports = setupModels;
