import React from "react";

import footImg from "../img/footer/instagram-1.webp";
import footImg2 from "../img/footer/instagram-2.webp";
import footImg3 from "../img/footer/instagram-3.webp";
import footImg4 from "../img/footer/instagram-4.webp";
import footImg5 from "../img/footer/instagram-5.webp";
import footImg6 from "../img/footer/instagram-6.webp";
import footImg7 from "../img/footer/instagram-7.webp";
import footImg8 from "../img/footer/instagram-8.webp";
import footImg9 from "../img/footer/instagram-9.webp";
import footImg10 from "../img/footer/instagram-10.webp";

const footer = () => {
  //footer Section

  return (
    <footer className="bg-[#e9ecef] font-san pt-10 mt-auto">
      <div className="flex overflow-hidden  ">
        <a href="">
          <img
            src={footImg}
            className="mt-10 mb-10 hover:rounded-sm  hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg2}
            className="mt-10 mb-10 hover:rounded-sm    hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg3}
            className="mt-10 mb-10 hover:rounded-sm    hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg4}
            className="mt-10 mb-10 hover:rounded-sm    hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg5}
            className="mt-10 mb-10 hover:rounded-sm    hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg6}
            className="mt-10 mb-10 hover:rounded-sm    hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg7}
            className="mt-10 mb-10 hover:rounded-sm  lg:   hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg8}
            className="mt-10 mb-10 hover:rounded-sm    hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg9}
            className="mt-10 mb-10 hover:rounded-sm    hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
        <a href="">
          <img
            src={footImg10}
            className="mt-10 mb-10 hover:rounded-sm    hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
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
            <div className="flex mb-6 justify-start items-center gap-5">
              <a href="#" className="text-gray-500 hover:text-blue-600 ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="sr-only">Instragram</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-blue-500 ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              itaque temporibus.
            </p>
            <div className="flex mb-3">
              <input
                id="textInput"
                className="border h-10 bg-[#e9ecef] rounded-s-md flex-grow border-e-0 border-neutral-600 outline-none focus:ring focus:ring-blue-300 px-3"
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

      <div className="flex flex-wrap flex-col py-2 sm:flex-row justify-between content-center items-center bg-[#343a40] ">
        <span className=" text-sm sm:justify-center  text-neutral-300 px-4 py-5">
          © 2021, Your company . All Rights Reserved.
        </span>
        <ul className="inline-flex py-5 sm:ml-auto sm:mt-0 mt-2 justify-center sm:pt-5 gap-3 ">
          <li>
            <img
              className=" w-10 h-10  text-white"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/visa.svg"
              alt="..."
            />
          </li>
          <li>
            <img
              className=" w-10 h-10   text-white"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/mastercard.svg"
              alt="..."
            />
          </li>
          <li>
            <img
              className=" w-10 h-10   text-white"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/paypal.svg"
              alt="..."
            />
          </li>
          <li>
            <img
              className=" w-10 h-10   text-white"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/western-union.svg"
              alt="..."
            />
          </li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
};
export default footer;
