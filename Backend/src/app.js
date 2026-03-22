require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.route");

// ======== MIDDLEWARES =========
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// ====== CONNECT TO DATABASE ======
connectDB();

// ======= CHECK JWT_SECRET =======
if (!process.env.JWT_SECRET) {
  console.error("FATAL ERROR: JWT_SECRET not configured");
  process.exit(1);
}

// ======= ROUTES =========
// ← Yahaan saare routes call hote hain
app.use("/api/auth", authRoutes);

module.exports = app;
