import React from "react";
const FooterImg = ({ id, url }) => {
  return (
    <a href="#">
      <img
        src={url}
        className="mt-10 mb-10 hover:rounded-sm  hover:scale-105 transition-all duration-300 ease-in-out"
        alt=""
      />
    </a>
  );
};

export default FooterImg;
