const express = require("express");
const {
  gettAllTechnologies,
  searchTechnology,
} = require("../controllers/technology.controller");
const router = express.Router();

router.use(express.json());

router.get("/", gettAllTechnologies);
router.get("/:term", searchTechnology);

module.exports = router;
