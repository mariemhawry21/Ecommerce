import React, { useState } from "react";
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

import { useDispatch } from "react-redux";
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
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(dataImg);
  const dispatch = useDispatch();

  return (
    <div className="w-full md:w-[40%] md:px-10 md:mt-5 md:py-5">
      <div className=" relative">
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
          className="absolute left-[2rem] top-[50%] md:hidden bg-white rounded-full p-2"
        />
        <img
          src={dataImg[current].img}
          alt="shoes"
          className="w-full md:w-full md:rounded-lg md:h-[400px] cursor-pointer"
          onClick={() => dispatch(toggleOpen())}
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
          className="absolute right-[2rem] top-[50%] p-2 block md:hidden bg-white rounded-full"
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
  );
};

export default Slider;
