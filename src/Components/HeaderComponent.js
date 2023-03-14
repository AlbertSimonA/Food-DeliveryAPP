import React, { startTransition } from "react";

import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className="flex shadow-2xl">
      <div className="flex ">
        <img className="w-32 ml-7 mt-7" src="./logo-img.png" alt="" />
        <h1 className="font-bold hover:text-green-500  text-blue-500 text-5xl mt-16 ml-7 ">
          <span className="text-pink-500 hover:text-blue-500">F</span>ood{" "}
          <span className="text-pink-500 hover:text-blue-500">H</span>UB
        </h1>
      </div>
      <div className="flex ">
        <ul className="flex  font-bold text-gray-500 gap-10 mt-20 ml-80 justify-between">
          <Link to="/">
            <li className="font-semibold">HOME</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/contact">
            <li>CONTACE</li>
          </Link>
          <Link to="/offers">
            <li>OFFERS</li>
          </Link>
          <Link to="/cart">
            <li>CART </li>
          </Link>
        </ul>
      </div>
      <div className="mt-16 ml-12">
        <button className="bg-blue-500 hover:border-2 hover:border-blue-700 hover:bg-white hover:text-black  rounded-2xl h-10 w-20 text-white">
          Log In
        </button>
      </div>
    </div>
  );
}

export default HeaderComponent;
