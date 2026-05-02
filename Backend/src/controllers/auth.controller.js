require("dotenv").config();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const redis = require("../config/cache");

// SIGNUP LOGIC
exports.signup = async (req, res) => {
  // Validate incoming request data
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    bio: Joi.string().max(500).optional(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      Message: error.details[0].message,
    });
  }

  try {
    const { username, email, password, bio } = req.body;

    // Hash user password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in database - MongoDB unique index will prevent duplicates
    let createdUser;
    try {
      createdUser = await User.create({
        username,
        email,
        password: hashedPassword,
        bio,
      });
    } catch (err) {
      // Handle duplicate username or email error
      if (err.code === 11000) {
        return res.status(400).json({
          Message: "Username or email already exists",
        });
      }
      // Re-throw other errors to outer catch block
      throw err;
    }

    // Generate JWT token for authentication
    const token = jwt.sign(
      {
        id: createdUser._id,
        email: createdUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    /* 
      // Set cookie to browser with security options by res.cookie method
      res.cookie("token", token, {
        httpOnly: true, // Prevent XSS attacks
        secure: process.env.NODE_ENV === "production", // HTTPS only in production
        sameSite: "strict", // CSRF protection
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      });
     */

    // Prepare user response without password field
    const userResponse = createdUser.toObject();
    delete userResponse.password;

    // Send success response with user data
    return res.status(201).json({
      Message: "User created successfully.",
      token: token,
      user: userResponse,
    });
  } catch (error) {
    // Log error for debugging purposes
    console.error("Signup error:", error);
    // Send generic error message to client
    return res.status(500).json({
      Message: "Registration failed. Please try again",
    });
  }
};

// LOGIN LOGIC
exports.login = async (req, res) => {
  // Joi validation (email, password)
  const Schema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required(),
  }); // Require either email or username for login

  const { error } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      Message: error.details[0].message,
    });
  }

  try {
    const { login, password } = req.body;
    const userExists = await User.findOne({
      $or: [{ email: login }, { username: login }],
    });
    // check if user exists with given email or username
    if (!userExists) {
      return res.status(401).json({
        Message: "Invalid email or password",
      });
    }
    // check if password is valid
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        Message: "Invalid email or password",
      });
    }
    // JWT TOKEN + COOKIE SET TO BROWSER
    const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // Set cookie to browser with security options
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    // Prepare user response without password field
    const userResponse = userExists.toObject();
    delete userResponse.password;
    // send success response with user data
    return res.status(200).json({
      success: true,
      token: token,
      Message: "Login successful",
      user: userResponse,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      Message: "Login failed. Please try again",
    });
  }
};

// LOGOUT LOGIC
exports.logout = async (req, res) => {
  try {
    const token = req.cookies.token;
    // Blacklisting token using Redis
    await redis.set(token, Date.now().toString(), "EX", 24 * 60 * 60); // Set token with 1 day expiration
    return res.status(200).json({
      message: "Logout Successfully",
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Logout failed. Please try again",
      error: error.message,
      status: "failed",
    });
  }
};

// GET-ME LOGIC
exports.getMe = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    if(!user){
      return res.status(404).json({
        message: "User not found",
      })
    }
    // If User is found: then send this response
    return res.status(200).json({
      message: "User Profile",
      user: user
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch user profile. Please try again",
      error: error.message,
      status: "failed",
    });
  }
};
