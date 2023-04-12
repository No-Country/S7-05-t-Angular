const express = require('express');
const { loginTL, loginAdmin } = require('../controllers/authentication.controller');

const router = express.Router();

router.use(express.json());

router.get("/teamleader", loginTL);
router.get("/admin", loginAdmin);



module.exports = router;