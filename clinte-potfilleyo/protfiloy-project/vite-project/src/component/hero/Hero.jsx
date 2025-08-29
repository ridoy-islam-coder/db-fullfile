import React from 'react';



const Hero = () => {
    return (
         <section className="bg-[#131313] min-h-screen flex items-center">
      <div className="container mx-auto px-3">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-gray-400 text-lg mb-2">Hello, i'm</p>
              <h1 className="text-5xl font-bold text-green-500 mb-2">Mostafa Rahman</h1>
              <h2 className="text-3xl font-light text-white">UI/UX Designer</h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              We denounce with righteous indignation dislike demoralized by the charms of pleasure
            </p>

            <div className="flex gap-4 items-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Hire Me
              </button>
              <button className="text-white hover:text-green-500 flex items-center gap-2 transition-colors">
                Download Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-2 flex justify-center ">
            <div className="relative">
              {/* Green leaf background
              <div className="absolute -top-8 -right-8 w-64 h-80 bg-green-500 rounded-full transform rotate-45 opacity-90"></div> */}
              {/* Profile image */}
              <img
                  src="/Container.png"
                  alt="Mostafa Rahman"
                  width={350}
                  height={350}
                  className=""
                />
              
            </div>
          </div>
 {/* Right Stats */}
           <div className="flex flex-col gap-6">
          <div className="bg-black rounded-2xl p-6 text-center min-w-[80px]">
            <div className="text-3xl font-bold text-green-500 mb-2">1+</div>
            <div className="text-gray-400 text-sm">Years of Experience</div>
          </div>

          <div className="bg-black rounded-2xl p-6 text-center min-w-[80px]">
            <div className="text-3xl font-bold text-green-500 mb-2">7+</div>
            <div className="text-gray-400 text-sm">Project Completed</div>
          </div>

          <div className="bg-black rounded-2xl p-6 text-center min-w-[80px]">
            <div className="text-3xl font-bold text-green-500 mb-2">99%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </div>
         
      </div>
      </div>
    </section>
    );
};

export default Hero;