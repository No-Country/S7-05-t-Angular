const express = require("express");
const router = express.Router();
const {
  getTeam,
  getAllTeam,
  getTechnologyToTeam,
} = require("../controllers/team.controller");

router.use(express.json());

router.get("/alltechnologies", getTechnologyToTeam);
router.get("/all", getAllTeam);
router.get("/:id", getTeam);

module.exports = router;
