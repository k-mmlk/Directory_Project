import React, { useEffect, useState } from "react";
import Guide from "./Guide";
import Glide from "@glidejs/glide";

const GuideGroup = () => {
  const guides = [
    {
      id: 1,
      title: "New York",
      description: "The big apple",
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/new-york.jpg",
    },
    {
      id: 2,
      title: "Paris",
      description: "Artist capital of Europe",
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/paris.jpg",
    },
    {
      id: 3,
      title: "Barcelona",
      description: "Dalí, Gaudí, Barrio Gotico",
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/barcelona.jpg",
    },
    {
      id: 4,
      title: "Prague",
      description: "City of hundred towers",
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/prague.jpg",
    },
  ];

  const [focusedBullet, setFocusedBullet] = useState(0);

  const handleBulletClick = (index) => {
    setFocusedBullet(index);
  };

  const bulletItems = Array.from({ length: 4 }, (_, index) => ({
    index,
  }));

  const bulletContainerStyle = {
    transform: `translateX(-${focusedBullet * 16}px)`,
  };

  useEffect(() => {
    const glide = new Glide(".glide-section-one", {
      type: "carousel",
      perView: 5,
      gap: 31,
      breakpoints: {
        1280: {
          perView: 5,
        },
        1024: {
          perView: 4,
        },
        991: {
          perView: 3,
        },
        768: {
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
            {guides.map(({ id, title, description, image }) => (
              <Guide
                key={id}
                title={title}
                description={description}
                img={image}
              />
            ))}
          </ul>
        </div>

        <div className="w-[70px] px-4 h-[50px] -bottom-6 mx-auto overflow-hidden relative md:hidden lg:hidden xl:hidden">
          <div
            className="absolute bottom-0 w-[150px] py-2 flex"
            data-glide-el="controls[nav]"
            style={bulletContainerStyle}
          >
            {bulletItems.map((bullet, index) => (
              <button
                key={index}
                className={`glide__bullet bg-gray-400 hover:bg-blue-600 hover:border-blue-600 mr-1 select-none duration-300 ${
                  focusedBullet === index
                    ? "focus:bg-blue-600 focus:border-blue-600 !bg-blue-600 border-blue-600 scale-95"
                    : "scale-50"
                }`}
                onClick={() => handleBulletClick(index)}
                data-glide-dir={`=${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideGroup;
