import React from "react";
import GuideGroup from "./GuideGroup";
import GuideHeading from "./GuideHeading";

const GuideSection = () => {
  return (
    <section className="container px-3 mx-auto min-h-screen flex flex-col justify-center">
      <GuideHeading />
      <GuideGroup />
    </section>
  );
};

export default GuideSection;
