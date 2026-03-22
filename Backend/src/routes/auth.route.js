const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/auth.controller");

// @route    POST /api/auth/signup
// @desc     Register new user
// @access   Public
router.post("/signup", signup);

// @route    POST /api/auth/login
// @desc     Login User
// @access   Public

router.post("/login", login);

// Export the router to be used in app.js
module.exports = router;
