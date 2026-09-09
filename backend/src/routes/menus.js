const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

//Get all menu items
router.get("/:restaurantId/menu", menuController.getMenuByRestaurantId);

module.exports = router;
