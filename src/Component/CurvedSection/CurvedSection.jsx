import React from 'react';

const CurvedSection = () => {
    return (
        <div className="relative w-full bg-white py-8 sm:py-12 lg:py-16 overflow-hidden">
            {/* Background curved strip */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-blue-100 h-12 sm:h-14 lg:h-16 border-t border-b border-blue-300 transform -rotate-1 sm:-rotate-2 shadow-md"></div>

            {/* Content container */}
            <div className="relative z-10 transform rotate-[-1deg] sm:rotate-[-2deg]">
                {/* Desktop and Tablet layout with marquee */}
                <div className="hidden sm:block overflow-hidden">
                    <div className="flex items-center w-max space-x-8 px-4 py-4 animate-marquee">
                        {Array(2).fill(0).map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="flex items-center space-x-2 flex-shrink-0">
                                    <img src="/public/Group 449.png" alt="Icon" className="h-5 w-5 object-contain" />
                                    <span className="text-blue-900 font-semibold text-lg whitespace-nowrap">Quality Product</span>
                                </div>
                                <div className="flex items-center space-x-2 flex-shrink-0">
                                    <img src="/public/Group 449.png" alt="Icon" className="h-5 w-5 object-contain" />
                                    <span className="text-blue-900 font-semibold text-lg whitespace-nowrap">Shipping Across India</span>
                                </div>
                                <div className="flex items-center space-x-2 flex-shrink-0">
                                    <img src="/public/Group 449.png" alt="Icon" className="h-5 w-5 object-contain" />
                                    <span className="text-blue-900 font-semibold text-lg whitespace-nowrap">Fast Installation</span>
                                </div>
                                <div className="flex items-center space-x-2 flex-shrink-0">
                                    <img src="/public/Group 449.png" alt="Icon" className="h-5 w-5 object-contain" />
                                    <span className="text-blue-900 font-semibold text-lg whitespace-nowrap">Customer Support</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Mobile layout - Scrollable */}
                <div className="sm:hidden">
                    <div className="flex items-center space-x-6 px-4 py-4 overflow-x-auto scrollbar-hide">
                        <div className="flex items-center space-x-2 flex-shrink-0">
                            <img src="/public/Group 449.png" alt="Quality Icon" className="h-5 w-5 object-contain" />
                            <span className="text-blue-900 font-semibold text-sm whitespace-nowrap">Quality Product</span>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                            <img src="/public/Group 449.png" alt="Shipping Icon" className="h-5 w-5 object-contain" />
                            <span className="text-blue-900 font-semibold text-sm whitespace-nowrap">Shipping Across India</span>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                            <img src="/public/Group 449.png" alt="Fast Icon" className="h-5 w-5 object-contain" />
                            <span className="text-blue-900 font-semibold text-sm whitespace-nowrap">Fast Installation</span>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                            <img src="/public/Group 449.png" alt="Support Icon" className="h-5 w-5 object-contain" />
                            <span className="text-blue-900 font-semibold text-sm whitespace-nowrap">Customer Support</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hide scrollbar on mobile */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            {/* Marquee animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default CurvedSection;
