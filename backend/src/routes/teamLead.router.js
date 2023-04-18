const express = require('express');
const router = express.Router();
const { createTeamLead, getTeamLead, getAllTeamLeads, getTeams, addTeamLeadtoTeam } = require("../controllers/teamLead.controller");
const router = express.Router();

router.use(express.json());

router.get("/", getAllTeamLeads);
router.get("/:id", getTeamLead);
router.get("/teams/:id?", getTeams);
router.post("/create/:id", createTeamLead);
router.patch("/addteam", addTeamLeadtoTeam)


module.exports = router;