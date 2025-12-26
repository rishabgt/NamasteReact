import resData from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  console.log(resData);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((items, index) => (
          <RestaurantCard key={index} resData={items} />//Using index as key for simplicity, 
                                                    //but its a bad practice in real apps
        ))}
      </div>
    </div>
  );
};

export default Body;