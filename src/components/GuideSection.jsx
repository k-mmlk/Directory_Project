import React from "react";
import GuideGroup from "./GuideGroup";
import GuideHeading from "./GuideHeading";

const GuideSection = () => {
  return (
    <section className="2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-3 mx-auto py-24 flex flex-col justify-center">
      <GuideHeading />
      <GuideGroup />
    </section>
  );
};

export default GuideSection;
