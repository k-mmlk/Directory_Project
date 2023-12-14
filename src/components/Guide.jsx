import React, { useEffect } from "react";
// import glide from "@glidejs/glide";
import Glide from "@glidejs/glide";
import img1 from "../img/our-guide/new-york.webp";
import img2 from "../img/our-guide/barcelona.webp";
import img3 from "../img/our-guide/paris.webp";
import img4 from "../img/our-guide/prague.webp";

const Guide = () => {
  useEffect(() => {
    const glide = new Glide(".glide-section-one", {
      type: "carousel",
      perView: 5,
      gap: 20,
      breakpoints: {
        1280: {
          perView: 5,
        },
        1024: {
          perView: 4,
        },
        768: {
          perView: 3,
        },
        640: {
          perView: 2,
        },
        399: {
          perView: 1,
        },
      },
    });

    glide.mount();
  }, []);

  return (
    <div>
      <div className="glide glide-section-one relative">
        <div
          className="glide__track grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7"
          data-glide-el="track"
        >
          <ul className="glide__slides pt-5">
            <li className="glide__slide">
              <div className="relative hover:-translate-y-1 duration-300  ">
                <img
                  className="rounded-lg h-[350px] w-full object-cover object-center"
                  src={img1}
                  alt="true"
                />
                <div className="absolute left-5 bottom-5">
                  <h3 className="uppercase text-white font-bold text-lg">
                    New York
                  </h3>
                  <p className="font-semibold text-white">The big apple</p>
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="relative hover:-translate-y-1 duration-300 ">
                <img
                  className="rounded-lg h-[350px] w-full object-cover object-center"
                  src={img3}
                  alt="true"
                />
                <div className="absolute left-5 bottom-5">
                  <h3 className="uppercase text-white font-bold text-lg">
                    Paris
                  </h3>
                  <p className="font-semibold text-white">
                    Artist capital of Europe
                  </p>
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="relative hover:-translate-y-1 duration-300 ">
                <img
                  className="rounded-lg h-[350px] w-full object-cover object-center"
                  src={img2}
                  alt="true"
                />
                <div className="absolute left-5 bottom-5">
                  <h3 className="uppercase text-white font-bold text-lg">
                    Barcelona
                  </h3>
                  <p className="font-semibold text-white">
                    Dalí, Gaudí, Barrio Gotico
                  </p>
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="relative hover:-translate-y-1 duration-300 ">
                <img
                  className="rounded-lg h-[350px] w-full object-cover object-center"
                  src={img4}
                  alt="true"
                />
                <div className="absolute left-5 bottom-5">
                  <h3 className="uppercase text-white font-bold text-lg">
                    Prague
                  </h3>
                  <p className="font-semibold text-white">
                    City of hundred towers
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div
          className="glide__bullets absolute -bottom-9 block md:hidden lg:hidden xl:hidden"
          data-glide-el="controls[nav]"
        >
          <button
            className="glide__bullet bg-gray-300 active:bg-blue-800"
            data-glide-dir="=0"
          />
          <button
            className="glide__bullet bg-gray-300 active:bg-blue-800"
            data-glide-dir="=1"
          />
          <button
            className="glide__bullet bg-gray-300 active:bg-blue-800"
            data-glide-dir="=2"
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
