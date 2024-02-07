import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    props?.resData?.info;

  const deliveryTime = sla.deliveryTime;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-image"
        alt="res-image"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
