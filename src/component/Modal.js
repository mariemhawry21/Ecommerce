import React from "react";

import p1 from "../images/image-product-1.jpg";
import p2 from "../images/image-product-2.jpg";
import p3 from "../images/image-product-3.jpg";
import p4 from "../images/image-product-4.jpg";
import pt1 from "../images/image-product-1-thumbnail.jpg";
import pt2 from "../images/image-product-2-thumbnail.jpg";
import pt3 from "../images/image-product-3-thumbnail.jpg";
import pt4 from "../images/image-product-4-thumbnail.jpg";

import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import close from "../images/icon-close.svg";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toggleOpen } from "../cart/modalSlice";
const dataImg = [
  {
    img: p1,
    thumbnail: pt1,
  },
  {
    img: p2,
    thumbnail: pt2,
  },
  {
    img: p3,
    thumbnail: pt3,
  },
  {
    img: p4,
    thumbnail: pt4,
  },
];
const Close = () => {
  return (
    <svg
      width="30"
      height="30"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 w-[30px] top-[-30px] animate-bounce"
    >
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
  );
};
const Modal = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(dataImg);
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.modal.openModal);
  return (
    <>
      {openModal ? (
        <div className="z-30 absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black opacity-95 transition-all duration-500">
          <div className="relative w-[30%] ">
            <div className=" relative ">
              <div
                onClick={() => dispatch(toggleOpen())}
                className="cursor-pointer"
              >
                <Close />
              </div>
              <img
                src={prev}
                alt="Previous"
                onClick={() => {
                  if (current === 0) {
                    setCurrent(3);
                    return;
                  }
                  setCurrent((c) => {
                    return c - 1;
                  });
                }}
                className="absolute left-[-20px]  top-[50%] bg-white rounded-full p-4 "
              />
              <img
                src={dataImg[current].img}
                alt="shoes"
                className="w-full md:w-full md:rounded-lg md:h-[400px]"
              />
              <img
                src={next}
                alt="Next"
                onClick={() => {
                  if (current === 3) {
                    setCurrent(0);
                    return;
                  }
                  setCurrent((c) => {
                    return c + 1;
                  });
                }}
                className="absolute right-[-15px] top-[50%] p-4 block  bg-white rounded-full"
              />
            </div>
            <div className="hidden md:flex flex-row w-full items-start justify-between relative">
              {data.map((d, id) => {
                return (
                  <img
                    key={id}
                    src={d.thumbnail}
                    alt="shoes"
                    className={`${
                      d.thumbnail === data[current].thumbnail
                        ? "border-4 border-red-400 "
                        : ""
                    }" rounded-lg mt-2 w-[20%] h-[20%]"`}
                    onClick={() => setCurrent(id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
