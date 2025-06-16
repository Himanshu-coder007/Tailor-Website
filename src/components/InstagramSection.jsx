import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramSection = () => {
  const images = [
    {
      src: "https://preview.colorlib.com/theme/tailor/assets/img/gallery/instra1.png",
      alt: "Business look",
    },
    {
      src: "https://preview.colorlib.com/theme/tailor/assets/img/gallery/instra2.png",
      alt: "Creative workspace",
    }
  ];

  return (
    <section className="py-20 bg-white text-center font-inter px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-6">
          Follow Us on Instagram
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Discover our latest collections and behind-the-scenes moments.
          <br />
          Join our fashion community today.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group w-full max-w-[450px] aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
                <div className="relative z-10 bg-white/90 p-4 rounded-full text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 transform group-hover:scale-110">
                  <FaInstagram className="text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;