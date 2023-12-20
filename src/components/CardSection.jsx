import React from "react";
import CardHeading from "./CardHeading";
import CardGroup from "./CardGroup";

const CardSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-3 mx-auto py-24 flex flex-col justify-center">
        <CardHeading />
        <CardGroup />
      </div>
    </section>
  );
};

export default CardSection;
