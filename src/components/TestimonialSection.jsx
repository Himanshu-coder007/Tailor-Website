import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    text: "Brook presents your services with flexible, convenient and compose layouts. You can select your favorite layouts & elements for cularts with unlimited customization possibilities. Pixel-perfect replication of the designers' intended contents your use.",
    name: "Robert Brown",
    role: "Creative designer at Celerio",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Our experience has been nothing short of amazing. Great flexibility and clean, modern layout. Truly pixel-perfect components with high-level customization options.",
    name: "Jane Smith",
    role: "Lead UX Designer at OpenCode",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Exceptional service and attention to detail. The team delivered beyond our expectations with a perfect blend of creativity and functionality.",
    name: "Michael Johnson",
    role: "Product Manager at TechSolutions",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "The quality of work exceeded all our expectations. Every detail was carefully considered and implemented to perfection. We couldn't be happier with the results.",
    name: "Sarah Williams",
    role: "Marketing Director at BrandVision",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Working with this team transformed our digital presence. Their innovative approach and technical expertise delivered solutions that perfectly matched our vision.",
    name: "David Lee",
    role: "CTO at Innovatech",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12 text-indigo-400 opacity-20"
  >
    <path
      fillRule="evenodd"
      d="M3.792 10.5c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496C1.518 10.91.926 10.5.244 10.5H0V12h.244c.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217 1.55 1.55 0 00-.347.424A1.55 1.55 0 000 17.244V18.5h.244c.682 0 1.274-.41 1.53-1.002l.162-.496c.054-.165.114-.327.162-.496-.048-.169-.108-.331-.162-.496C1.518 15.09.926 14.68.244 14.68H0v1.564c.168-.082.354-.127.548-.127.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217A1.55 1.55 0 000 21.756V24h12v-2.244c0-.682-.41-1.274-1.002-1.53a9.03 9.03 0 00-.496-.162 9.03 9.03 0 00.496-.162c.592-.256 1.002-.848 1.002-1.53V12h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H3.792zM24 10.5h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H18V12h.244c.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217 1.55 1.55 0 00-.347.424A1.55 1.55 0 0016 17.244V18.5h.244c.682 0 1.274-.41 1.53-1.002l.162-.496c.054-.165.114-.327.162-.496-.048-.169-.108-.331-.162-.496.592-.256 1.002-.848 1.002-1.53V12h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H12V24h12V10.5z"
      clipRule="evenodd"
    />
  </svg>
);

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const delay = 6000; // 6 seconds between transitions

  const handlePrev = () => {
    setTransitionDirection("prev");
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), delay * 2);
  };

  const handleNext = () => {
    setTransitionDirection("next");
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), delay * 2);
  };

  const goToTestimonial = (i) => {
    setTransitionDirection(i > index ? "next" : "prev");
    setIndex(i);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), delay * 2);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(handleNext, delay);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [index, autoPlay]);

  const { text, name, role, image } = testimonials[index];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have transformed their digital presence with our services
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <QuoteIcon />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-10 md:p-16">
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  transitionDirection === "next" 
                    ? "animate-fadeInRight" 
                    : "animate-fadeInLeft"
                }`}
              >
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 text-center italic font-medium">
                  "{text}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <img
                      src={image}
                      alt={name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-indigo-500 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900">{name}</h4>
                    <p className="text-indigo-600">{role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === i
                        ? "bg-indigo-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white shadow hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft className="text-xl text-gray-600" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white shadow hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight className="text-xl text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add some global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.5s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;