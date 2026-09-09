const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");

//Get all restaurants
router.get("/", restaurantController.getAllRestaurants);

module.exports = router;
