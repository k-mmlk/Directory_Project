import React from "react";

const GuideHeading = () => {
  return (
    <div className="mb-12">
      <div className="md:flex lg:flex xl:flex items-center justify-between">
        <div>
          <h3 className="text-indigo-600 font-bold text-base lg:text-lg xl:text-lg tracking-widest ">
            STAY AND EAT LIKE A LOCAL
          </h3>
          <h2 className="font-bold text-2xl lg:text-4xl xl:text-4xl">
            Our guides
          </h2>
        </div>
        <div>
          <a
            className="flex items-center mt-3 md:mt-0 lg:mt-0 xl:mt-0 xl:justify-center gap-2 text-base text-gray-400 font-semibold"
            href="#"
          >
            See all guides
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 stroke-[3px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuideHeading;
