const menuService = require("../services/menuService");

class MenuController {
  getMenuByRestaurantId = (req, res) => {
    try {
      const menuItems = menuService.getMenuByRestaurantId(
        req.params.restaurantId,
      );
      res.json({
        success: true,
        data: menuItems,
        count: menuItems.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

module.exports = new MenuController();
