import React from "react";

import pin from "../img/footer/pin.svg";
import vimeo from "../img/footer/vimeo.svg";
import FooterImg from "./FooterImg.jsx";

const Footer = () => {
  //footer Section
  const images = [
    {
      id: 1,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-1.jpg",
    },
    {
      id: 2,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-2.jpg",
    },
    {
      id: 3,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-3.jpg",
    },
    {
      id: 4,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-4.jpg",
    },
    {
      id: 5,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-5.jpg",
    },
    {
      id: 6,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-6.jpg",
    },
    {
      id: 7,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-7.jpg",
    },
    {
      id: 8,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-8.jpg",
    },
    {
      id: 9,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-9.jpg",
    },
    {
      id: 10,
      image:
        "https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/instagram/instagram-10.jpg",
    },
  ];

  return (
    <footer className="bg-[#e9ecef] font-san pt-10 mt-auto">
      <div className="flex ">
        {images.map(({ id, image }) => (
          <FooterImg key={id} url={image} />
        ))}
      </div>
      <div className="mx-auto w-full max-w-screen-xl p-3 py-6 lg:py-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ">
          <div>
            <h2 className="mb-6 text-md font-bold tracking-wider  text-gray-900 uppercase">
              Directory
            </h2>
            <p className="mb-6 text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="flex mb-6 justify-start items-center gap-2">
              <a href="#" className="text-gray-500 hover:text-blue-600 ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 ">
                <span className="sr-only">Instragram</span>
              </a>


              <button className=" text-gray-500 items-center hover:text-blue-500">

                <img src={pin} alt="pin" className="w-4 h-4 opacity-70" />
                <span className="sr-only">pin</span>
              </button>
              <button className=" text-gray-500 items-center hover:text-blue-500">
                <img
                  src={vimeo}
                  alt="vimeo"
                  className="w-4 h-4  text-gray-300 ms-2 opacity-70"
                />

                <span className="sr-only">vimeo</span>
              </button>
            </div>
          </div>
          <div className="">
            <h2 className="mb-6 text-md font-bold tracking-wider  text-gray-900 uppercase">
              Rentals
            </h2>
            <ul className="text-gray-500 mb-10 font-medium">
              <li className="">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Map on top
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Side map
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  No map
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Room detail
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-0">
            <h2 className="mb-6 tracking-wider  text-md font-bold text-gray-900 uppercase">
              Pages
            </h2>
            <ul className="text-gray-500 mb-10 font-medium">
              <li className="">
                <a href="#" className="hover:underline">
                  Comparison
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-md font-bold tracking-wider  text-gray-900 uppercase">
              Daily Offers & Discounts
            </h2>
            <p className="mb-10 text-gray-500 ">
              Lorem ipsum dolor sit aemt, consectetur adipisicing elit. At
              itaque temporibus.
            </p>
            <div className="flex  mb-3">
              <input
                id="textInput"
                className="border  h-10 bg-[#e9ecef] rounded-s-md flex-grow border-e-0 border-neutral-600 outline-none focus:ring focus:ring-blue-300 px-3"
                type="text"
              />
              <button
                id="btnAdd"
                className="border rounded-e-md  w-10 h-10 flex justify-center items-center duration-75  border-neutral-600 hover:bg-neutral-500 hover:text-white border-s-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -rotate-45 "
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#343a40]">
        <div className="flex flex-wrap flex-col sm:flex-row justify-between content-center items-center  container mx-auto py-7">
          <span className=" text-sm sm:justify-center  text-neutral-300">
            © 2021, Your company . All Rights Reserved.
          </span>
          <ul className="inline-flex mt-4 md:mt-0 justify-center gap-3 ">
            <li>
              <img
                className=" md:w-10 md:h-10 w-8 h-8  text-white"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/visa.svg"
                alt="..."
              />
            </li>
            <li>
              <img
                className=" md:w-10 md:h-10 w-8 h-8   text-white"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/mastercard.svg"
                alt="..."
              />
            </li>
            <li>
              <img
                className=" md:w-10 md:h-10 w-8 h-8   text-white"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/paypal.svg"
                alt="..."
              />
            </li>
            <li>
              <img
                className=" md:w-10 md:h-10 w-8 h-8   text-white"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/western-union.svg"
                alt="..."
              />
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
