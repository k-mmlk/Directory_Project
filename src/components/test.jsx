import React, { useEffect } from "react";
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

export default GuideGroup;
