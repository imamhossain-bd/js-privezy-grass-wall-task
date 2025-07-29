import React, { useState, useEffect, useRef } from "react";
import AgriculturalProducts from "../../Component/AgriculturalProducts/AgriculturalProducts";
import LandscapeProducts from "../../Component/LandscapeProducts/LandscapeProducts";
import TrustBanner from "../../Component/TrustBanner/TrustBanner";
import WhyUs from "../../Component/WhyUs/WhyUs";
import CurvedSection from "../../Component/CurvedSection/CurvedSection";
import CustomerReviewSection from "../../Component/CustomerReviewSection/CustomerReviewSection";
import ContactMapSection from "../../Component/ContactMapSection/ContactMapSection";

const slides = [
  {
    image: "https://i.ibb.co/8gQbG4Ws/image.png",
    title: (<>JF Privezy Grass <br /> Wall</>),
    description: "The perfect Blend of Greenery and Elegance",
  },
  {
    image: "https://i.ibb.co/V6XH07g/image-2.png",
    title: (<>JF Australian <br /> Trellis</>),
    description: "Where aesthetics meet durability",
  },
  {
    image: "https://i.ibb.co/8gQbG4Ws/image.png",
    title: (<>JF Privezy Grass <br /> Wall</>),
    description: "The perfect Blend of Greenery and Elegance",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const slideRef = useRef(null);

  // Auto slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 8000);
    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  return (
    <div>
        {/* Slider Section */}
        <div className="relative w-full max-w-[320px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1280px] xl:max-w-[1580px]  h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] mx-auto mt-4 sm:mt-6 md:mt-7 lg:mt-8 px-4 sm:px-0" id="default-carousel">
            {/* Carousel container */}
            <div className="overflow-hidden w-full h-full rounded-lg bg-gray-100">
                {/* Slides wrapper with flex & transition */}
                <div ref={slideRef} className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-10 items-center justify-center px-4 sm:px-0" style={{ minWidth: "100%" }}>
                    {/* Image */}
                    <img 
                        src={slide.image} 
                        alt={`Slide ${index + 1}`} 
                        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]
                                   sm:mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px] 
                                   sm:ml-[1rem] md:ml-[2rem] lg:ml-[4rem] xl:ml-[6rem] 
                                   object-contain flex-shrink-0" 
                        loading="lazy"
                    />
                    {/* Content */}
                    <div className="w-full sm:w-1/2 h-auto sm:h-full p-2 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center text-center sm:text-left">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold  mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-[20px] leading-tight">{slide.title}</h2>
                        <p className="text-gray-700 text-sm sm:text-sm md:text-base lg:text-base xl:text-base mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-[50px]">{slide.description}</p>
                        {/* Shop Now Button */}
                        <button className="w-fit mx-auto sm:mx-0 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#B0DD1D] text-white font-semibold rounded-3xl hover:bg-[#B0DD1D] transition duration-300 text-sm sm:text-base">Shop Now</button>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 left-1/2 space-x-1.5 sm:space-x-2 md:space-x-3">
                {slides.map((_, idx) => (
                <button key={idx} type="button" className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${ idx === current ? "bg-blue-600" : "bg-gray-300" }`} aria-current={idx === current ? "true" : "false"} aria-label={`Slide ${idx + 1}`} onClick={() => setCurrent(idx)}/>
                ))}
            </div>

            {/* Slider controls */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-1 sm:px-2 md:px-3 lg:px-4 cursor-pointer group focus:outline-none" onClick={prevSlide} aria-label="Previous">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-[#B0DD1D] hover:bg-[#B0DD1D] transition-all duration-200">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-800" 
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-1 sm:px-2 md:px-3 lg:px-4 cursor-pointer group focus:outline-none" onClick={nextSlide} aria-label="Next">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-[#B0DD1D] hover:bg-[#B0DD1D] transition-all duration-200">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-800"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
                </span>
            </button>
        </div>

        {/* Agricultural Products Section */}
        <div>
            <AgriculturalProducts />
        </div>

        {/* Landscape Products */}
        <div>
          <LandscapeProducts />
        </div>

        {/* Trust Banner Section */}
        <div className="">
          <TrustBanner />
        </div>

        {/* Why Us Section */}
        <div>
          <WhyUs />
        </div>

        {/* CurvedSection */}
        <div>
          <CurvedSection />
        </div>

        {/* CustomerReviewSection */}
        <div>
          <CustomerReviewSection></CustomerReviewSection>
        </div>

        {/* ContactMapSection */}
        <ContactMapSection />

    </div>
  );
};

export default Home;