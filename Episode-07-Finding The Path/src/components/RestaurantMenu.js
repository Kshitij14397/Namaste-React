import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${SWIGGY_MENU_API}&restaurantId=${resId}`);
    const json = await data.json();
    const restaurant = json?.data;
    setRestaurantInfo(restaurant);
  };

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating } =
    restaurantInfo?.cards?.[0]?.card?.card?.info;

  const listOfCategories =
    restaurantInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu">
      <div className="restaurant-info">
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")}</p>
        <p>{avgRating} stars</p>
      </div>
      <div className="category-container">
        <h2>Menu</h2>
        {listOfCategories?.map((category, idx) => {
          if (
            idx !== 0 &&
            idx !== 1 &&
            idx !== listOfCategories.length - 1 &&
            idx !== listOfCategories.length - 2
          ) {
            return <CategoryCard key={idx} info={category?.card?.card} />;
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
