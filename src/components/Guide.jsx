import React, { useEffect } from "react";

const Guide = ({ id, title, description, img }) => {
  return (
    <li className="glide__slide py-5">
      <div className="relative hover:-translate-y-1 duration-300 font-san ">
        <img
          className="rounded-lg h-[350px] w-full object-cover object-center"
          src={img}
          alt="true"
        />
        <div className="absolute left-5 bottom-5">
          <h3 className="uppercase text-white font-bold text-lg">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default Guide;
