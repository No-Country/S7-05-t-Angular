const express = require('express');
const { createTeamLead, getTeamLead, getAllTeamLeads, getTeams } = require("../controllers/teamLead.controller");

const router = express.Router();
const { createTeamLead, getTeamLead, getAllTeamLeads } = require("../controllers/teamLead.controller");


router.use(express.json());

router.get("/", getAllTeamLeads);
router.get("/:id", getTeamLead);
router.get("/teams/:id", getTeams);
router.post("/create/:id", createTeamLead);


module.exports = router;