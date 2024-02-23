import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

// Abstracted the logic of fetching restaurant menu data into useRestaurantMenu Hook and now RestaurantMenu Component will have only responsibility of just displaying the menu data.
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showCategory, setShowCategory] = useState({ index: 0, visible: true });

  //Custom Hook
  const menuInfo = useRestaurantMenu(resId);

  if (menuInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = menuInfo?.restaurantInfo;

  const categories = menuInfo?.categoriesInfo?.categories;
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {/* categories accordians */}
      {categories?.map((category, idx) => (
        //Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={idx === showCategory.index ? showCategory.visible : false}
          setShowCategory={() => {
            idx == showCategory.index
              ? setShowCategory({
                  index: showCategory.index,
                  visible: !showCategory.visible,
                })
              : setShowCategory({ index: idx, visible: true });
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
