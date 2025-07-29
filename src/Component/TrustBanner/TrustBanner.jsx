import React from 'react';
import { FaStar, FaSmile, FaTruck } from 'react-icons/fa';

const TrustBanner = () => {
  return (
    <div className="text-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20 w-full max-w-[320px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1540px] mx-auto mt-6 sm:mt-8 lg:mt-10"
      style={{ background: 'radial-gradient(circle at center, #0a4a8f 0%, #002B55 100%)', backgroundClip: 'padding-box',}}>
      
      {/* Center heading */}
      <h2 className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[51px] font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
        Trusted by over <span className="font-bold">6K+</span> customers
      </h2>

      {/* Feature items */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        
        {/* Item 1 */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left w-full sm:w-auto">
          <div className="bg-white text-[#003366] p-2 sm:p-3 rounded-full flex-shrink-0">
            <FaStar className="text-lg sm:text-xl lg:text-2xl" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-white text-sm sm:text-base lg:text-lg">Premium</p>
            <p className="text-xs sm:text-sm lg:text-base text-white/80">Products</p>
          </div>
        </div>

        {/* Separator line for mobile */}
        <div className="w-full h-px bg-white/20 sm:hidden"></div>

        {/* Item 2 */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left w-full sm:w-auto">
          <div className="bg-white text-[#003366] p-2 sm:p-3 rounded-full flex-shrink-0">
            <FaSmile className="text-lg sm:text-xl lg:text-2xl" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-white text-sm sm:text-base lg:text-lg">4000+</p>
            <p className="text-xs sm:text-sm lg:text-base text-white/80">Google Review</p>
          </div>
        </div>

        {/* Separator line for mobile */}
        <div className="w-full h-px bg-white/20 sm:hidden"></div>

        {/* Item 3 */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left w-full sm:w-auto">
          <div className="bg-white text-[#003366] p-2 sm:p-3 rounded-full flex-shrink-0">
            <FaTruck className="text-lg sm:text-xl lg:text-2xl" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-white text-sm sm:text-base lg:text-lg">Delivery</p>
            <p className="text-xs sm:text-sm lg:text-base text-white/80">Across India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;