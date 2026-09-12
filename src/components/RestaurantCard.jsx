import { CDN_URL } from "../utils/constants";

console.info(CDN_URL);

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt={name} src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating} stars</div>
      <div>{deliveryTime} mins</div>
    </div>
  );
};

export default RestaurantCard;
