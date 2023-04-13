const express = require('express');
const { createTeamLead, getTeamLead, getTeams } = require("../controllers/teamLead.controller");

const router = express.Router();

router.use(express.json());

router.get("/:id", getTeamLead);
router.post("/create", createTeamLead);
router.get("/teams/:id", getTeams);


module.exports = router;