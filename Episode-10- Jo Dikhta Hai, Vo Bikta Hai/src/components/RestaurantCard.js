import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    props?.resData?.info;

  const deliveryTime = sla.deliveryTime;

  return (
    <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-image"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
