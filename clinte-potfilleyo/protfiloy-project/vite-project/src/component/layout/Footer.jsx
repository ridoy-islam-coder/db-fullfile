import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="text-lime-400 text-2xl">☘️</div>
                            <span className="text-white font-bold text-xl">MOSTAFA</span>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Link</h3>
                        <div className="flex flex-col gap-2 mb-6">
                            <a href="#" className="text-green-500 hover:text-white transition-colors">Home</a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Projects</a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">About</a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Reviews</a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Contact</a>
                        </div>
                        {/* Email Subscription */}
                        <form className="flex w-full max-w-xs gap-2 flex-col xs:flex-row">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-[#222] text-white px-4 py-2 rounded placeholder-gray-400 border border-[#222] focus:border-lime-400 focus:outline-none flex-1 mb-2 xs:mb-0"
                            />
                            <button className="bg-green-500 hover:bg-green-500 text-black px-5 py-2 rounded font-semibold w-full xs:w-auto">Join Us</button>
                        </form>
                    </div>

                    {/* Address Section */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-white font-semibold text-lg mb-4">Address</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <div className="text-lime-400">📍</div>
                                <span className="text-gray-400">Gaibandha, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-lime-400">✉️</div>
                                <span className="text-gray-400">mostafarahman20194@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-lime-400">📞</div>
                                <span className="text-gray-400">+880 01756197966</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className=" bg-[#131313] ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            Copyright ©2025, Portfolio. All rights Reserved
                        </p>
                        {/* Social Links */}
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            <a href=" https://www.facebook.com/mostafarahmanux" className="text-gray-400 hover:text-lime-400 transition-colors">Facebook</a>
                            <a href=" https://dribbble.com/mostafarahmanux" className="text-gray-400 hover:text-lime-400 transition-colors">Dribbble</a>
                            <a href=" https://www.behance.net/mostafarahman4" className="text-gray-400 hover:text-lime-400 transition-colors">Behance</a>
                            <a href="https://www.linkedin.com/in/mostafaux24-294a752a0/" className="text-gray-400 hover:text-lime-400 transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;