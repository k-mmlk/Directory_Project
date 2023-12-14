import React from 'react'

const Feature = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl !text-base font-bold tracking-widest title-font text-pink-600">ONE-OF-A-KIND VACATION RENTALS</h1>
            <p className="text-3xl font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black">Booking with us is easy</p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>                  
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-bold mb-3">Find the perfect rental</h2>
                <p className="leading-relaxed text-gray-500">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                                      
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-xl title-font font-bold mb-3">Book with confidence</h2>
                  <p className="leading-relaxed text-gray-500">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
                </div>
              </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                                  
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-bold mb-3">Enjoy your vacation</h2>
                <p className="leading-relaxed text-gray-500">His room, a proper human room although a little too small, lay peacefully between its four familiar</p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
  )
}

export default Feature