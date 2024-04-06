const express = require('express');
const router = express.Router();

const {createUser,getUser} = require('../controllers/user.controller.js');

router.post("/create", createUser);
router.get("/collect", getUser);

module.exports = router;