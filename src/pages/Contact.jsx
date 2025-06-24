import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight, FiX } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { useState } from "react";

// High-quality images
const contactHero = "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80";
const atelierImage = "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80";
const mapImage = "https://preview.colorlib.com/theme/tailor/assets/img/gallery/map.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="font-serif bg-white text-gray-800">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-md w-full p-8 relative"
          >
            <button 
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX className="text-2xl" />
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your consultation request has been successfully submitted. Our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-[#caa892] hover:bg-[#b8937a] text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <motion.img
          src={contactHero}
          alt="Tailoring workshop"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-20 text-center px-4 text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Visit Our Atelier
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-light">
            Where craftsmanship meets personal service
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {/* Contact Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#f8f4f0] p-8 rounded-xl border border-[#e8d9c5] text-center"
            >
              <div className="w-16 h-16 bg-[#caa892] rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMapPin className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Atelier</h3>
              <p className="text-gray-600 mb-4">
                Via Monte Napoleone, 8<br />
                20121 Milano, Italy
              </p>
              <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center justify-center gap-1">
                Get Directions <FiArrowRight />
              </button>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#f8f4f0] p-8 rounded-xl border border-[#e8d9c5] text-center"
            >
              <div className="w-16 h-16 bg-[#caa892] rounded-full flex items-center justify-center mx-auto mb-6">
                <FiPhone className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                +39 02 123 4567<br />
                appointments@atelier.com
              </p>
              <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center justify-center gap-1">
                Call Now <FiArrowRight />
              </button>
            </motion.div>

            {/* Contact Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#f8f4f0] p-8 rounded-xl border border-[#e8d9c5] text-center"
            >
              <div className="w-16 h-16 bg-[#caa892] rounded-full flex items-center justify-center mx-auto mb-6">
                <FiClock className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
              <p className="text-gray-600 mb-4">
                Monday - Friday: 9AM - 6PM<br />
                Saturday: 10AM - 4PM<br />
                Sunday: Closed
              </p>
              <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center justify-center gap-1">
                Book Appointment <FiArrowRight />
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form + Atelier Image */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-[#f8f4f0] p-8 rounded-xl border border-[#e8d9c5]">
                <h2 className="text-3xl font-bold mb-6">Personal Consultation</h2>
                <p className="text-gray-600 mb-8">
                  Begin your bespoke journey by scheduling a consultation with one of our master tailors.
                </p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caa892] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caa892] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caa892] focus:border-transparent"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caa892] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="bespoke">Bespoke Suit</option>
                      <option value="mtm">Made-to-Measure</option>
                      <option value="shirts">Dress Shirts</option>
                      <option value="alterations">Alterations</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caa892] focus:border-transparent"
                      placeholder="Tell us about your sartorial needs..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#caa892] hover:bg-[#b8937a] text-white py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Request Consultation"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={atelierImage}
                  alt="Atelier interior"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Our Milan Atelier</h3>
                    <p className="text-white/90 mb-4">
                      Step into our serene workspace where every detail reflects our commitment to craftsmanship.
                    </p>
                    <button className="text-white border border-white hover:bg-white hover:text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300">
                      Virtual Tour
                    </button>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-xl relative">
                <img
                  src={mapImage}
                  alt="Map location"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center pl-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Find Us</h3>
                    <p className="text-white/90 text-sm mb-3">
                      Located in Milan's fashion district
                    </p>
                    <div className="flex gap-3">
                      <button className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1">
                        <FiMapPin /> Directions
                      </button>
                      <button className="bg-transparent border border-white text-white hover:bg-white/10 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1">
                        <FiArrowRight /> Nearby Parking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Banner */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience <span className="text-[#caa892]">Bespoke</span> Excellence
              </h2>
              <p className="text-lg text-gray-300">
                Schedule a private consultation with our master tailors to begin your sartorial journey.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#caa892] hover:bg-[#b8937a] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                Book an Appointment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Connect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Follow our daily atelier stories and sartorial insights
            </p>
            
            <div className="flex justify-center gap-6">
              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="w-14 h-14 flex items-center justify-center bg-[#3b5998] text-white rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                <FaFacebook className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="w-14 h-14 flex items-center justify-center bg-[#1da1f2] text-white rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                <FaTwitter className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                <FaInstagram className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="w-14 h-14 flex items-center justify-center bg-[#e60023] text-white rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                <FaPinterest className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;