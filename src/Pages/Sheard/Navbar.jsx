import { faMagnifyingGlass, faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchPopupOpen, setSearchPopupOpen] = useState(false); // State for search popup visibility
    const [loginPopupOpen, setLoginPopupOpen] = useState(false); // State for login popup visibility
    let lastScroll = 0;

    useEffect(() => {
        const handelScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScroll = currentScroll;
        }
        window.addEventListener('scroll', handelScroll);
        return () => {
            window.removeEventListener('scroll', handelScroll);
        }
    }, []);

    // Function to toggle search popup visibility
    const toggleSearchPopup = () => {
        setSearchPopupOpen(!searchPopupOpen);
        // Close mobile menu and login popup if search popup opens
        if (!searchPopupOpen) {
            setMobileMenuOpen(false);
            setLoginPopupOpen(false);
        }
    };

    // Function to toggle login popup visibility
    const toggleLoginPopup = () => {
        setLoginPopupOpen(!loginPopupOpen);
        // Close mobile menu and search popup if login popup opens
        if (!loginPopupOpen) {
            setMobileMenuOpen(false);
            setSearchPopupOpen(false);
        }
    };

    const navLinks = <>
        <li className='font-bold text-xl'><NavLink to={'/'} onClick={() => { setMobileMenuOpen(false); setSearchPopupOpen(false); setLoginPopupOpen(false); }}>Home</NavLink></li>
        <li className='font-bold text-xl'><NavLink to={'/shop'} onClick={() => { setMobileMenuOpen(false); setSearchPopupOpen(false); setLoginPopupOpen(false); }}>Shop</NavLink></li>
        <li className='font-bold text-xl'><NavLink to={'/blog'} onClick={() => { setMobileMenuOpen(false); setSearchPopupOpen(false); setLoginPopupOpen(false); }}>Blog</NavLink></li>
        <li className='font-bold text-xl'><NavLink to={'/contact'} onClick={() => { setMobileMenuOpen(false); setSearchPopupOpen(false); setLoginPopupOpen(false); }}>Contact</NavLink></li>
    </>

    return (
        <div className='h-[100px]'>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-transform h-[100px] duration-300 bg-white shadow ${hidden ? '-translate-y-full' : ''}`}>
                <div className="container mx-auto flex justify-between items-center h-full px-4">
                    {/* Desktop Navigation Links - Left */}
                    <ul className="hidden lg:flex space-x-10">
                        {navLinks}
                    </ul>

                    {/* Mobile Menu Button - Left */}
                    <button
                        className="lg:hidden flex items-center"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-xl" />
                    </button>

                    {/* Logo */}
                    <div className="logo flex-shrink-0">
                        <a href="/">
                            <img className='w-[45px] h-[55px] sm:w-[50px] sm:h-[60px] lg:w-[55px] lg:h-[65px]' src="/public/Frame.png" alt="logo" />
                        </a>
                    </div>

                    {/* Desktop Right Icons */}
                    <div className='hidden md:flex items-center space-x-4'>
                        <ul className='flex space-x-4 justify-end items-center'>
                            <li className='text-xl'>
                                <button onClick={toggleLoginPopup} className="flex items-center space-x-2">
                                    <span className="hidden lg:inline">Login</span><FontAwesomeIcon icon={faUser} />
                                </button>
                            </li>
                            <li className='text-xl'>
                                <button onClick={toggleSearchPopup}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </li>
                            <li className='text-xl'><NavLink to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} /></NavLink></li>
                        </ul>
                    </div>

                    <div className='md:hidden flex items-center space-x-3'>
                        <button onClick={toggleSearchPopup}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <NavLink to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="container mx-auto px-4 py-4">
                        <ul className="flex flex-col space-y-4">
                            {navLinks}
                            <li className="md:hidden border-t pt-4">
                                <button onClick={toggleLoginPopup} className="flex items-center space-x-2 w-full text-left">
                                    <span>Login</span><FontAwesomeIcon icon={faUser} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Search Popup */}
            {searchPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-[60] flex items-center justify-center transition-opacity duration-300 ease-in-out">
                    <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md mx-4 transform transition-transform duration-300 ease-in-out scale-95 opacity-0 animate-scale-in">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800">Search</h3>
                            <button onClick={toggleSearchPopup} className="text-gray-500 hover:text-gray-800 transition-colors duration-200">
                                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                            />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        <button className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Search
                        </button>
                    </div>
                </div>
            )}

            {/* Login Popup */}
            {loginPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-[60] flex items-center justify-center transition-opacity duration-300 ease-in-out">
                    <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md mx-4 transform transition-transform duration-300 ease-in-out scale-95 opacity-0 animate-scale-in">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800">Login</h3>
                            <button onClick={toggleLoginPopup} className="text-gray-500 hover:text-gray-800 transition-colors duration-200">
                                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your@example.com"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                />
                            </div>
                            <button type="submit" className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                Log In
                            </button>
                        </form>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
                        </p>
                    </div>
                </div>
            )}

            {/* Tailwind CSS custom animation for scale-in */}
            <style>
                {`
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-scale-in {
                    animation: scaleIn 0.3s ease-out forwards;
                }
                `}
            </style>
        </div>
    );
};

export default Navbar;
