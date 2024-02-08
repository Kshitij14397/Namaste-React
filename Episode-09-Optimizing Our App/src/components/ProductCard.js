import React from "react";

const ProductCard = (props) => {
  const { name, price, defaultPrice } = props?.info;

  return (
    <div className="product-card">
      <li>
        {name}: ₹{(price || defaultPrice) / 100}
      </li>
    </div>
  );
};

export default ProductCard;
