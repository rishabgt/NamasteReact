import { useEffect, useState } from "react";
import resData from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  console.log(resData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn btn-filter"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (items) => items.info.avgRating > 4.1
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className=" btn btn-reset"
          onClick={() => {
            setListOfRestaurants(resData);
          }}
        >
          Reset Filters
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((items, index) => (
          <RestaurantCard key={index} resData={items} /> //Using index as key for simplicity,
          //but its a bad practice in real apps
        ))}
      </div>
    </div>
  );
};

export default Body;
