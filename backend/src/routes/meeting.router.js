const express = require("express");
const {
  createMeeting,
  getAllWeeks,
  getOneWeek,
  createAttendance,
  getMeetingWithId,
  createStudentActivity,
} = require("../controllers/meeting.controller");
const router = express.Router();

router.use(express.json());

router.get("/weeks", getAllWeeks);
router.get("/week/:id", getOneWeek);
router.get("/search/:id", getMeetingWithId);

router.post("/create", createMeeting);
router.post("/createAttendance", createAttendance);
router.post("/createActivity", createStudentActivity);
//router.get("/all", getAllTeam);
//router.get("/:id", getTeam);

module.exports = router;
