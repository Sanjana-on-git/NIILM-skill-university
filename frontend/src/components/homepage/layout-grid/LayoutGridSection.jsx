const Layoutgrid = () => {
  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4 h-full">
        
          <div className="col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-3 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://www.msu.edu.in/frontend_assets/images/IAF8.jpg"
                alt="Events"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Events</h3>
            </a>
          </div>

          
          <div className="col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-3 bg-stone-50">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
              <img
                src="https://www.msu.edu.in/frontend_assets/images/banner/news-1.jpg"
                alt="Learning at Medhavi"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Learning at NIILM</h3>
            </a>

            
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="https://www.msu.edu.in/frontend_assets/images/IAF8.jpg"
                  alt="Featured Stories"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Featured Stories</h3>
              </a>
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="https://www.msu.edu.in/frontend_assets/images/banner/life-at-medhavi-2.webp"
                  alt="Events"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Events</h3>
              </a>
            </div>
          </div>

         
          
        </div>
      </div>
    </section>
  );
};

export default Layoutgrid;






