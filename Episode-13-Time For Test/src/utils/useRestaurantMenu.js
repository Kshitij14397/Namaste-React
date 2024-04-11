import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

// Custom Hook for fetching the Restaurant Menu Data
const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_API}&restaurantId=${resId}`);
    const json = await data.json();
    const menu = json?.data?.menu;
    setMenuInfo(menu);
  };

  return menuInfo;
};

export default useRestaurantMenu;
