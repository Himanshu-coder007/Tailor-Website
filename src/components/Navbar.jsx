import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Left aligned */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-[#8B5E4F] text-3xl tracking-wide hover:scale-105 transition-transform duration-300">
                Tailor
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered with Visit Us on right */}
          <div className="hidden md:flex items-center flex-1">
            {/* Centered Navigation Links */}
            <div className="flex justify-center flex-1">
              <div className="flex space-x-0">
                <Link
                  to="/"
                  className={`py-4 px-4 font-medium transition-all duration-300 ${
                    isActive('/')
                      ? 'text-[#8B5E4F] border-b-2 border-[#8B5E4F]'
                      : 'text-gray-700 hover:text-[#8B5E4F]'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`py-4 px-4 font-medium transition-all duration-300 ${
                    isActive('/about')
                      ? 'text-[#8B5E4F] border-b-2 border-[#8B5E4F]'
                      : 'text-gray-700 hover:text-[#8B5E4F]'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className={`py-4 px-4 font-medium transition-all duration-300 ${
                    isActive('/services')
                      ? 'text-[#8B5E4F] border-b-2 border-[#8B5E4F]'
                      : 'text-gray-700 hover:text-[#8B5E4F]'
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/blog"
                  className={`py-4 px-4 font-medium transition-all duration-300 ${
                    isActive('/blog')
                      ? 'text-[#8B5E4F] border-b-2 border-[#8B5E4F]'
                      : 'text-gray-700 hover:text-[#8B5E4F]'
                  }`}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className={`py-4 px-4 font-medium transition-all duration-300 ${
                    isActive('/contact')
                      ? 'text-[#8B5E4F] border-b-2 border-[#8B5E4F]'
                      : 'text-gray-700 hover:text-[#8B5E4F]'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Visit Us Button - Right aligned */}
            <div className="ml-auto">
              <Link
                to="/visit-us"
                className={`py-4 px-4 font-medium transition-all duration-300 ${
                  isActive('/visit-us')
                    ? 'bg-[#8B6E61] text-white'
                    : 'bg-[#A08474] text-white hover:bg-[#8B6E61]'
                }`}
              >
                VISIT US
              </Link>
            </div>
          </div>

          {/* Mobile menu button - Right aligned */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#8B5E4F] focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transform transition duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-2 pb-3 space-y-1 px-2">
          <Link
            to="/"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
              isActive('/')
                ? 'text-[#8B5E4F] bg-gray-100'
                : 'text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
              isActive('/about')
                ? 'text-[#8B5E4F] bg-gray-100'
                : 'text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-50'
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
              isActive('/services')
                ? 'text-[#8B5E4F] bg-gray-100'
                : 'text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-50'
            }`}
          >
            Services
          </Link>
          <Link
            to="/blog"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
              isActive('/blog')
                ? 'text-[#8B5E4F] bg-gray-100'
                : 'text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-50'
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
              isActive('/contact')
                ? 'text-[#8B5E4F] bg-gray-100'
                : 'text-gray-700 hover:text-[#8B5E4F] hover:bg-gray-50'
            }`}
          >
            Contact
          </Link>
          <Link
            to="/visit-us"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 text-base font-medium transition duration-300 ${
              isActive('/visit-us')
                ? 'bg-[#8B6E61] text-white'
                : 'bg-[#A08474] text-white hover:bg-[#8B6E61]'
            }`}
          >
            VISIT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;