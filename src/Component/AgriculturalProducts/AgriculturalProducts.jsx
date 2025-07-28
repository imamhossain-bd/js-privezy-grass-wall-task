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
        if (direction === "left") {
        container.scrollBy({ left: -300, behavior: "smooth" });
        } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="px-[40px] mt-[60px] relative">
      <h2 className="text-[24px] font-semibold mb-8">Agricultural Products</h2>

      {loading ? (
        <div className="flex justify-center items-center h-[200px]">
          <p className="text-[20px]">Loading...</p>
        </div>
      ) : (
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 transition w-8 h-8 rounded-full flex items-center justify-center"
          >
            <span className="text-xl font-bold">‹</span>
          </button>

          {/* Product cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-10"
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[270px] bg-[#F2F4F6] shadow-md rounded-xl p-4 border border-gray-100 hover:border-lime-500 hover:shadow-lg transition" >
                <div className="overflow-hidden rounded-lg mb-4">
                    <img src={product.image} alt={product.title} className="h-[200px] w-full object-contain transform transition-transform duration-500 ease-in-out hover:scale-105"/>
                </div>
                <h3 className="text-sm font-semibold mb-2">
                  {product.title}
                </h3>
                <p className="text-lg font-bold mb-7">₹{product.price}</p>
                <button className="w-fit px-4 py-2 bg-[#B0DD1D] text-white font-semibold rounded-3xl hover:bg-[#A0CC1D] transition duration-300">
                  Shop Now
                </button>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 transition w-8 h-8 rounded-full flex items-center justify-center"
          >
            <span className="text-xl font-bold">›</span>
          </button>
        </div>
      )}
        </div>
  );
};

export default AgriculturalProducts;