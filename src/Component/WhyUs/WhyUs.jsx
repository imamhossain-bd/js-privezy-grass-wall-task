import React from 'react';

// WhyUs component to display the features of the company
const WhyUs = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Main title section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Why Us</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We specialize in delivering durable and innovative fencing solutions built to last.
                    With a focus on quality and trust, we help secure spaces across industries and
                    communities.
                </p>
            </div>

            {/* Cards container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-0 transition-opacity duration-300 rounded-xl"></div>
                    <div className="relative z-10">
                        <div className="mb-6">
                            <img src="/public/Group 480.png" alt="Innovation Icon" className="h-12 w-12 object-contain"/>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 transition-colors duration-300">
                            Unmatched Durability with Corrosion-Free Technology
                        </h3>
                        <p className="text-gray-600 transition-colors duration-300">
                            Our JF-270 barbed wire features a robust 270 GSM zinc coating,
                            ensuring superior resistance against rust and corrosion. Paired with
                            stainless steel binding wire, our fencing solutions are designed to
                            withstand harsh environmental conditions, offering longevity and
                            reliability.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-gradient-to-br from-indigo-800 to-blue-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    {/* Content */}
                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-6">
                            <img src="/public/Frame-2.png" alt="Innovation Icon" className="h-12 w-12 object-contain"/>
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Customer-Centric Approach
                        </h3>
                        {/* Description */}
                        <p className="text-gray-200">
                            At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-0 transition-opacity duration-300 rounded-xl"></div>
                    {/* Content */}
                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-6">
                            <img src="/public/Group 484.png" alt="Innovation Icon" className="h-12 w-12 object-contain"/>
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-gray-900 mb-4 transition-colors duration-300">
                            Innovative and Diverse Product Range
                        </h3>
                        {/* Description */}
                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                            We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Us Button */}
            <button className="mt-12 px-8 py-3 bg-lime-500 text-white font-semibold rounded-full shadow-lg hover:bg-lime-600 transition-colors duration-300 transform hover:scale-105">
                Contact Us
            </button>
        </div>
    );
};

export default WhyUs;
