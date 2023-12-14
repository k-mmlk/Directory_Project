import React from 'react'

const Header = () => {
    const logourl="./src/img/logo.svg"
  return (
    <header className="z-50 fixed bg-white">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
          <div className="w-full flex items-center justify-between md:p-4 p-2 flex-wrap fixed bg-white">
                  { /* logo */ }
                <a href="#" className="">
                  <img src={`${logourl}`} className="" />
                </a>
                { /* seach  */ }
                <div className="flex">
                  <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                      <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-0 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                  </div>
                  { /* hamburger */ }
                  <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex md:w-auto" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border it border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-start md:items-center">
                <li>
                  <button data-dropdown-toggle="dropdownNavbarHome" className="flex items-center justify-between w-full py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-black md:p-0 md:w-auto text-[14.4px] font-bold">
                    Home
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <div id="dropdownNavbarHome" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 " data-popper-placement="bottom" style={{ position: "absolute", inset: "0px auto auto 0px", margin: 0, transform: "translate3d(32px, 104px, 0px)" }}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Room</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Restaurant</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Travel</a>
                      </li>
                      <li>
                      <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Real Estate
                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                      </a>
                    </div>
                      </li>
                    </ul>
                    
                  </div>
                </li>
                <li>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-[14.4px] font-bold flex items-center justify-between w-full py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 md:w-auto" type="button">Template <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                        </svg>
                        </button>
                        
                        { /* Dropdown menu */ }
                        <div id="dropdown" className="z-10 hidden w-full bg-white divide-y divide-gray-100 rounded-lg shadow h-screen dark:bg-gray-700">
                            <div className="lg:grid grid-cols-6 hidden">
                                <div id="colTem" className="grid col-span-4 row-8">
                                    <div className="grid grid-cols-4 row-span-5 gap-18  pt-12 ps-12">
                                        <div className="grid">
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="grid">
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="grid">
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="grid">
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="">
                                                <h1 className="font-bold text-lg"> HOMEPAGE</h1>
                                            <ul>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Restaurants</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Travel</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-gray-500 hover:text-black">Real Estate
                                                        <span className="text-xs text-green-600 bg-green-300 rounded-lg px-2 py-1 bold ms-2">New</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 row-span-3 gap-18 ps-12 pt-3 bg-slate-100">
                                        <div className="flex items-start">
                                                <div className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                                      </svg>
                                                </div>
                                                  <div className="ms-1">
                                                    <h3 className="text-xl font-bold">Best Rentals</h3>
                                                    <p className="text-gray-600">Find the best place</p>
                                                  </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                                  </svg>
                                            </div>
                                              <div className="ms-1">
                                                <h3 className="text-xl font-bold">Best Rentals</h3>
                                                <p className="text-gray-600">Find the best place</p>
                                              </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                              </svg>
                                        </div>
                                          <div className="ms-1">
                                            <h3 className="text-xl font-bold">Best Rentals</h3>
                                            <p className="text-gray-600">Find the best place</p>
                                          </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                          </svg>
                                    </div>
                                      <div className="ms-1">
                                        <h3 className="text-xl font-bold">Best Rentals</h3>
                                        <p className="text-gray-600">Find the best place</p>
                                      </div>
                            </div>
                                    </div>
                                </div>
                                <div id="colImg" className="col-span-2 grid-cols-none ">
                                    <img src="src/img/Landing/eating.webp" className="h-screen top-0" alt="" />
                                    
                                </div>
                            </div>
                        </div>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[14.4px] font-bold">Contact</a>
                </li>
                <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarDocs" className="flex text-[14.4px] font-bold items-center justify-between w-full py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 md:w-auto ">
                    Docs
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <div id="dropdownNavbarDocs" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="bottom" style={{ position: "absolute", inset: "0px auto auto 0px", margin: 0, transform: "translate3d(336.5px, 104px, 0px)" }}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <p className="block px-4 py-2 text-gray-400">
                          DOCUMENTATION
                        </p>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Introduction</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Directory structure</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Next.js</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Customizing CSS</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Migration to v2</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Credits</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Changelog</a>
                      </li>
                      <li>
                        <p className="block px-4 py-2 text-gray-400">COMPONENTS</p>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Bootstrap</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white">Theme</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="text-[14.4px] font-bold block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</a>
                </li>
                <li>
                  <a href="#" className="text-[14.4px] font-bold block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 hover:text-black text-gray-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</a>
                </li>
                <li>
                  <a href="#" className="text-[12.8px] tracking-widest font-bold block p-2 text-sm text-white rounded bg-blue-600">ADD A LISTING</a>
                </li>
              </ul>
                </div>
              </div>
        </nav>
      </header>
  )
}

export default Header