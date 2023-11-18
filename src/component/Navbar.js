import React, { useState } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import avatar from "../images/image-avatar.png";

import Cart from "./Cart";

import { useSelector, useDispatch } from "react-redux";
import { toggleOpen } from "../cart/cartSlice";

const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.cart.amount);
  return (
    <nav className="flex flex-row  w-full shadow-md justify-between p-5 md:p-10 items-center relative">
      <div className="flex flex-row">
        <img
          src={menu}
          alt="menu"
          className="md:hidden mx-5 md:mx-0 cursor-pointer"
          onClick={() => setIsOpen(!open)}
        />
        <img src={logo} alt="logo" />
        <ul className="hidden md:flex md:flex-row mx-5 text-gray-500 font-medium text-xl bg-white">
          <li className="mx-2 hover:text-gray-300 duration-500 cursor-pointer">
            collections
          </li>
          <li className="mx-2 hover:text-gray-300 duration-500 cursor-pointer">
            Men
          </li>
          <li className="mx-2 hover:text-gray-300 duration-500 cursor-pointer">
            Women
          </li>
          <li className="mx-2 hover:text-gray-300 duration-500 cursor-pointer">
            About
          </li>
          <li className="mx-2 hover:text-gray-300 duration-500 cursor-pointer">
            Contact
          </li>
        </ul>
        {open ? (
          <ul className="absolute top-0 bg-white flex flex-col w-36 min-h-screen z-10 left-0 p-2 text-gray-500 font-medium text-xl">
            <img
              src={close}
              alt="close"
              onClick={() => setIsOpen(!open)}
              className="w-[20px] m-5 cursor-pointer"
            />
            <li className="mt-4 hover:text-gray-300 duration-500 cursor-pointer">
              collections
            </li>
            <li className="mt-4 hover:text-gray-300 duration-500 cursor-pointer">
              Men
            </li>
            <li className="mt-4 hover:text-gray-300 duration-500 cursor-pointer">
              Women
            </li>
            <li className="mt-4 hover:text-gray-300 duration-500 cursor-pointer">
              About
            </li>
            <li className="mt-4 hover:text-gray-300 duration-500 cursor-pointer">
              Contact
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-row items-center relative">
        <img
          src={cart}
          alt="cart"
          className="w-[20px] h-[20px] mx-5 cursor-pointer "
          onClick={() => dispatch(toggleOpen())}
        />
        <div className="absolute rounded-[50%] bg-orange-500 w-[20px] h-[20px] flex justify-center items-center text-center text-white top-[-5px] left-[2rem]">
          {amount}
        </div>
        <img src={avatar} alt="avatar" className="w-[50px] cursor-pointer" />
      </div>
      <Cart />
    </nav>
  );
};

export default Navbar;
