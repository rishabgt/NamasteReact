const data = require("../data/menu.json");

class MenuService {
  getMenuByRestaurantId = (restaurantId) => {
    return data.restaurants.filter((item) => item.id === restaurantId);
  };
}

module.exports = new MenuService();
