import React from "react";
import GuideGroup from "./GuideGroup";
import GuideHeading from "./GuideHeading";

const GuideSection = () => {
  return (
    <section className="container px-3 lg:px-0 xl:px-0 mx-auto h-screen flex flex-col justify-center">
      <GuideHeading />
      <GuideGroup />
    </section>
  );
};

export default GuideSection;
