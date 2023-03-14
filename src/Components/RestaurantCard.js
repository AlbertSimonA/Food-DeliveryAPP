import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="">
      <div className="w-56   p-2 m-2 mt-8 shadow-2xl bg-gray-200 ml-20 rounded-3xl">
        <img
          className="rounded-2xl "
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-lg">{name}</h2>
        <h4 className="text-xs">{cuisines.join(", ")}</h4>
        <h4 className="text-xs">{area}</h4>
        <span>
          <h4 className="bg-green-400 w-10 text-center rounded-2xl font-medium">
            <i class="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4 className="text-xs">{lastMileTravelString}</h4>{" "}
          <h4 className="text-xs">{costForTwoString}</h4>
          <button className="bg-white hover:bg-pink-500 hover:text-white rounded-2xl w-16 ml-14 hover:w-24 text-xs h-6 w-">
            Add Item
          </button>{" "}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
