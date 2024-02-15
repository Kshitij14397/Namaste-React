import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();
  const price = useSelector((store) => store.cart.price);

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="border rounded-lg p-2 mx-10 my-[75px] bg-white shadow-lg text-green-600 active:bg-black"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add +
              </button>
            </div>
            <div>
              <img
                src={`${CDN_URL}${item?.card?.info?.imageId}`}
                className="w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
