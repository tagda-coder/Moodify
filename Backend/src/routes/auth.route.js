const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { signup, login, logout, getMe } = require("../controllers/auth.controller");


// @route    POST /api/auth/signup
// @desc     Register new user
// @access   Public
router.post("/signup", signup);

// @route    POST /api/auth/login
// @desc     Login User
// @access   Public
router.post("/login", login);

// @route   POST /api/auth/logout
// @desc    Logout user by clearing cookie using redis
// @access  Private 
router.post("/logout", authMiddleware, logout);

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get("/me", authMiddleware, getMe);

// Export the router to be used in app.js
module.exports = router;
