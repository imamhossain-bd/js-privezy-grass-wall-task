import React from 'react';

const Blog = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Blog Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Our Latest Blog Posts</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Stay updated with our insights, news, and tips on various topics.
                </p>
            </div>

            {/* Blog Post Grid (Placeholder) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Sample Blog Post Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img
                        src="https://i.ibb.co/xK87ZXF8/blog-poster-3.png"
                        alt="Blog Post Title"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">The Future of Fencing Technology</h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Discover the latest innovations shaping the fencing industry, from smart security solutions to sustainable materials.
                        </p>
                        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Read More &rarr;</a>
                    </div>
                </div>

                {/* Sample Blog Post Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img
                        src="https://i.ibb.co/qFrkmwcN/blog-poster-4.png"
                        alt="Blog Post Title"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Choosing the Right Fence for Your Home</h3>
                        <p className="text-gray-600 text-sm mb-3">
                            A comprehensive guide to selecting the perfect fence that meets your aesthetic and security needs.
                        </p>
                        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Read More &rarr;</a>
                    </div>
                </div>

                {/* Sample Blog Post Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img
                        src="https://i.ibb.co/677KKsV6/blog-poster-5.png"
                        alt="Blog Post Title"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintenance Tips for Long-Lasting Fences</h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Learn essential tips and tricks to maintain your fence, ensuring its durability and appearance for years.
                        </p>
                        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Read More &rarr;</a>
                    </div>
                </div>

                {/* Sample Blog Post Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img
                        src="https://i.ibb.co/gqnLqDR/blog-poster-6.png"
                        alt="Blog Post Title"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">The Impact of Sustainable Fencing Materials</h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Explore how eco-friendly materials are changing the landscape of fencing and their environmental benefits.
                        </p>
                        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Read More &rarr;</a>
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

export default Blog;
