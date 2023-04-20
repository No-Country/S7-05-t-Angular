const express = require("express");
const router = express.Router();
const {
  getTeam,
  getAllTeam,
  getTechnologyToTeam,
  addTechnologyToTeam,
} = require("../controllers/team.controller");

router.use(express.json());

router.get("/alltechnologies", getTechnologyToTeam);
router.get("/all", getAllTeam);
router.get("/:id", getTeam);

router.post("/addtechnologies", addTechnologyToTeam)

module.exports = router;
