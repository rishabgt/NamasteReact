import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("Use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
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
                items.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn btn-filter"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (items) => items.info.avgRating > 4.1,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className=" btn btn-reset"
          onClick={() => {
            fetchData();
            setListOfRestaurants(listOfRestaurants);
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
