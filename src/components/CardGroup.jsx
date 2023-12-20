import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Card from "./Card";

const CardGroup = () => {
  const [focusedBullet, setFocusedBullet] = useState(0);

  const handleBulletClick = (index) => {
    setFocusedBullet(index);
  };

  const bulletItems = Array.from({ length: 6 }, (_, index) => ({
    index,
  }));

  const bulletContainerStyle = {
    transform: `translateX(-${focusedBullet * 16}px)`,
  };

  const cards = [
    {
      id: 1,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/avatar/avatar-0.jpg",
      bgImg:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/photo-1484154218962-a197022b5858.jpg",
      name: "Pamela",
      roomName: "Modern, Well-Appointed Room",
      roomType: "Private room",
      rating: 5,
      cost: 80,
    },
    {
      id: 2,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/avatar/avatar-7.jpg",
      bgImg:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/photo-1426122402199-be02db90eb90.jpg",
      name: "John",
      roomName: "Cute Quirky Garden apt, NYC adjacent",
      roomType: "Entire apartment",
      rating: 4,
      cost: 121,
    },
    {
      id: 3,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/avatar/avatar-8.jpg",
      bgImg:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/photo-1512917774080-9991f1c4c750.jpg",
      name: "Julie",
      roomName: "Modern Apt - Vibrant Neighborhood!",
      roomType: "Entire apartment",
      rating: 3,
      cost: 75,
    },
    {
      id: 4,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/avatar/avatar-9.jpg",
      bgImg:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/photo-1494526585095-c41746248156.jpg",
      name: "Barbora",
      roomName: "Sunny Private Studio-Apartment",
      roomType: "Shared room",
      rating: 4,
      cost: 93,
    },
    {
      id: 5,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/avatar/avatar-10.jpg",
      bgImg:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/photo-1522771739844-6a9f6d5f14af.jpg",
      name: "Jack",
      roomName: "Mid-Century Modern Garden Paradise",
      roomType: "Entire house",
      rating: 5,
      cost: 115,
    },
    {
      id: 6,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/avatar/avatar-11.jpg",
      bgImg:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/photo-1488805990569-3c9e1d76d51c.jpg",
      name: "Stuart",
      roomName: "Brooklyn Life, Easy to Manhattan",
      roomType: "Private room",
      rating: 4,
      cost: 123,
    },
  ];

  useEffect(() => {
    const glide_two = new Glide(".glide-section-two", {
      type: "carousel",
      perView: 4,
      gap: 20,
      breakpoints: {
        1285: {
          perView: 4,
        },
        1198: {
          perView: 3,
        },
        990: {
          perView: 2,
        },
        564: {
          perView: 1,
        },
      },
    });

    glide_two.mount();
  }, []);

  return (
    <div>
      <div className="glide glide-section-two relative">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides py-5 w-[300px]">
            {cards.map((card) => (
              <Card
                key={card.id}
                img={card.image}
                bgImg={card.bgImg}
                name={card.name}
                roomName={card.roomName}
                type={card.roomType}
                rating={card.rating}
                cost={card.cost}
              />
            ))}
          </ul>
        </div>

        <div className="w-[70px] px-4 h-[50px] mx-auto overflow-hidden relative">
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

export default CardGroup;
