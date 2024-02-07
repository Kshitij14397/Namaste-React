import resLists from "./../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestuarants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      console.log("kp1");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANTS_API);

    const json = await data.json();

    // Optional Chaining
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };

  // Conditional Rendering
  return listOfRestuarants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              const filteredRestaurants = listOfRestuarants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim())
              );

              setFilteredListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestuarants.filter(
              (restaurant) => restaurant.info.avgRating > 4.4
            );
            setFilteredListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants?.map((res) => (
          <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
