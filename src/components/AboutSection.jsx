import React from 'react';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';

const AboutSection = () => {
  return (
    <section className="py-20 font-inter overflow-hidden bg-[#F2E1D9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Side - Images (50% width) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <img
                src={about1}
                alt="Tailored suit"
                className="w-full max-w-[500px] object-cover rounded-lg shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/420x500/ccc/000?text=Image+Missing'; }}
              />
              <img
                src={about2}
                alt="Tailor working"
                className="absolute -bottom-8 left-56 w-60 h-72 border-4 border-white rounded-lg shadow-xl object-cover hidden md:block"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/240x300/aaa/000?text=Image+Missing'; }}
              />
            </div>
          </div>

          {/* Right Side - Text Content (50% width) */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="py-12 lg:py-0 pl-0 lg:pl-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                About our <br /> tailor house
              </h2>
              <p className="text-gray-800 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <p className="text-gray-800 text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
              </p>
              <button className="bg-[#caa892] hover:bg-[#b98a75] text-white px-8 py-3 rounded transition duration-300 text-lg font-semibold">
                MORE ABOUT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;