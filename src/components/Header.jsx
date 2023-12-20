import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [tabOpen, setTabOpen] = useState(false);
  const handleTabOpen = () => {
    setTabOpen(!tabOpen);
  };
  const [temOpen, setTemOpen] = useState(false);
  const handleTemOpen = () => {
    setTemOpen(!temOpen);
  };
  const [docOpen, setDocOpen] = useState(false);
  const handleDocOpen = () => {
    setDocOpen(!docOpen);
  };
  const [homeOpen, setHomeOpen] = useState(false);
  const handleHomeOpen = () => {
    setHomeOpen(!homeOpen);
  };
  const [ltemOpen, setlTemOpen] = useState(false);
  const handlelTemOpen = () => {
    setlTemOpen(!ltemOpen);
  };
  const [ldocOpen, setlDocOpen] = useState(false);
  const handlelDocOpen = () => {
    setlDocOpen(!ldocOpen);
  };
  const logourl = "https://directory-v2.vercel.app/content/svg/logo.svg";
  return (
    <header className="z-50 fixed bg-white">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="w-full flex items-center justify-between md:p-4 p-2 flex-wrap fixed bg-white">
          {/* logo */}
          <a href="#" className="">
            <img src={`${logourl}`} className="" />
          </a>
          {/* seach  */}
          <div className="flex">
            <div className="relative hidden md:block me-2">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-0 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            {/* hamburger */}
            <button
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* end of hamburger */}
          </div>

          <div className="items-center justify-between hidden w-full lg:flex md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-start md:items-center">
              <li className="mb-3 md:mb-0">
                <button
                  onClick={handleHomeOpen}
                  className="flex items-center justify-between w-full py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-black md:p-0 md:w-auto text-[14.4px] font-bold"
                >
                  Home
                  <svg
                    className={`w-2.5 ${
                      homeOpen ? "rotate-180 duration-300" : "duration-300"
                    } h-2.5 ms-2.5`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`z-10  mt-5 absolute ${
                    homeOpen
                      ? " translate-y-0  opacity-100 duration-300"
                      : "translate-y-10 opacity-0 pointer-events-none duration-300"
                  } -translate-x-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Room
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Restaurant
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Travel
                      </a>
                    </li>
                    <li>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Real Estate
                          <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">
                            New
                          </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              {/* navbar template large screen */}
              <li className="mb-3 md:mb-0">
                <button
                  onClick={handlelTemOpen}
                  className="text-[14.4px] font-bold flex items-center justify-between w-full py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 md:w-auto"
                >
                  Template
                  <svg
                    className={`w-2.5 ${
                      ltemOpen ? "rotate-180 duration-300" : "duration-300"
                    } h-2.5 ms-3`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  className={`z-10 absolute mt-5 right-0 ${
                    ltemOpen
                      ? " translate-y-0 opacity-100 duration-300"
                      : "translate-y-10 opacity-0 duration-300 pointer-events-none"
                  } w-full bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 shadow-xl`}
                >
                  <div className="lg:grid grid-cols-8 hidden">
                    <div id="colTem" className="grid col-span-6 row-6">
                      <div className="grid grid-cols-4 row-span-5 gap-18  pt-12 ps-12">
                        <div className="">
                          <div className="mb-10">
                            <h1 className="font-bold text-base text-gray-700 tracking-wider mb-2">
                              {" "}
                              HOMEPAGE
                            </h1>
                            <ul>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Rooms
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Restaurants
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Travel
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  Real Estate
                                  <span className=" text-[9.6px] font-bold text-emerald-500 bg-green-200 rounded-lg px-1 py-1 bold ms-2">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-10">
                            <h1 className="font-bold text-base text-gray-700 tracking-wider mb-2">
                              {" "}
                              RESTURANTS
                            </h1>
                            <ul>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Category - Map on the top
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Category - Map on the right
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Category - no map
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  Resturant detail
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="">
                          <div className="mb-10">
                            <h1 className="font-bold text-base text-gray-700 tracking-wider mb-2">
                              {" "}
                              ROOMS
                            </h1>
                            <ul>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Category - Map on the top
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Category - Map on the right
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Category - no map
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  Room detail
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-10">
                            <h1 className="font-bold text-base text-gray-700 tracking-wider mb-2">
                              BLOG
                            </h1>
                            <ul>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Blog
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Post
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="">
                            <h1 className="font-bold text-base text-gray-700 tracking-wider mb-2">
                              PAGES
                            </h1>
                            <ul>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Comparison
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Team
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="">
                          <div className="mb-10">
                            <h1 className="font-bold text-base text-gray-700 tracking-wider mb-2">
                              PAGES
                            </h1>
                            <ul>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Pricing
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Text Page
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  F.A.Q.s
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Coming soon
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  404 page
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  Knowledge Base
                                  <span className=" text-[9.6px] font-bold text-emerald-500 bg-green-200 rounded-lg px-1 py-1 bold ms-2">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  Knowledge Base - Topic
                                  <span className=" text-[9.6px] font-bold text-emerald-500 bg-green-200 rounded-lg px-1 py-1 bold ms-2">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  Terms & Conditions
                                  <span className=" text-[9.6px] font-bold text-emerald-500 bg-green-200 rounded-lg px-1 py-1 bold ms-2">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="mb-10">
                            <h1 className="font-bold text-base text-gray-700 tracking-wider mb-2">
                              HOST
                            </h1>
                            <ul>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Add new listing - 6 pages
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Bookings - list view
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="">
                          <div className="mb-10">
                            <h1 className="font-bold text-base text-gray-700 tracking-wider mb-2">
                              USER
                            </h1>
                            <ul>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Profile
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Account
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Personal info - forms
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Password & security - forms
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Sign in
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Sign up
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Booking process - 4 pages
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Bookings - grid view
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 text-sm hover:text-black"
                                >
                                  Booking detail
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  InvoiceNew
                                  <span className=" text-[9.6px] font-bold text-emerald-500 bg-green-200 rounded-lg px-1 py-1 bold ms-2">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  MessagesNew
                                  <span className=" text-[9.6px] font-bold text-emerald-500 bg-green-200 rounded-lg px-1 py-1 bold ms-2">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className=" mb-4">
                                <a
                                  href="#"
                                  className="text-gray-500 hover:text-black text-sm"
                                >
                                  Message Detail
                                  <span className=" text-[9.6px] font-bold text-emerald-500 bg-green-200 rounded-lg px-1 py-1 bold ms-2">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 row-span-1 gap-18 ps-12 pt-3 bg-slate-100">
                        <div className="flex items-center p-5">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                              />
                            </svg>
                          </div>
                          <div className="ms-1">
                            <h3 className="text-base font-bold tracking-wider">
                              Best Rentals
                            </h3>
                            <p className="text-gray-500 text-sm">
                              Find the best place
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center p-4">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              dataslot="icon"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                              />
                            </svg>
                          </div>
                          <div className="ms-1">
                            <h3 className="text-base font-bold tracking-wider">
                              Earn Points
                            </h3>
                            <p className="text-gray-500 text-sm">
                              And get great rewards
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center p-4">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              dataslot="icon"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                              />
                            </svg>
                          </div>
                          <div className="ms-1">
                            <h3 className="text-base font-bold tracking-wider">
                              020-800-456-747
                            </h3>
                            <p className="text-gray-500 text-sm">
                              24/7 Available Support
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center p-4">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              dataslot="icon"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                              />
                            </svg>
                          </div>
                          <div className="ms-1">
                            <h3 className="text-base font-bold tracking-wider">
                              SECURE PAYMENT
                            </h3>
                            <p className="text-gray-500 text-sm">
                              Secure Payment
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="colImg" className="col-span-2 grid-cols-none ">
                      <img
                        src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1521170665346-3f21e2291d8b.jpg&w=3840&q=75"
                        className="h-full object-cover top-0 w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[14.4px] font-bold"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={handlelDocOpen}
                  className="flex text-[14.4px] font-bold items-center justify-between w-full py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 md:w-auto "
                >
                  Docs
                  <svg
                    className={`w-2.5 h-2.5 ${
                      ldocOpen ? "rotate-180 duration-300" : "duration-300"
                    } ms-2.5`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`z-10 absolute ${
                    ldocOpen
                      ? " translate-y-0  opacity-100 duration-300"
                      : "translate-y-10 opacity-0 pointer-events-none duration-300"
                  } -translate-x-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <p className="block px-4 py-2 text-gray-400">
                        DOCUMENTATION
                      </p>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Directory structure
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Next.js
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Customizing CSS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Migration to v2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Credits
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Changelog
                      </a>
                    </li>
                    <li>
                      <p className="block px-4 py-2 text-gray-400">
                        COMPONENTS
                      </p>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Bootstrap
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Theme
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14.4px] font-bold block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14.4px] font-bold block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[12.8px] tracking-widest font-bold block p-2 text-sm text-white rounded bg-blue-600"
                >
                  ADD A LISTING
                </a>
              </li>
            </ul>
          </div>
          <div className={`${open ? "" : "hidden"} w-full`}>
            <div className="px-2 flex items-center bg-gray-200 rounded-lg my-3 md:hidden">
              <div className="pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 self-center"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="sm:text-xs bg-gray-200 block w-full text-sm text-gray-900 border border-none focus:ring-0"
                placeholder="Search..."
              />
            </div>
            <div>
              <ul className=" overflow-scroll max-h-96">
                <li className="mb=3 md:mb-0">
                  <button
                    className="flex items-center justify-between w-full py-2 px-2 rounded border-0 hover:text-black text-black p-0 text-[14.4px] font-bold"
                    onClick={handleTabOpen}
                  >
                    <p>Home</p>
                    <svg
                      className={`w-2.5 h-2.5 ms-2.5 ${
                        tabOpen && "rotate-180"
                      } duration-300`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    className={`z-10 ${
                      tabOpen ? "" : "hidden"
                    } font-normal rounded-lg w-full`}
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Room
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Restaurant
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Travel
                        </a>
                      </li>
                      <li>
                        <div className="py-1">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 hover:text-blue-500 hover:bg-gray-200 dark:text-gray-200 dark:hover:text-white"
                          >
                            Real Estate
                            <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 font-bold ms-2">
                              New
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-3 md:mb-0">
                  <button
                    className="flex items-center justify-between w-full py-2 px-2 rounded border-0 hover:text-black text-gray-500 p-0 text-[14.4px] font-bold"
                    onClick={handleTemOpen}
                  >
                    <p>Template</p>
                    <svg
                      className={`w-2.5 h-2.5 ms-2.5 ${
                        temOpen && "rotate-180"
                      } duration-300 `}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    className={`z-10 ${
                      temOpen ? "" : "hidden"
                    } font-normal rounded-lg w-full`}
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li>
                        <h1 className="font-bold tracking-wider text-base px-4">
                          HOMEPAGE
                        </h1>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Rooms
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Restaurants
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Travel
                            </a>
                          </li>
                          <li>
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 text-gray-500 dark:text-gray-200 dark:hover:text-white hover:text-black"
                              >
                                Real Estate
                                <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 font-bold ms-2">
                                  New
                                </span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h1 className="font-bold tracking-wider text-base px-4">
                          RESTAURANTS
                        </h1>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Category - Map on the top
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Category - Map on the right
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Category - no map
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Restaurant detail
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h1 className="font-bold tracking-wider text-base px-4">
                          ROOMS
                        </h1>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Category - Map on the top
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Category - Map on the right
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Category - no map
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Room detail
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h1 className="font-bold tracking-wider text-base px-4">
                          BLOG
                        </h1>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Post
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h1 className="font-bold tracking-wider text-base px-4">
                          PAGES
                        </h1>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Comparison
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Team
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h1 className="font-bold tracking-wider text-base px-4">
                          PAGES
                        </h1>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Text Page
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              F.A.Q.s
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Coming soon
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              404 page
                            </a>
                          </li>
                          <li>
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm dark:hover:bg-gray-600 text-gray-500 dark:text-gray-200 dark:hover:text-white hover:text-black"
                              >
                                Knowledge Base
                                <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 font-bold ms-2">
                                  New
                                </span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm dark:hover:bg-gray-600 text-gray-500 dark:text-gray-200 dark:hover:text-white hover:text-black"
                              >
                                Knowledge Base - Topic
                                <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 font-bold ms-2">
                                  New
                                </span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm dark:hover:bg-gray-600 text-gray-500 dark:text-gray-200 dark:hover:text-white hover:text-black"
                              >
                                Terms & Conditions
                                <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 font-bold ms-2">
                                  New
                                </span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h1 className="font-bold tracking-wider text-base px-4">
                          HOST
                        </h1>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Add new listing - 6 pages
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Bookings - list view
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h1 className="font-bold tracking-wider text-base px-4">
                          User
                        </h1>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Profile
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Account
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Personal info -forms
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Password & security - forms
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Sign in
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Sign up
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Booking process - 4 pages
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Booking - grid view
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 dark:hover:text-white hover:text-black"
                            >
                              Booking detail
                            </a>
                          </li>
                          <li>
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm dark:hover:bg-gray-600 text-gray-500 dark:text-gray-200 dark:hover:text-white hover:text-black"
                              >
                                Invoice
                                <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 font-bold ms-2">
                                  New
                                </span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 text-gray-500 dark:text-gray-200 dark:hover:text-white hover:text-black"
                              >
                                Messages
                                <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 font-bold ms-2">
                                  New
                                </span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="py-1">
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm  dark:hover:bg-gray-600 text-gray-500 dark:text-gray-200 dark:hover:text-white hover:text-black"
                              >
                                Message Detail
                                <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 font-bold ms-2">
                                  New
                                </span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-3 md:mb-0">
                  <a
                    href="#"
                    className="px-2 py-1 text-[14.4px] font-bold text-gray-500 hover:text-black"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleDocOpen}
                    className="flex items-center justify-between w-full py-2 px-2 rounded border-0 hover:text-black text-gray-500 p-0 text-[14.4px] font-bold "
                  >
                    <p>Docs</p>
                    <svg
                      className={`w-2.5 h-2.5 ms-2.5 ${
                        docOpen && "rotate-180"
                      } duration-300 `}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    className={`z-10 ${
                      docOpen ? "" : "hidden"
                    } font-normal rounded-lg w-full`}
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li>
                        <p className="block px-4 py-2 text-gray-300">
                          DOCUMENTATION
                        </p>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Introduction
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Directory structure
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Next.js
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Customizing CSS
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Migration to v2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Credits
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-500 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Changelog
                        </a>
                      </li>
                      <li>
                        <p className="block px-4 py-2 text-gray-300">
                          COMPONENTS
                        </p>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-400 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Bootstrap
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 dark:hover:bg-gray-600 text-gray-500 hover:text-blue-400 hover:bg-gray-200 dark:hover:text-white"
                        >
                          Theme
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-3 md:mb-0">
                  <a
                    href="#"
                    className="text-[14.4px] font-bold text-gray-500 px-2 py-1 hover:text-black"
                  >
                    Sign in
                  </a>
                </li>
                <li className="mb-3 md:mb-0">
                  <a
                    href="#"
                    className="text-[14.4px] font-bold text-gray-500 px-2 py-1 hover:text-black"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12.8px] w-fit tracking-widest font-bold block p-2 text-sm text-white rounded bg-blue-600"
                  >
                    ADD A LISTING
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
