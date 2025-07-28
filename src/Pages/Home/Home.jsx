import React, { useState, useEffect, useRef } from "react";
import AgriculturalProducts from "../../Component/AgriculturalProducts/AgriculturalProducts";

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
        <div className="relative w-[1280px] h-[600px] mx-auto mt-8" id="default-carousel">
            {/* Carousel container */}
            <div className="overflow-hidden w-full h-full rounded-lg bg-gray-100">
                {/* Slides wrapper with flex & transition */}
                <div ref={slideRef} className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 flex gap-x-10 items-center" style={{ minWidth: "100%" }}>
                    {/* Image */}
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="w-[500px] h-[500px]
                    mt-[50px] ml-[6rem] object-contain" loading="lazy"/>
                    {/* Content */}
                    <div className="w-1/2 h-full p-6 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-[20px]">{slide.title}</h2>
                        <p className="text-gray-700 mb-[50px]">{slide.description}</p>
                        {/* Shop Now Button */}
                        <button className="w-fit px-4 rounded-3xl py-2 bg-[#B0DD1D] text-white font-semibold rounded-lg hover:bg-[#B0DD1D] transition duration-300">Shop Now</button>
                    </div>
                    <div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {slides.map((_, idx) => (
                <button key={idx} type="button" className={`w-3 h-3 rounded-full ${ idx === current ? "bg-blue-600" : "bg-gray-300"}`} aria-current={idx === current ? "true" : "false"}
                    aria-label={`Slide ${idx + 1}`} onClick={() => setCurrent(idx)}/>
                ))}
            </div>

            {/* Slider controls */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide} aria-label="Previous">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B0DD1D] hover:bg-[#B0DD1D] dark:bg-gray-800/70 dark:hover:bg-gray-800">
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide} aria-label="Next">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B0DD1D] hover:bg-[#B0DD1D] dark:bg-gray-800/70 dark:hover:bg-gray-800">
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
                </span>
            </button>
        </div>

        {/* Agricultural Products Section */}
        <div>
            <AgriculturalProducts />
        </div>

    </div>
  );
};

export default Home;
