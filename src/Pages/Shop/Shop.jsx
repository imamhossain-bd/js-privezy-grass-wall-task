import React from 'react';

const Shop = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Shop Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Our Products</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore our wide range of high-quality products designed to meet your needs.
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {/* Sample Product Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img
                        src="https://i.ibb.co/v66McPwP/image-3.png"
                        alt="Product Name"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">JF Barbed Wire- 270 GSM</h3>
                        <p className="text-gray-600 text-sm mb-3">Heavy-duty galvanized barbed wire with 270 GSM coating.</p>
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-bold text-lg">$4995.00</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sample Product Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img
                        src="https://i.ibb.co/LDnCTFvZ/image-4.png"
                        alt="Product Name"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">FGC RustFree</h3>
                        <p className="text-gray-600 text-sm mb-3">Rust-resistant fencing wire with 12x12 gauge, suitable for livestock</p>
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-bold text-lg">$499.00</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sample Product Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img
                        src="https://i.ibb.co/5WLxMD4V/image-5.png"
                        alt="Product Name"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">GI Poultry Mesh</h3>
                        <p className="text-gray-600 text-sm mb-3">Durable zinc-coated wire for long-lasting outdoor use in harsh.</p>
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-bold text-lg">$10750.99</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sample Product Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img
                        src="https://i.ibb.co/Tqbsk0d1/image-6.png"
                        alt="Product Name"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">JF Bluelink Mesh</h3>
                        <p className="text-gray-600 text-sm mb-3">1kg roll of double-stranded barbed wire for small perimeter fencing needs.</p>
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-bold text-lg">$6362.99</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination (Placeholder) */}
            <div className="flex justify-center mt-12 space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200">Previous</button>
                <button className="px-4 py-2 border border-blue-600 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200">Next</button>
            </div>
        </div>
    );
};

export default Shop;
