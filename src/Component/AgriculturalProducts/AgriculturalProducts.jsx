import React, { useEffect, useRef, useState } from 'react';

const AgriculturalProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef();
    
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/ProductFakeData.json');
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        }
        fetchProducts();
    },[]);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = window.innerWidth < 640 ? 200 : window.innerWidth < 1024 ? 250 : 300;
        if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-[60px] relative">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-[24px] ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">Agricultural Products</h2>

          {loading ? (
            <div className="flex justify-center items-center h-[150px] sm:h-[180px] lg:h-[200px]">
              <p className="text-base sm:text-lg xl:text-[20px]">Loading...</p>
            </div>
          ) : (
            <div className="relative">
              {/* Prev Button */}
              <button onClick={() => scroll("left")} className="absolute left-0 sm:left-1 md:left-2 top-1/2 -translate-y-1/2 z-10  bg-[#B0DD1D] shadow-md hover:bg-[#B0DD1D] transition w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-800" 
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                  </svg>
                </span>
              </button>

              {/* Product cards */}
              <div ref={scrollRef} className="flex overflow-x-auto gap-3 sm:gap-4 scrollbar-hide scroll-smooth px-8 sm:px-10 md:px-12 lg:px-14 xl:px-10">
                {products.map((product) => (
                  <div key={product.id} className="min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[270px] bg-[#F2F4F6] shadow-md rounded-xl p-3 sm:p-4 border border-gray-100 hover:border-lime-500 hover:shadow-lg transition flex-shrink-0">
                    <div className="overflow-hidden rounded-lg mb-3 sm:mb-4">
                        <img src={product.image} alt={product.title} className="h-[150px] sm:h-[170px] md:h-[180px] lg:h-[190px] xl:h-[200px] w-full object-contain transform transition-transform duration-500 ease-in-out hover:scale-105"/>
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-base sm:text-lg font-bold mb-4 sm:mb-5 md:mb-6 xl:mb-7">
                      ₹{product.price}
                    </p>
                    <button className="w-fit px-3 sm:px-4 py-1.5 sm:py-2 bg-[#B0DD1D] text-white font-semibold rounded-3xl hover:bg-[#A0CC1D] transition duration-300 text-sm sm:text-base">Shop Now</button>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button 
                onClick={() => scroll("right")} 
                className="absolute right-0 sm:right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-[#B0DD1D] shadow-md hover:bg-[#B0DD1D] transition w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-800"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
  );
};

export default AgriculturalProducts;