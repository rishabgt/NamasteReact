const express = require("express");
const cors = require("cors");
const restaurantRoutes = require("./routes/restaurants");
const menuRoutes = require("./routes/menus");

const app = express();

//Middleware
// Enhanced CORS configuration for development
app.use(
  cors({
    origin: ["http://localhost:8000", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Request logger middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

//Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/restaurants", menuRoutes);

//Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

//404 error handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not Found" });
});

//Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Internal Server Error" });
});

module.exports = app;
