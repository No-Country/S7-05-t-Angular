const { Student, StudentSchema } = require("./student.model");
const { Team, TeamSchema } = require("./team.model");
const { TeamLead, TeamLeadSchema } = require("./teamLead.model");
const { Admin, AdminSchema } = require("./admin.model");
const { Selected, SelectedSchema } = require("./selected.model");
const { Technology, TechnologySchema } = require("./technology.model");
const {
  StudentTechnology,
  StudentTechnologySchema,
} = require("./student-technologies.model");
const {
  TeamTechnology,
  TeamTechnologySchema,
} = require("./team-technologies.model");
const { TeamStudent, TeamStudentSchema } = require("./team-student.model");
const { Activity, ActivitySchema } = require("./activity.model");
const { Week, WeekSchema } = require("./week.model");
const { Meeting, MeetingSchema } = require("./meeting.model");
const { Attendance, AttendanceSchema } = require("./attendance.model");
const {
  StudentActivity,
  StudentActivitySchema,
} = require("./studentActivity.model");

function setupModels(sequelize) {
  Admin.init(AdminSchema, Admin.config(sequelize));
  Team.init(TeamSchema, Team.config(sequelize));
  Student.init(StudentSchema, Student.config(sequelize));
  TeamLead.init(TeamLeadSchema, TeamLead.config(sequelize));
  Selected.init(SelectedSchema, Selected.config(sequelize));
  Technology.init(TechnologySchema, Technology.config(sequelize));
  StudentTechnology.init(
    StudentTechnologySchema,
    StudentTechnology.config(sequelize)
  );
  TeamTechnology.init(TeamTechnologySchema, TeamTechnology.config(sequelize));
  TeamStudent.init(TeamStudentSchema, TeamStudent.config(sequelize));
  Activity.init(ActivitySchema, Activity.config(sequelize));
  Week.init(WeekSchema, Week.config(sequelize));
  Meeting.init(MeetingSchema, Meeting.config(sequelize));
  Attendance.init(AttendanceSchema, Attendance.config(sequelize));
  StudentActivity.init(
    StudentActivitySchema,
    StudentActivity.config(sequelize)
  );

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
