// src/components/PageHeroSection.jsx
import React from "react";

const PageHeroSection = ({ title, bgImage }) => {
  return (
    <section
      className="relative w-full h-[100px] md:h-[340px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-sm" />

      <div className="relative z-10 text-center text-white">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24   rounded-full flex items-center justify-center text-xs tracking-widest uppercase mb-4">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text fill="#caa892" fontSize="25" fontFamily="sans-serif" fontWeight="bold">
              <textPath xlinkHref="#circlePath" startOffset="0%">
                BEST TAILOR SERVICE IN YOUR CITY • BEST TAILOR SERVICE IN YOUR CITY •
              </textPath>
            </text>
          </svg>

          </div>
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeroSection;
