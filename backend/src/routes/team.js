const express = require("express");
const router = express.Router();

const { getTeam, getAllTeam } = require("../controllers/team.controller");

router.use(express.json());

router.get("/all", getAllTeam);
router.get("/:id", getTeam);

module.exports = router;
