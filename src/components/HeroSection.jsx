import React from 'react'

const HeroSection = () => {
  return (
    <div id="default-carousel" className="relative w-full  h-full" data-carousel="slide">
        { /* Carousel wrapper */ }
        <div className="relative overflow-hidden h-[70vh] sm:!h-[80vh] md:!h-[620px]">
            { /* Item 1 */ }
            <div className="hidden duration-1000 ease-in-out" data-carousel-item="">
                <img src="src/img/Landing/first.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full md:!object-cover" alt="..." />
            </div>
            { /* Item 2 */ }
            <div className="hidden duration-1000 ease-in-out" data-carousel-item="">
                <img src="src/img/Landing/second.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full md:!object-cover" alt="..." />
            </div>
            { /* Item 3 */ }
            <div className="hidden duration-1000 ease-in-out" data-carousel-item="">
                <img src="src/img/Landing/third.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full md:!object-cover" alt="..." />
            </div>
            { /* Item 4 */ }
            <div className="hidden duration-1000 ease-in-out" data-carousel-item="">
                <img src="src/img/Landing/fourth.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full md:!object-cover" alt="..." />
            </div>
        </div>
        <div className="absolute top-0 lg:!top-32 z-20 text-white py-6 w-full mx-auto" style={{ left: "50%", transform: "translateX(-50%)" }}>
            <div className="container mx-auto flex px-5 w-fit md:!w-[75%] py-14 md:!py-24 items-center justify-center flex-col">
              <div className="text-center lg:!text-start w-full">
                <h1 className="title-font text-[16px] font-bold tracking-[6.4px] text-pink-600 text-sm mb-6">THE BEST HOLIDAY EXPERIENCE</h1>
                <p className="!mb-9 leading-relaxed !text-3xl md:!text-[72px] font-bold">Stay like a local</p>
                <form action="" className="block text-gray-400 p-3 lg:px-2 lg:py-1 bg-white rounded-xl lg:!rounded-full w-full">
                  <div className="grid !grid-row-4 lg:!grid-cols-5 gap-2">
                  {/* flex flex-col lg:!flex-row lg:gap-0 gap-2 */}
                    <input type="text" placeholder="What are you searching for?" className="block col-span-2 p-2 text-![16px] text-gray-900 border border-transparent border-r-0 rounded-r-none border-r-gray-200 rounded-lg bg-gray-50  focus:ring-0 focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    <input type="text" placeholder="Location" className="block col-span-1 p-2 text-![16px] text-gray-900 border border-transparent border-r-0 rounded-r-none border-r-gray-200 rounded-lg bg-gray-50  focus:ring-0 focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    <select name="" id="" className="block w-full p-2 col-span-2 lg:col-span-1 border-r-0 rounded-r-none border-r-gray-200 font-bold text-[12.8px] border-transparent rounded-lg bg-gray-50  focus:ring-0 focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                      <option value={true}>CATEGORIES</option>
                      { /* <option value="">RESTAURANTS</option>
                                             <option value="">HOTELS</option>
                                             <option value="">CAFES</option>
                                             <option value="">GARAGES</option> */ }
                    </select>
                    <button className="bg-blue-700 font-bold lg:ms-1 text-white rounded-full py-1 lg:!px-6 w-full col-span-2 lg:col-span-1 ">SEARCH</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </div>
  )
}

export default HeroSection