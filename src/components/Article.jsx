import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
const Article = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(glideRef.current, {
      type: "carousel",
      perView: 2,
      pagination: {
        el: ".glide__bullets",
        clickable: true,
      },
      breakpoints: {
        768: {
          perView: 1,
        },
        1024: {
          perView: 3,
        },
      },
    });

    glide.mount();
    return () => {
      glide.destroy();
    };
  }, []);

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
      <section className="w-full h-[800px] py-[150px]">
        <div className="text-center mb-20 ">
          <p className="font-bold text-blue-700 tracking-widest text-lg mb-2 sm:text-sm">
            TESTIMONIALS
          </p>
          <h1 className="text-3xl font-bold font-san sm:text-xl">
            Our Dear customers said about us
          </h1>
        </div>

        <div
          className="glide container mx-auto h-[500px] overflow-hidden"
          ref={glideRef}
        >
          <div className="glide__track " data-glide-el="track">
            <ul className="glide__slides  mb-5 ">
              <li className="glide__slide">
                <div className="relative lg:w-[470px] h-[350px] bg-white rounded-lg shadow-lg shadow-slate-400 ml-10 font-san px-[60px]  py-[70px]  lg:px-[70px]">
                  <div className="absolute z-50 right-[130px]  -top-10 md:lg:-left-10 md:lg:top-[130px]">
                    <img
                      src="src\img\testimonials\avatar.webp"
                      className="w-[80px] rounded-full ring-4 ring-white shadow-md shadow-gray-500 "
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
                <div className="relative lg:w-[470px] h-[330px] bg-white rounded-lg shadow-lg shadow-slate-400 ml-10 font-san px-[60px] py-[70px]  lg:px-[70px]">
                  <div className="absolute z-50 right-[200px] -top-10 lg:-left-10 lg:top-[130px]">
                    <img
                      src="src\img\testimonials\avatar.webp"
                      className="w-[80px] rounded-full ring-4 ring-white shadow-md shadow-gray-500 "
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
                <div className="relative lg:w-[470px] h-[330px] bg-white rounded-lg shadow-lg shadow-slate-400 ml-10 font-san px-[60px] py-[70px]  lg:px-[70px]">
                  <div className="absolute z-50 right-[200px] -top-10 lg:-left-10 lg:top-[130px]">
                    <img
                      src="src\img\testimonials\avatar.webp"
                      className="w-[80px] rounded-full ring-4 ring-white shadow-md shadow-gray-500 "
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
                <div className="relative lg:w-[470px] h-[330px] bg-white rounded-lg shadow-lg shadow-slate-400 ml-10 font-san px-[60px] py-[70px]  lg:px-[70px]">
                  <div className="absolute z-50 right-[200px] -top-10 lg:-left-10 lg:top-[130px]">
                    <img
                      src="src\img\testimonials\avatar.webp"
                      className="w-[80px] rounded-full ring-4 ring-white shadow-md shadow-gray-500 "
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
                <div className="relative lg:w-[470px] h-[330px] bg-white rounded-lg shadow-lg shadow-slate-400 ml-10 font-san px-[60px] py-[70px]  lg:px-[70px]">
                  <div className="absolute z-50 right-[200px] -top-10 lg:-left-10 lg:top-[130px]">
                    <img
                      src="src\img\testimonials\avatar.webp"
                      className="w-[80px] rounded-full ring-4 ring-white shadow-md shadow-gray-500 "
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
          <div className="glide__bullets" data-glide-el="controls[nav]">
              <button className="glide__bullet bg-gray-200" data-glide-dir="=0"></button>
              <button className="glide__bullet bg-gray-200" data-glide-dir="=1"></button>
              <button className="glide__bullet bg-gray-200" data-glide-dir="=2"></button>
              <button className="glide__bullet bg-gray-200" data-glide-dir="=3"></button>
              <button className="glide__bullet bg-gray-200" data-glide-dir="=4"></button>
            </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full h-full lg:h-[850px]  px-2  pt-20">
        <div className="container mx-auto">
          <div className="lg:md:flex justify-between items-center   mb-10">
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
          <div className="md:lg:grid md:lg:grid-cols-3 gap-5 flex flex-col  ">
            <div className="cols-span-1 w-[380px] lg:w-[400px] md:w-[300px] md:h-[600px] h-[550px] hover:-translate-y-2 bg-white rounded-md shadow-md shadow-gray-400">
              <img
                src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1467987506553-8f3916508521.jpg&w=3840&q=75"
                className="rounded-t-md"
              />
              <div className="flex flex-col gap-2 px-5 my-8">
                <a
                  href="#"
                  className="text-gray-700 font-san tracking-widest hover:underline"
                >
                  TRAVEL
                </a>
                <a
                  href="#"
                  className="font-san text-xl font-semibold tracking-wide hover:underline text-gray-700"
                >
                  Escape the city today
                </a>
                <div className="text-gray-400 flex justify-start items-center">
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
                <p className=" text-gray-600 text-[17px]">
                  Is am hastily invited settled at limited civilly fortune me.
                  Really spring in extent an by. Judge but built party world...
                </p>
                <a
                  href="#"
                  className="text-blue-700 font-bold tracking-[0.2em] text-sm hover:underline"
                >
                  READ MORE
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-right"
                    className="svg-inline--fa fa-long-arrow-alt-right fa-w-5 w-5 inline-block ml-5 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="cols-span-1 w-[380px] lg:w-[400px] md:w-[300px] md:h-[600px] h-[550px] hover:-translate-y-2 bg-white rounded-md shadow-md shadow-gray-400">
              <img
                src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1512917774080-9991f1c4c750.jpg&w=3840&q=75"
                className="rounded-t-md"
              />
              <div className="flex flex-col gap-2 px-5 my-8">
                <a
                  href="#"
                  className="text-gray-700 font-san tracking-widest hover:underline"
                >
                  TRAVEL
                </a>
                <a
                  href="#"
                  className="font-san text-xl font-semibold tracking-wide hover:underline text-gray-700"
                >
                  Autumn fashion tips and tricks
                </a>
                <div className="text-gray-400 flex justify-start items-center">
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
                <p className=" text-gray-600 text-[17px]">
                  Pellentesque habitant morbi tristique senectus. Vestibulum
                  tortor quam, feugiat vitae, ultricies ege...
                </p>
                <a
                  href="#"
                  className="text-blue-700 font-bold tracking-[0.2em] text-sm hover:underline"
                >
                  READ MORE
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-right"
                    className="svg-inline--fa fa-long-arrow-alt-right fa-w-5 w-5 inline-block ml-5 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="cols-span-1 w-[380px] lg:w-[400px] md:w-[300px] md:h-[600px] h-[550px] hover:-translate-y-2 bg-white rounded-md shadow-md shadow-gray-400">
              <img
                src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1522771739844-6a9f6d5f14af.jpg&w=3840&q=75"
                className="rounded-t-md"
              />
              <div className="flex flex-col gap-2 px-5 my-8">
                <a
                  href="#"
                  className="text-gray-700 font-san tracking-widest hover:underline "
                >
                  LIVING
                </a>
                <a
                  href="#"
                  className="font-san text-xl font-semibold tracking-wide hover:underline text-gray-700"
                >
                  Newest photo apps
                </a>
                <div className="text-gray-400 flex justify-start items-center">
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
                <p className=" text-gray-600 text-[17px]">
                  ellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibu...
                </p>
                <a
                  href="#"
                  className="text-blue-700 font-bold tracking-[0.2em] text-sm hover:underline"
                >
                  READ MORE
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-right"
                    className="svg-inline--fa fa-long-arrow-alt-right fa-w-5 w-5 inline-block ml-5 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
