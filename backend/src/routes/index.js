const express = require("express");
const router = express.Router();
const teamLeadUserRouter = require("./teamLead.router");
const studentUserRouter = require("./student.router");
const authenticationRouter = require("./authentication.router");
const teamRouter = require("./team");

const app = express();

function routerApi(app) {
  app.use("/api/users/teamLead", teamLeadUserRouter);
  app.use("/api/users/student", studentUserRouter);
  app.use("/api/login", authenticationRouter);
  app.use("/api/team", teamRouter);
}
module.exports = routerApi;
