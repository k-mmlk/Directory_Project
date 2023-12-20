import React, { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const Article = () => {
  const blogItems = [
    {
      id: 0,
      img: "https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1467987506553-8f3916508521.jpg&w=3840&q=75",
      link1: " TRAVEL",
      link2: "Escape the city today",
      para: " Is am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world...",
    },
    {
      id: 1,
      img: "https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1512917774080-9991f1c4c750.jpg&w=3840&q=75",
      link1: " TRAVEL",
      link2: " Autumn fashion tips and tricks",
      para: " Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...",
    },
    {
      id: 2,
      img: "https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1522771739844-6a9f6d5f14af.jpg&w=3840&q=75",
      link1: " LIVING",
      link2: " Newest photo apps",
      para: " ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibu...",
    },
  ];

  const glideRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(glideRef.current, {
      type: "carousel",
      perView: 2,
      gap: 20,
      breakpoints: {
        768: {
          perView: 1,
        },
      },
    });

    glide.mount();
    return () => {
      glide.destroy();
    };
  }, []);

  const [focusedBullet, setFocusedBullet] = useState(0);

  const handleBulletClick = (id) => {
    setFocusedBullet(id);
  };

  const bulletItems = Array.from({ length: 4 }, (_, index) => ({
    index,
  }));

  // const bulletContainerStyle = {
  //   transform: `translateX(-${focusedBullet * 16}px)`,
  // };

  return (
    <div>
      <section
        style={{
          backgroundImage:
            "url(https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1497436072909-60f360e1d4b1.jpg&w=1920&q=75)",
        }}
        className=" h-[532px] bg-center opacity-100 bg-cover "
      >
        <div className="bg-black/20  w-full h-[532px]  ">
          <div className="flex flex-col justify-start items-start ml-8  lg:ml-[100px] py-[180px] w-[330px]  lg:w-[1000px]">
            <h1 className="lg:text-7xl mb-10 text-white font-bold font-fair text-4xl ">
              Ready for your next holidays?
            </h1>
            <button className="bg-white  text-slate-700 tracking-[0.4em] p-3 rounded-lg font-san font-semibold text-sm ">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-[900px] pt-20 font-san">
        <div className="text-center mb-20 ">
          <p className="font-bold text-blue-700 tracking-widest text-lg mb-2 sm:text-sm">
            TESTIMONIALS
          </p>
          <h1 className="md:lg:text-3xl font-bold font-san text-xl">
            Our Dear customers said about us
          </h1>
        </div>
        <div className="container mx-auto h-2/3 flex justify-center item-between  px-10 pt-10 ">
          <div className="glide   " ref={glideRef}>
            <div className="glide__track  " data-glide-el="track">
              <ul className="glide__slides  mb-5 ">
                <li className="glide__slide">
                  <div className="w-full max-w-md relative px-20 py-10 mt-16 bg-white rounded-lg shadow-md shadow-slate-400 ">
                    <div className="lg:absolute z-20 overflow-hidden lg:top-1/2 -left-10 flex justify-center -mt-16 md:justify-center">
                      <img
                        className="object-cover w-20 h-20 ring-4 ring-white shadow-md shadow-gray-500 rounded-full "
                        alt="Testimonial avatar"
                        src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Favatar%2Favatar-3.jpg&w=256&q=75"
                      />
                    </div>

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-right"
                      className="svg-inline--fa fa-quote-right fa-w-16 w-7 text-blue-600"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                      />
                    </svg>

                    <p className="leading-7 text-slate-500 text-base my-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>

                    <h1 className="font-bold  text-lg ">Jessica Watson</h1>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="w-full max-w-md relative px-20 py-10 mt-16 bg-white rounded-lg shadow-md shadow-slate-400 ">
                    <div className="md:lg:absolute z-20 overflow-hidden md:lg:top-1/2 -left-10 flex justify-center -mt-16 md:justify-center">
                      <img
                        className="object-cover w-20 h-20 ring-4 ring-white shadow-md shadow-gray-500 rounded-full "
                        alt="Testimonial avatar"
                        src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Favatar%2Favatar-3.jpg&w=256&q=75"
                      />
                    </div>

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-right"
                      className="svg-inline--fa fa-quote-right fa-w-16 w-7 text-blue-600"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                      />
                    </svg>

                    <p className="leading-7 text-slate-500 text-base my-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>

                    <h1 className="font-bold  text-lg ">Jessica Watson</h1>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="w-full max-w-md relative px-20 py-10 mt-16 bg-white rounded-lg shadow-md shadow-slate-400 ">
                    <div className="md:lg:absolute z-20 overflow-hidden md:lg:top-1/2 -left-10 flex justify-center -mt-16 md:justify-center">
                      <img
                        className="object-cover w-20 h-20 ring-4 ring-white shadow-md shadow-gray-500 rounded-full "
                        alt="Testimonial avatar"
                        src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Favatar%2Favatar-3.jpg&w=256&q=75"
                      />
                    </div>

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-right"
                      className="svg-inline--fa fa-quote-right fa-w-16 w-7 text-blue-600"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                      />
                    </svg>

                    <p className="leading-7 text-slate-500 text-base my-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>

                    <h1 className="font-bold  text-lg ">Jessica Watson</h1>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="w-full max-w-md relative px-20 py-10 mt-16 bg-white rounded-lg shadow-md shadow-slate-400 ">
                    <div className="md:lg:absolute z-20 overflow-hidden md:lg:top-1/2 -left-10 flex justify-center -mt-16 md:justify-center">
                      <img
                        className="object-cover w-20 h-20 ring-4 ring-white shadow-md shadow-gray-500 rounded-full "
                        alt="Testimonial avatar"
                        src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Favatar%2Favatar-3.jpg&w=256&q=75"
                      />
                    </div>

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-right"
                      className="svg-inline--fa fa-quote-right fa-w-16 w-7 text-blue-600"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                      />
                    </svg>

                    <p className="leading-7 text-slate-500 text-base my-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>

                    <h1 className="font-bold  text-lg ">Jessica Watson</h1>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="w-full max-w-md relative px-20 py-10 mt-16 bg-white rounded-lg shadow-md shadow-slate-400 ">
                    <div className="md:lg:absolute z-20 overflow-hidden md:lg:top-1/2 -left-10 flex justify-center -mt-16 md:justify-center">
                      <img
                        className="object-cover w-20 h-20 ring-4 ring-white shadow-md shadow-gray-500 rounded-full "
                        alt="Testimonial avatar"
                        src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Favatar%2Favatar-3.jpg&w=256&q=75"
                      />
                    </div>

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-right"
                      className="svg-inline--fa fa-quote-right fa-w-16 w-7 text-blue-600"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                      />
                    </svg>

                    <p className="leading-7 text-slate-500 text-base my-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>

                    <h1 className="font-bold  text-lg ">Jessica Watson</h1>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-[70px] px-4 h-[50px] -bottom-9  mx-auto overflow-hidden relative">
              <div
                className="absolute bottom-0 w-[150px] py-2 flex"
                data-glide-el="controls[nav]"
                // style={bulletContainerStyle}
              >
                {bulletItems.map((bullet, id) => (
                  <button
                    key={id}
                    className={`glide__bullet bg-gray-400 hover:bg-blue-600 hover:border-blue-600 mr-1 select-none duration-300 ${
                      focusedBullet === id
                        ? "focus:bg-blue-600 focus:border-blue-600 bg-blue-600 border-blue-600 scale-95"
                        : "scale-50"
                    }`}
                    onClick={() => handleBulletClick(id)}
                    data-glide-dir={`=${id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-5 pt-24 mx-auto">
          <div className="lg:w-full flex flex-col sm:flex-row sm:items-center justify-between items-start mx-auto">
            <div className="font-san  ">
              <p className="text-pink-500 font-semibold sm:text-base md:lg:text-lg  tracking-[0.2em]">
                STORIES FROM AROUND THE GLOBE
              </p>
              <h1 className="font-bold md:lg:text-5xl text-2xl tracking-wide">
                From our travel blog
              </h1>
            </div>
            <div className="">
              <a
                href="#"
                className=" font-normal text-gray-500 tracking-wide hover:underline"
              >
                See all article
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-double-right"
                  className="svg-inline--fa fa-angle-double-right fa-w-3 w-3  ms-2 inline-block text-gray-700"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto font-san">
          <div className="flex flex-wrap -m-4">
            {blogItems.map(({ id, img, link1, link2, para }) => (
              <div
                className="p-4 lg:w-1/3 md:w-1/2 hover:-translate-y-2"
                key={id}
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-64 md:h-36 w-full object-cover object-center"
                    src={img}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-[0.3em] text-sm title-font font-medium cursor-pointer hover:underline text-gray-500 mb-1">
                      {link1}
                    </h2>
                    <h1 className="text-xl font-semibold   text-gray-700 cursor-pointer hover:underline mb-3">
                      {link2}
                    </h1>
                    <div className="text-gray-400 flex justify-start items-center mb-3">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="clock"
                        className="svg-inline--fa fa-clock fa-w-4 w-4 inline me-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                        />
                      </svg>
                      <p className=" font-san text-base tracking-wide">
                        January 16,2016
                      </p>
                    </div>
                    <p className="leading-relaxed mb-3 text-gray-500 text-[17px]">
                      {para}
                    </p>
                    <div className="flex items-center flex-wrap cursor-pointer hover:underline">
                      <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm font-bold tracking-[0.3em] uppercase">
                        Read more
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
