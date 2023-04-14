const express = require("express");
const router = express.Router();
const teamLeadUserRouter = require("./teamLead.router");
const studentUserRouter = require("./student.router");

const app = express();

function routerApi(app) {
  app.use("/api/users/teamLead", teamLeadUserRouter);
  app.use("/api/users/student", studentUserRouter);
}
module.exports = routerApi;
