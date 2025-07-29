import React from 'react';

const ContactMapSection = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="mb-6 sm:mb-8 md:mb-12 text-center">
                <span className="inline-block bg-lime-400 text-gray-800 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
                    OUR BRANCHES
                </span>
            </div>

            <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 flex-wrap">
                <div className="flex flex-col items-center cursor-pointer">
                    <div className="p-3 rounded-full bg-blue-100 border-2 border-lime-400">
                        <img src="https://i.ibb.co/JWqtrPnD/Vector.png" alt="Coimbatore" className="h-8 w-8" />
                    </div>
                    <span className="mt-2 text-blue-800 font-semibold">COIMBATORE</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="p-3">
                        <img src="https://i.ibb.co/6RT8ccgD/Vector-1.png" alt="Chennai" className="h-8 w-8" />
                    </div>
                    <span className="mt-2 text-gray-600">CHENNAI</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="p-3">
                        <img src="https://i.ibb.co/r2FMZJqd/Vector-3.png" alt="Hyderabad" className="h-8 w-8" />
                    </div>
                    <span className="mt-2 text-gray-600">HYDERABAD</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="p-3">
                        <img src="https://i.ibb.co/d45pJXMN/Vector-4.png" alt="Goa" className="h-8 w-8" />
                    </div>
                    <span className="mt-2 text-gray-600">GOA</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="p-3">
                        <img src="https://i.ibb.co/PvV4c8Ln/Vector-5.png" alt="Kochi" className="h-8 w-8" />
                    </div>
                    <span className="mt-2 text-gray-600">KOCHI</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    <div className="p-3">
                        <img src="https://i.ibb.co/NwzbYCz/Vector-2.png" alt="Mumbai" className="h-8 w-8" />
                    </div>
                    <span className="mt-2 text-gray-600">MUMBAI</span>
                </div>
            </div>

            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
                {/* Left Side: Contact Us Form - updated colors */}
                <div className="bg-[rgb(0,43,85)] p-8 lg:p-12 w-full lg:w-2/5 text-white flex flex-col justify-between rounded-xl shadow-lg">
                    <h3 className="text-4xl font-bold mb-8">Contact Us</h3>
                    <div className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 bg-[rgb(0,53,105)] border border-[rgb(0,63,125)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 bg-[rgb(0,53,105)] border border-[rgb(0,63,125)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-white"
                        />
                        <input
                            type="tel"
                            placeholder="Phone *"
                            className="w-full p-4 bg-[rgb(0,53,105)] border border-[rgb(0,63,125)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-white"
                        />
                        <textarea
                            placeholder="Write message"
                            rows="5"
                            className="w-full p-4 bg-[rgb(0,53,105)] border border-[rgb(0,63,125)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-white resize-none"
                        ></textarea>
                        <button
                            className="w-full py-3 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-colors duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </div>

                {/* Map and Address  */}
                <div className="bg-white w-full lg:w-3/5 flex flex-col rounded-xl shadow-lg">
                    <div className="flex-grow relative overflow-hidden rounded-t-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.586616422849!2d77.57019331484172!3d12.9351912908823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15809b0b467f%3A0x6a0f6a0f6a0f6a0f!2sJRR+Towers%2C+Pattalamma+Temple+Rd%2C+Basavanagudi%2C+Bengaluru%2C+Karnataka+560004%2C+India!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="JRR Towers Location Map"
                        ></iframe>
                        {/* Gradient Overlay for the map */}
                        <div className="absolute inset-0 pointer-events-none"></div>
                    </div>
                    <div className="p-6 bg-white flex items-center space-x-4 border-t border-gray-200 rounded-b-xl">
                        <div className="p-3 rounded-full bg-blue-100">
                            <img src="https://placehold.co/24x24/0000FF/FFFFFF?text=L" alt="Location Icon" className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-gray-800 font-semibold text-lg">JRR Towers (2nd Floor), Pattalamma Temple Rd,</p>
                            <p className="text-gray-600 text-md">Basavangudi, Bangalore, 560004</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMapSection;