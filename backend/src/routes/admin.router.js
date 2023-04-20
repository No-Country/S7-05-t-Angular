const express = require('express');
const { getTeamLeades } = require("../controllers/admin.controller");

const router = express.Router();

router.use(express.json());

router.get("/teamLeaders", getTeamLeades);


module.exports = router;