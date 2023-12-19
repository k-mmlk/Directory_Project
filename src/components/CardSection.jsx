import React from "react";
import CardHeading from "./CardHeading";
import CardGroup from "./CardGroup";

const CardSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-3 min-h-screen flex flex-col justify-center">
        <CardHeading />
        <CardGroup />
      </div>
    </section>
  );
};

export default CardSection;
