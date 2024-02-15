import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowCategory, index }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    console.log("kp1");
    setShowCategory();
  };

  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
      {/* {Accordian Body} */}
    </div>
  );
};

export default RestaurantCategory;
