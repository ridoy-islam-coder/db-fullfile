import React, { useState } from 'react';

const AppNevbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#131313] flex items-center justify-between  md:px-8 py-4 border-b border-[#222] relative">
            {/* Logo */}
            <div className="flex items-center px-40 space-x-10 z-50">
                {/* <span className="text-3xl text-green-500 font-bold">*</span>
                <span className="text-white text-2xl font-bold tracking-widest">MOSTAFA</span> */}
                   <img src="/Frame 41.png" alt="Logo" className=" h-8 object-contain"/>
            </div>
            {/* Desktop Nav Links */}
            <ul className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12">
                <li>
                    <a href="#" className="text-green-500 font-medium">Home</a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-green-500 transition">About</a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-green-500 transition">Works</a>
                </li>
               
                <li>
                    <a href="#" className="text-white hover:text-green-500 transition">Contact</a>
                </li>
            </ul>
            {/* Desktop Let's Talk Button */}
            <div className="hidden md:flex items-center pr-40 space-x-2">
                <span className="text-white tracking-widest text-sm mr-2">LET'S TALK</span>
                <button className="bg-green-500 rounded-full w-9 h-9 flex items-center justify-center text-black text-xl">
                    <span>↗</span>
                </button>
            </div>
            {/* Hamburger Icon */}
            <button
                className="md:hidden flex items-center text-green-500 text-3xl z-50"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open Menu"
            >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-[#131313] bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-300 ${
                    menuOpen ? 'left-0 top-0' : 'left-full top-0 pointer-events-none'
                } md:hidden`}
                style={{ transitionProperty: 'left, opacity' }}
            >
                <button
                    className="absolute top-6 right-6 text-white text-3xl"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close Menu"
                >
                    &times;
                </button>
                <ul className="flex flex-col space-y-6 items-center">
                    <li>
                        <a href="#" className="text-lime-400 font-medium text-xl" onClick={() => setMenuOpen(false)}>Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-green-500 transition text-xl" onClick={() => setMenuOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-green-500 transition text-xl" onClick={() => setMenuOpen(false)}>Works</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-green-500 transition text-xl" onClick={() => setMenuOpen(false)}>Testimonials</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-green-500 transition text-xl" onClick={() => setMenuOpen(false)}>Contact</a>
                    </li>
                </ul>
                <div className="flex items-center space-x-2 mt-4">
                    <span className="text-white tracking-widest text-sm mr-2">LET'S TALK</span>
                    <button className="bg-green-500 rounded-full w-9 h-9 flex items-center justify-center text-black text-xl">
                        <span>↗</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default AppNevbar;