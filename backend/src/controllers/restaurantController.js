const restaurantService = require("../services/restaurantService");

class RestaurantController {
  getAllRestaurants = (req, res) => {
    try {
      const restaurants = restaurantService.getAllRestaurants();
      res.json({
        success: true,
        data: restaurants,
        count: restaurants.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

module.exports = new RestaurantController();
