const data = require("../data/restaurants.json");

class RestaurantService {
  getAllRestaurants = () => {
    return data;
  };
}

module.exports = new RestaurantService();
