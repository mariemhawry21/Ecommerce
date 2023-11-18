import React from "react";
import { useSelector, useDispatch } from "react-redux";
import p1 from "../images/image-product-1-thumbnail.jpg";
import trash from "../images/icon-delete.svg";
const Cart = () => {
  const { items, amount, price, total, open } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  return (
    <div className=" absolute w-screen md:w-auto h-auto top-[100px] md:top-[100px] right-0 p-2 md:p-0   z-20">
      {open ? (
        <div className="bg-white p-5 rounded-xl">
          <h3 className="font-medium mb-3">Cart</h3>
          <hr />
          {items != 0 && amount != 0 ? (
            <div className="flex flex-row justify-between items-center p-3">
              <img src={p1} alt="shoes" className="w-[50px] mr-2" />
              <div className="flex flex-col p-2">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  <span className="text-gray-600 font-medium">
                    {price} x {amount}
                  </span>
                  <span className="text-black font-bold ml-2">{total}</span>
                </p>
              </div>
              <img src={trash} alt="trash" className="ml-3 cursor-pointer" />
            </div>
          ) : (
            <div className="flex justify-center items-center p-10">
              Your Cart Is Empty
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
