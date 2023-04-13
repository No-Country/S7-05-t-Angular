const express = require('express');
const { createTeamLead, getTeamLead } = require("../controllers/teamLead.controller");

const router = express.Router();

router.use(express.json());

router.get("/:id", getTeamLead);
router.post("/create", createTeamLead);


module.exports = router;