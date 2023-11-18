import React from "react";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  removeFromCart,
  countItems,
  Result,
} from "../cart/cartSlice";

const Icon = () => {
  return (
    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fill="#FFF"
        fill-rule="nonzero"
      />
    </svg>
  );
};
const Shop = () => {
  const cartItems = useSelector((state) => state.cart.amount);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="flex items-start flex-col md:p-16 md:w-[50%] mt-4 md:mt-0">
      <p className="text-orange-400 uppercase">sneakers company</p>
      <h1 className="text-2xl md:text-5xl font-medium  mt-3">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-gray-600 mt-5 font-medium">
        These low-profile sneakers are your perfect casual wear companion
        .Featuring a durable rubber outer sole,they'll withstand everything the
        weather can offer
      </p>
      <div className="flex md:flex-col flex-row justify-between items-center md:items-start mt-3 w-full md:w-auto p-4 md:p-0">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">$125.00</h2>
          <span className="bg-orange-100 text-orange-600 font-bold ml-3 p-2 rounded-xl">
            50%
          </span>
        </div>
        <p className="text-gray-400 line-through font-bold">$250</p>
      </div>
      <div className="flex flex-col md:flex-row mt-4 w-full p-2">
        <div className="flex flex-row justify-between bg-gray-100 rounded-lg p-3 mb-5 md:mb-0">
          <button
            className="w-[25%] md:w-[25px] flex justify-center items-center"
            onClick={() => {
              dispatch(removeFromCart());
              dispatch(Result());
            }}
          >
            <img src={minus} alt="minus" />
          </button>
          <p className="w-[50%] md:w-[100px] text-center">{cartItems}</p>
          <button
            className="w-[25%] md:w-[25px] flex justify-center items-center"
            onClick={() => {
              dispatch(addToCart());
              dispatch(Result());
            }}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>
        <div className="flex items-center bg-orange-400 md:ml-3 rounded-lg p-4 cursor-pointer justify-center">
          <Icon />
          <p
            className="text-white font-medium ml-2"
            onClick={() => {
              dispatch(countItems());
              dispatch(Result());
            }}
          >
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
