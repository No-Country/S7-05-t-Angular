const express = require("express");
const router = express.Router();
const teamLeadUserRouter = require("./teamLead.router");
const studentUserRouter = require("./student.router");
const authenticationRouter = require("./authentication.router");
const adminRouter = require("./admin.router");
const teamRouter = require("./team");
const meetingRouter = require("./meeting.router");

const authorization = require('../middlewares/autentificacion')

const app = express();

function routerApi(app) {
  app.use("/api/meeting", meetingRouter);
  app.use("/api/users/teamLead", teamLeadUserRouter);
  // app.use("/api/users/teamLead", authorization.authorization, teamLeadUserRouter);
  app.use("/api/users/student", studentUserRouter);
  // app.use("/api/users/student", authorization.authorization, studentUserRouter);
  app.use("/api/team", teamRouter);
  // app.use("/api/team", authorization.authorization, teamRouter);
  app.use("/api/admin", adminRouter);
  app.use("/api/login", authenticationRouter);
}
module.exports = routerApi;
