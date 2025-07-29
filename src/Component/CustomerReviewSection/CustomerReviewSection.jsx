import React, { useState, useEffect } from 'react';

const CustomerReviewSection = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [displayReview, setDisplayReview] = useState(null);
    const [animationClass, setAnimationClass] = useState('');

    const reviews = [
    {
        id: 1,
        quote:
        "I had an initial issue with stock availability and delivery, but once the product arrived on-site, the installation was incredibly fast—400 ft. completed in no time. The team handled everything professionally, and the final result was outstanding.",
        author: "Samuel Varughese",
        imageUrl: "https://i.ibb.co/xSFtGdH3/image-43.png",
    },
    {
        id: 2,
        quote:
        "Excellent quality fencing! The material is extremely durable and very easy to install. It has significantly improved the safety and appearance of our property. Highly recommend JF Products for their fast delivery, responsive customer service, and overall professionalism.",
        author: "Jane Doe",
        imageUrl: "https://i.ibb.co/xSFtGdH3/image-43.png",
    },
    {
        id: 3,
        quote:
        "The team was incredibly helpful and always responsive to our inquiries. The product exceeded all expectations—solid build, modern design, and perfect for our residential project. I'll definitely be using JF Products again for future fencing needs.",
        author: "John Smith",
        imageUrl: "https://i.ibb.co/xSFtGdH3/image-43.png",
    }
    ]


    useEffect(() => {
        setDisplayReview(reviews[currentReviewIndex]);
    }, []); 

    useEffect(() => {
        if (!displayReview || displayReview.id !== reviews[currentReviewIndex].id) {
            const direction = currentReviewIndex > reviews.indexOf(displayReview) ? '-translate-x-full' : 'translate-x-full';
            setAnimationClass(`opacity-0 transform ${direction}`); 

            const timer = setTimeout(() => {
                setDisplayReview(reviews[currentReviewIndex]);
                const newDirection = currentReviewIndex > reviews.indexOf(displayReview) ? 'translate-x-full' : '-translate-x-full';
                setAnimationClass(`opacity-0 transform ${newDirection}`); 

                setTimeout(() => {
                    setAnimationClass('opacity-100 transform translate-x-0'); 
                }, 50);
            }, 300);

            return () => clearTimeout(timer);
        } else {
            setAnimationClass('opacity-100 transform translate-x-0');
        }
    }, [currentReviewIndex, reviews, displayReview]);

    useEffect(() => {
        const autoSlideInterval = setInterval(() => {
            goToNextReview();
        }, 6000);

        return () => clearInterval(autoSlideInterval);
    }, [currentReviewIndex, reviews]);

    const goToPreviousReview = () => {
        setAnimationClass('opacity-0 transform translate-x-full');
        setTimeout(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
            );
        }, 300); 
    };

    const goToNextReview = () => {
        setAnimationClass('opacity-0 transform -translate-x-full'); 
        setTimeout(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 300);
    };

    if (!displayReview) {
        return null;
    }

    return (
        <div className="bg-white flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 px-4">
                    Why Customers Love Us?
                </h2>
            </div>

            {/* Review Container */}
            <div className="relative bg-[rgb(242,244,246)] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 md:gap-8 overflow-hidden">
                
                {/* Content Section */}
                <div key={displayReview.id + '-content'} className={`flex-1 flex flex-col justify-between w-full lg:w-2/3 transition-all duration-300 ease-in-out ${animationClass}`}>
                    {/* Quote Mark */}
                    <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 text-green-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-70">
                        &#x201C;
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-0">
                        {displayReview.quote}
                    </p>

                    {/* Decorative Background */}
                    <div className="w-full h-12 sm:h-16 md:h-20 mb-2 sm:mb-3 md:mb-4 mt-8 sm:mt-16 md:mt-32 lg:mt-40 bg-white rounded-md" style={{
                        backgroundImage: 'radial-gradient(circle,rgb(184, 184, 184) 1px, transparent 1px)',
                        backgroundSize: '8px 8px',
                        padding: '6px 4px',
                        opacity: 0.6
                    }}></div>

                    {/* Author and Controls */}
                    <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 mt-[-3rem] sm:mt-[-1rem] md:mt-[-5.5rem] z-10 pt-3 sm:pt-4 px-2 sm:px-4 md:px-10 gap-3 sm:gap-0">
                        <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg order-2 sm:order-1">
                            - {displayReview.author}
                        </p>
                        <div className="flex space-x-2 sm:space-x-3 order-1 sm:order-2">
                            <button
                                onClick={goToPreviousReview}
                                className="p-1.5 sm:p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>
                            <button
                                onClick={goToNextReview}
                                className="p-1.5 sm:p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div key={displayReview.id + '-image'} className={`relative w-full lg:w-1/3 flex justify-center lg:justify-end transition-all duration-300 ease-in-out ${animationClass} mt-4 lg:mt-0`}>
                    <div className="rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-xs sm:max-w-sm lg:max-w-none">
                        <img
                            src={displayReview.imageUrl}
                            alt="Customer"
                            className="w-full h-auto object-cover rounded-lg sm:rounded-xl"
                            style={{ 
                                maxWidth: '280px', 
                                maxHeight: '460px',
                                '@media (min-width: 640px)': {
                                    maxHeight: '350px'
                                },
                                '@media (min-width: 1024px)': {
                                    maxWidth: '280px',
                                    maxHeight: '460px'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentReviewIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            index === currentReviewIndex 
                                ? 'bg-green-500 scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CustomerReviewSection;