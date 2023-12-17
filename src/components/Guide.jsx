import React, { useEffect } from "react";
// import glide from "@glidejs/glide";
import Glide from "@glidejs/glide";
import img1 from "../img/our-guide/new-york.webp";
import img2 from "../img/our-guide/barcelona.webp";
import img3 from "../img/our-guide/paris.webp";
import img4 from "../img/our-guide/prague.webp";

const Guide = ({ id, title, description, img }) => {
  return (
    <li className="glide__slide">
      <div className="relative hover:-translate-y-1 duration-300  ">
        <img
          className="rounded-lg h-[350px] w-full object-cover object-center"
          src={img}
          alt="true"
        />
        <div className="absolute left-5 bottom-5">
          <h3 className="uppercase text-white font-bold text-lg">{title}</h3>
          <p className="font-semibold text-white">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default Guide;
