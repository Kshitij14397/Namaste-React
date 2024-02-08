import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

// Custom Hook for fetching the Restaurant Menu Data
const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${SWIGGY_MENU_API}&restaurantId=${resId}`);
    const json = await data.json();
    const restaurant = json?.data;
    setRestaurantInfo(restaurant);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
