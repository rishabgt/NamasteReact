import React from "react";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../utils/constants";
import { useParams } from "react-router";
const RestaurantMenu = (props) => {
  const [resInfo, setResInfo] = useState(null);
  const resid = useParams().id;
  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(
        BACKEND_URL + "/api/restaurants/" + resid + "/menu",
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    };
    fetchMenu();
  }, [resid]);

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resInfo[0].name}</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo[0].menu.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
