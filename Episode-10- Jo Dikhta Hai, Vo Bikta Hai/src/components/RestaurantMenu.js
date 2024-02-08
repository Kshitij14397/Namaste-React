import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

// Abstracted the logic of fetching restaurant menu data into useRestaurantMenu Hook and now RestaurantMenu Component will have only responsibility of just displaying the menu data.
const RestaurantMenu = () => {
  const { resId } = useParams();

  //Custom Hook
  const restaurantInfo = useRestaurantMenu(resId);

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
