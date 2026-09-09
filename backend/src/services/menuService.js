const data = require("../data/menu.json");

class MenuService {
  getMenuByRestaurantId = (restaurantId) => {
    return data.filter((item) => item.restaurantId === restaurantId);
  };
}

module.exports = new MenuService();
