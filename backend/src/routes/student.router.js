const express = require("express");
const {
  getOneStudent,
  getAllActiveStudents,
  searchStudent,
  getStudentsWithTeams,
} = require("../controllers/student.controller");

const router = express.Router();

router.use(express.json());

router.get("/", getAllActiveStudents);
router.get("/all", getStudentsWithTeams);
router.get("/:id", getOneStudent);
router.get("/search/:term", searchStudent);

module.exports = router;
