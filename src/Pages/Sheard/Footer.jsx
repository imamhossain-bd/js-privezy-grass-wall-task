import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="bg-[rgb(0,43,85)] text-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Column 1: Join Our JF Products */}
                    <div className="flex flex-col items-start lg:col-span-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Join Our JF Products</h3>
                        <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">We'll tell you about store updates and discounts</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2.5 md:p-3 rounded-lg bg-blue-800 border border-blue-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 md:mb-4 text-sm md:text-base"
                        />
                        <label className="flex items-start text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-lime-500 bg-blue-800 border-gray-600 rounded mr-2 mt-0.5 flex-shrink-0" />
                            <span>Yes, subscribe me to your newsletter.</span>
                        </label>
                        <button className="w-full py-2.5 md:py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
                            Join Now
                        </button>
                    </div>

                    {/* Column 2: Information */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Information</h3>
                        <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base w-full">
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">Shop</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">Blogs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Helpful */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Helpful</h3>
                        <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base w-full">
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200 block py-1">My Account</a></li>
                        </ul>
                    </div>
                </div>

                {/* Section for Our Branches and Contact Us button */}
                <div className="border-t border-blue-800 max-w-7xl mx-auto mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                    {/* Our Branches (Logo and text) */}
                    <div className="flex items-start md:items-center w-full md:w-auto">
                        <img 
                            src="https://i.ibb.co/KzbZgKhZ/Group-395.png" 
                            alt="JF Logo" 
                            className="h-12 w-12 md:h-16 md:w-16 mr-3 md:mr-4 rounded-full flex-shrink-0" 
                        />
                        <div className="min-w-0 flex-1">
                            <h4 className="text-base md:text-lg font-semibold mb-1">Our Branches</h4>
                            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                <span className="block sm:inline">Coimbatore, Chennai,</span>
                                <span className="block sm:inline"> Hyderabad, Goa, Kochi</span>
                            </p>
                        </div>
                    </div>
                    
                    {/* Contact Us button */}
                    <button className="w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-colors duration-300 text-sm md:text-base whitespace-nowrap">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Footer Bottom: Copyright and Social Icons */}
            <div className="bg-white py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-800 text-xs md:text-sm gap-4 sm:gap-0">
                    <p className="text-center sm:text-left">
                        Copyright © 2023 JF Products. All rights reserved
                    </p>
                    <div className="flex space-x-3 md:space-x-4">
                        <a href="#" className="hover:text-blue-600 transition-colors duration-200 p-1">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="hover:text-blue-600 transition-colors duration-200 p-1">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.002 3.714.051 1.017.055 1.74.204 2.22.392.573.223.978.477 1.382.881.404.405.657.81.88 1.382.188.48.337 1.203.392 2.22.049.93.051 1.284.051 3.714v.007c0 2.43-.002 2.784-.051 3.714-.055 1.017-.204 1.74-.392 2.22-.223.573-.477.978-.881 1.382-.405.404-.81.657-1.382.88-.48.188-1.203.337-2.22.392-.93.049-1.284.051-3.714.051h-.007c-2.43 0-2.784-.002-3.714-.051-1.017-.055-1.74-.204-2.22-.392-.573-.223-.978-.477-1.382-.881-.404-.405-.81-.657-.88-1.382-.188-.48-.337-1.203-.392-2.22-.049-.93-.051-1.284-.051-3.714v-.007c0-2.43.002-2.784.051-3.714.055-1.017.204-1.74.392-2.22.223-.573.477-.978.881-1.382.405-.404.81-.657.88-1.382.188-.48.337-1.203.392-2.22.049-.93.051-1.284.051-3.714v-.007zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.8a3.335 3.335 0 100 6.67 3.335 3.335 0 000-6.67z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="hover:text-blue-600 transition-colors duration-200 p-1">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            <span className="sr-only">YouTube</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;