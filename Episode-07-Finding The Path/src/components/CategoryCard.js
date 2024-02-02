import React from "react";
import ProductCard from "./ProductCard";

const CategoryCard = (props) => {
  const { title, itemCards } = props?.info;

  return (
    <div className="category-card">
      <h3>{title}</h3>
      <div className="product-container">
        {itemCards?.map((item) => {
          return (
            <ProductCard key={item?.card?.info?.id} info={item?.card?.info} />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCard;
