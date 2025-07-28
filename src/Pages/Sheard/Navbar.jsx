import { faMagnifyingGlass, faShoppingCart, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [hidden, setHidden] = useState(false);
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
    },[]);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/shop'}>Shop</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>

    return (
        <div className='h-[100px]'>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-transform h-[100px] duration-300 bg-white shadow ${hidden ? '-translate-y-full' : ''}`}>
                <div className="container mx-auto flex justify-between items-center h-full px-4">
                    <ul className="flex space-x-10">
                        {navLinks}
                    </ul>
                    <div className="logo"><a href="/"><img className='w-[55px] h-[65px]' src="/public/Frame.png" alt="logo" /></a></div>
                    <div className='flex items-center space-x-4'>
                        <ul className='flex space-x-4 justify-end items-center'>
                            <li><NavLink to={'/login'}><span>Login</span><FontAwesomeIcon icon={faUser} /></NavLink></li>
                            <li><NavLink to={'/search'}><FontAwesomeIcon icon={faMagnifyingGlass}/></NavLink></li>
                            <li><NavLink to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} /></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;