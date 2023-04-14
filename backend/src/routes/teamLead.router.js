const express = require('express');
const router = express.Router();
const { createTeamLead, getTeamLead, getAllTeamLeads } = require("../controllers/teamLead.controller");


router.use(express.json());

router.get("/", getAllTeamLeads);
router.get("/:id", getTeamLead);
router.post("/create/:id", createTeamLead);


module.exports = router;