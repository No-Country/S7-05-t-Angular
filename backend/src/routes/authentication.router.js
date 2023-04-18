const express = require('express');
const { loginTL, loginAdmin } = require('../controllers/authentication.controller');

const router = express.Router();

router.use(express.json());

router.post("/teamleader", loginTL);
router.post("/admin", loginAdmin);



module.exports = router;