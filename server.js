// This file is now unused for Vercel deployment. All logic moved to api/index.js

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const swaggerUi = require("swagger-ui-express");
// const swaggerSpec = require("./config/swagger");
// const { scheduleStatusUpdates } = require("./utils/cronJobs");
// const connectDB = require("./config/database");
// const { ERROR_MESSAGES, createErrorResponse } = require("./utils/errorHandler");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN || "*",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(helmet());
// app.use(morgan("dev"));

// // Swagger Documentation
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.get("/swagger.json", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.send(swaggerSpec);
// });

// // Connect to MongoDB
// connectDB();

// // Initialize cron job for donor status updates
// scheduleStatusUpdates();

// // Handle MongoDB connection events
// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB connection error:", err);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("MongoDB disconnected");
// });

// // Routes
// const authRoutes = require("./routes/auth.routes");
// const donorRoutes = require("./routes/donor.routes");
// const donationRoutes = require("./routes/donation.routes");
// const groupRoutes = require("./routes/group.routes");

// app.use("/api/auth", authRoutes);
// app.use("/api/donors", donorRoutes);
// app.use("/api/donations", donationRoutes);
// app.use("/api/groups", groupRoutes);

// // Health check endpoint
// app.get("/api/health", (req, res) => {
//   res.status(200).send("OK");
// });

// // Lightweight health check endpoint for uptime monitoring
// app.get("/ping", (req, res) => {
//   res.status(200).send("pong");
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res
//     .status(500)
//     .json(createErrorResponse(500, ERROR_MESSAGES.SERVER_ERROR, err.message));
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
