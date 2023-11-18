import React from "react";
import Slider from "./Slider";
import Shop from "./Shop";
import Modal from "./Modal";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Slider />
      <Shop />
      <Modal />
    </div>
  );
};

export default Home;
