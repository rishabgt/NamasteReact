require("dotenv").config();
const app = require("./src/App");

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API Endpoints:`);
  console.log(`GET /api/restaurants - Get all restaurants`);
  console.log(
    `GET /api/restaurants/:restaurantId/menu - Get menu items by restaurant ID`,
  );
  console.log(`GET /api/health - Health check endpoint`);
});
