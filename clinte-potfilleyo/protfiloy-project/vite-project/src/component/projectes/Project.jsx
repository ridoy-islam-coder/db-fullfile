import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Project = () => {
    return (
          <section className="bg-[#131313] py-20 px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">LATEST WORKS</p>
          <h2 className="text-4xl font-bold text-white">
            Explore My Popular <span className="text-green-500">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mobile Application Design */}
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="bg-gray-300 h-64 flex items-center justify-center">
              <div className="bg-black rounded-3xl p-4 w-32 h-56 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-xs mb-2">MODERN</div>
                  <div className="w-16 h-20 bg-gray-700 rounded mx-auto"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-green-500 text-sm mb-2">Mobile Application</p>
              <h3 className="text-white text-xl font-semibold mb-2">Mobile Application Design</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build a professional and clean mobile application design that will help you to get more clients and
                customers.
              </p>
             <div className="w-10 h-10 bg-green-500 rounded-4xl flex items-center justify-center"><GoArrowUpRight /></div>
            </div>
          </div>

          {/* Website Makeup Design */}
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="bg-gray-300 h-64 flex items-center justify-center">
              <div className="bg-white rounded-lg p-4 w-48 h-32 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-green-200 rounded"></div>
                  <div className="text-xs text-gray-600">Beauty & Care</div>
                </div>
                <div className="space-y-1">
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-green-500 text-sm mb-2">Website Design</p>
              <h3 className="text-white text-xl font-semibold mb-2">Website Makeup Design</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build a professional and clean website design that will help you to get more clients and customers.
              </p>
              <div className="w-10 h-10 bg-green-500 rounded-4xl flex items-center justify-center"><GoArrowUpRight /></div>
            </div>
          </div>

          {/* Brand Identity and Motion Design */}
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="bg-gray-300 h-64 flex items-center justify-center">
              <div className="flex space-x-4">
                <div className="bg-green-600 w-16 h-24 rounded shadow-lg flex items-center justify-center">
                  <div className="text-white text-xs text-center">
                    <div>THE</div>
                    <div>PLANT</div>
                  </div>
                </div>
                <div className="bg-white w-20 h-12 rounded shadow-lg flex items-center justify-center mt-6">
                  <div className="text-xs text-gray-600">Business Card</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-green-500 text-sm mb-2">Brand Identity</p>
              <h3 className="text-white text-xl font-semibold mb-2">Brand Identity and Motion Design</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build a professional brand identity design that will help you to get more clients and customers.
              </p>
             <div className="w-10 h-10 bg-green-500 rounded-4xl flex items-center justify-center"><GoArrowUpRight /></div>
            </div>
          </div>

          {/* Creative Graphics Design */}
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="bg-gray-300 h-64 flex items-center justify-center relative">
              <div className="relative">
                {/* Lightbulb */}
                <div className="w-16 h-20 bg-yellow-400 rounded-full relative">
                  <div className="absolute top-2 left-2 w-12 h-12 bg-yellow-300 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-600 rounded-b"></div>
                </div>
                {/* Geometric shapes */}
                <div className="absolute -top-2 -left-4 w-6 h-6 bg-blue-400 transform rotate-45"></div>
                <div className="absolute -top-4 right-2 w-4 h-4 bg-red-400 rounded-full"></div>
                <div className="absolute -bottom-2 -right-4 w-8 h-4 bg-green-400 transform rotate-12"></div>
                <div className="absolute bottom-4 -left-6 w-6 h-6 bg-purple-400 transform rotate-45"></div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-green-500 text-sm mb-2">Graphics Design</p>
              <h3 className="text-white text-xl font-semibold mb-2">Creative Graphics Design</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build a professional and creative graphics design that will help you to get more clients and customers.
              </p>
             <div className="w-10 h-10 bg-green-500 rounded-4xl flex items-center justify-center"><GoArrowUpRight /></div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full transition-colors">
            View More Projects
          </button>
        </div>
      </div>
    </section>
    );
};

export default Project;