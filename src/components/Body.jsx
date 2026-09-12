import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { BACKEND_URL } from "../utils/constants";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("Use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    //URL:https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING
    const data = await fetch(BACKEND_URL + "/api/restaurants");
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.restaurants || []);
    setFilteredRestaurants(json?.data?.restaurants || []);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn btn-search"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((items) =>
                items.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn btn-filter"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (items) => items.avgRating > 4.1,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className=" btn btn-reset"
          onClick={() => {
            fetchData();
            setFilteredRestaurants(listOfRestaurants);
          }}
        >
          Reset Filters
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((items, index) => (
          <RestaurantCard key={index} resData={items} /> //Using index as key for simplicity,
          //but its a bad practice in real apps
        ))}
      </div>
    </div>
  );
};

export default Body;
