import React from "react";

const Card = ({ id, img, bgImg, name, roomName, type, rating, cost }) => {
  const length = 5;
  const numbers = Array.from({ length }, (_, index) => index + 1);

  return (
    <li className="glide__slide !h-auto inline-block py-5">
      <div className="hover:-translate-y-1 transition-all duration-300 shadow-lg !h-full bg-white font-san rounded-lg">
        <div className="relative">
          <a href="#">
            <img className="rounded-t-lg" src={bgImg} alt="" />
          </a>
          <div className="absolute top-5 right-5">
            <button className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-5 left-5">
            <a href="#" className="flex items-center gap-1">
              <img
                className="w-12 h-12 rounded-full border-2 border-white"
                src={img}
                alt=""
              />
              <span className="text-white text-sm">{name}</span>
            </a>
          </div>
        </div>
        <div className="p-5 bg-white rounded-b-lg">
          <a
            href="#"
            className="text-gray-800 font-bold text-base inline-block mb-2"
          >
            {roomName}
          </a>
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-500 text-sm">{type}</p>
            <div className="flex text-yellow-300">
              {numbers.map((number) =>
                number <= rating ? (
                  <svg
                    key={number}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    key={number}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                )
              )}
            </div>
          </div>
          <p className="text-gray-500 text-base">
            <span className="text-2xl font-bold text-blue-700 me-1">
              ${cost}
            </span>
            per night
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
