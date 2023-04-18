const express = require("express");
const router = express.Router();
const teamLeadUserRouter = require("./teamLead.router");
const studentUserRouter = require("./student.router");
const teamRouter = require("./team");
const meetingRouter = require("./meeting.router");

const app = express();

function routerApi(app) {
  app.use("/api/meeting", meetingRouter);
  app.use("/api/users/teamLead", teamLeadUserRouter);
  app.use("/api/users/student", studentUserRouter);
  app.use("/api/team", teamRouter);
}
module.exports = routerApi;
