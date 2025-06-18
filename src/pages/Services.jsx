import { motion } from 'framer-motion';

const Services = () => {
  // Hero background image
  const heroBg = "https://tailorzclothing.com/wp-content/uploads/2024/08/A-20747-1-400x400.png";

  // Services data - expanded with more services
  const services = [
    {
      id: 1,
      title: 'Bespoke Tailoring',
      description: 'Each garment is crafted from scratch to your exact measurements and style preferences, using only the finest materials.',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
      features: ['100% hand-stitched', 'Unlimited fabric choices', '3+ fitting sessions', 'Full customization']
    },
    {
      id: 2,
      title: 'Made-to-Measure',
      description: 'Our signature service that adapts existing patterns to your body for a perfect fit with fewer fittings required.',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Personalized patterns', 'Premium fabrics', '2 fitting sessions', 'Faster turnaround']
    },
    {
      id: 3,
      title: 'Alterations & Restoration',
      description: 'Breathe new life into your existing wardrobe with our expert alteration and vintage restoration services.',
      image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_400/https://alterdry.com/wp-content/uploads/2023/11/1.png',
      features: ['Precision adjustments', 'Vintage garment care', 'Fabric matching', 'Modernization updates']
    },
    {
      id: 4,
      title: 'Bridal & Formal Wear',
      description: 'Exquisite custom wedding attire and formal wear designed to make your special occasions unforgettable.',
      image: 'https://assets.vogue.in/photos/64411b0713d0fd2111a35cf9/2:3/w_1920,c_limit/INDIAN-WEDIDNG-DRESSES-voguebus-story.jpg',
      features: ['Bridal gowns & suits', 'Evening wear', 'Matching ensembles', 'Special occasion designs']
    },
    {
      id: 5,
      title: 'Corporate Wardrobing',
      description: 'Complete business attire solutions for executives and professionals who demand the perfect look.',
      image: 'https://media.istockphoto.com/id/1434737732/photo/partnership-arms-crossed-and-teamwork-with-two-business-people-standing-together-in-corporate.jpg?s=612x612&w=0&k=20&c=CG3Ke9UAf8UERf8yhGMb4QLSJcUMab7Ry9Wo5KP86Qc=',
      features: ['Business suits', 'Dress shirts', 'Professional separates', 'Bulk discounts']
    },
    {
      id: 6,
      title: 'Leather & Outerwear',
      description: 'Custom leather jackets, coats, and outerwear crafted for both style and durability in any climate.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/363037076/XZ/OL/US/40445960/5290288fc677dcc2c7098f0f030c5e65-500x500.jpg',
      features: ['Premium leathers', 'Weatherproof fabrics', 'Lining options', 'Functional detailing']
    }
  ];

  // Why choose us features
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#caa892">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Precision Craftsmanship',
      description: 'Every stitch is placed with intention by our master tailors with 20+ years of experience.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#caa892">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Luxury Materials',
      description: 'We source only the finest wools, silks, and cottons from renowned mills worldwide.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#caa892">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Timeless Designs',
      description: 'Our patterns balance contemporary style with enduring elegance that transcends trends.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#caa892">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Lifetime Guarantee',
      description: 'We stand behind our work with free adjustments for the life of your garment.'
    }
  ];

  // Fabric showcase
  const fabrics = [
    {
      name: 'Super 150s Wool',
      origin: 'Italy',
      description: 'Ultra-fine merino wool for year-round comfort and drape',
      image: 'https://www.linenstudio.in/cdn/shop/files/VERCELLIAC001-S.N-01_2-Photoroom.jpg?v=1733668493&width=1946'
    },
    {
      name: 'Egyptian Cotton',
      origin: 'Egypt',
      description: 'The world\'s finest long-staple cotton for breathable luxury',
      image: 'https://cdn.shopify.com/s/files/1/0497/1809/files/Cotton-plant-field.jpg?v=1588251695'
    },
    {
      name: 'Silk Cashmere',
      origin: 'Scotland',
      description: 'A rare blend offering unparalleled softness and warmth',
      image: 'https://s.alicdn.com/@sc04/kf/A7440735dad2a4d4382e697803de288c8R.png_300x300.jpg'
    },
    {
      name: 'Japanese Denim',
      origin: 'Japan',
      description: 'Hand-loomed selvedge denim with exceptional durability',
      image: 'https://media.zenobuilder.com/upload/sp-848/86814413.png'
    },
    {
      name: 'Linen Silk',
      origin: 'Belgium',
      description: 'Lightweight blend perfect for summer elegance',
      image: 'https://fabricbysinghanias.com/cdn/shop/products/237317-1.jpg?v=1749295509'
    }
  ];

  // Process timeline
  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We discuss your style preferences, fabric choices, and garment purpose',
      duration: '1 hour'
    },
    {
      step: 2,
      title: 'Precision Measurement',
      description: '20+ body measurements taken using traditional and digital methods',
      duration: '45 minutes'
    },
    {
      step: 3,
      title: 'Fabric Selection',
      description: 'Choose from our curated collection of luxury fabrics',
      duration: '1 hour'
    },
    {
      step: 4,
      title: 'First Fitting',
      description: 'Try on the garment in muslin for initial adjustments',
      duration: '30 minutes'
    },
    {
      step: 5,
      title: 'Final Fitting',
      description: 'Perfecting the details before final stitching',
      duration: '30 minutes'
    },
    {
      step: 6,
      title: 'Delivery',
      description: 'Your custom garment is ready for collection',
      duration: ''
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "My bespoke suit fits like a second skin. The attention to detail is extraordinary - I've never worn anything so comfortable and sharp-looking.",
      author: "James Wilson",
      role: "CEO, Wilson & Co"
    },
    {
      quote: "After years of buying off-the-rack, I finally understand what true quality means. The difference is night and day.",
      author: "Sarah Chen",
      role: "Fashion Editor"
    },
    {
      quote: "They transformed my grandfather's old suit into a modern masterpiece while preserving its sentimental value. Simply magical.",
      author: "Michael Rodriguez",
      role: "Historian"
    },
    {
      quote: "The bridal gown they created for me was beyond anything I could have imagined. Every detail was perfection.",
      author: "Emily Johnson",
      role: "Bride"
    },
    {
      quote: "Our entire executive team now wears their custom suits. The professionalism it projects is invaluable.",
      author: "David Kim",
      role: "Managing Director"
    },
    {
      quote: "I've had my leather jacket for 5 years and it still looks brand new. The craftsmanship is unbelievable.",
      author: "Alex Morgan",
      role: "Fashion Designer"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${heroBg})`,
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center mb-8"
            >
              <svg viewBox="0 0 300 300" className="w-full h-full">
                <path
                  id="circlePath"
                  fill="none"
                  d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                />
                <text fill="#caa892" fontSize="22" fontFamily="serif" fontWeight="bold">
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    • HANDCRAFTED EXCELLENCE • PRECISION TAILORING • LUXURY FABRICS •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4 font-serif"
            >
              Crafting Perfection
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl max-w-2xl mb-8"
            >
              Bespoke tailoring that tells your story
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <button className="bg-[#caa892] hover:bg-[#b8977d] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mr-4">
                Book Consultation
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-10 h-10 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#caa892] font-semibold tracking-wider">OUR SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              Tailored <span className="text-[#caa892]">Excellence</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final fitting, we offer comprehensive tailoring services designed to create garments that fit perfectly and reflect your personal style.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden h-80">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                <div className="p-8 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#caa892] text-white border-2 border-[#caa892] rounded-full w-8 h-8 text-sm flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:text-[#caa892]">
                      {service.id}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#caa892] transition duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-800 transition duration-300 text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-[#caa892] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-6 text-[#caa892] font-semibold flex items-center group">
                    Learn more
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f9f5f0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#caa892] font-semibold tracking-wider">OUR PROCESS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              The Art of <span className="text-[#caa892]">Tailoring</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Each garment is created through a meticulous process that ensures perfection at every stage.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#caa892] transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 w-6 h-6 bg-[#caa892] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 p-6 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <span className="text-[#caa892] font-bold">Step {step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-800 mt-2">{step.title}</h3>
                      <p className="text-gray-600 mt-2">{step.description}</p>
                      {step.duration && (
                        <div className="mt-4 flex items-center justify-end">
                          <svg className="h-5 w-5 text-[#caa892] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-500">{step.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Image placeholder - would replace with actual images */}
                  <div className="hidden md:flex md:w-2/12 justify-center items-center">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-[#caa892] flex items-center justify-center text-2xl font-bold text-[#caa892]">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Empty space to balance layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#caa892] font-semibold tracking-wider">MATERIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              Luxury <span className="text-[#caa892]">Fabrics</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We source only the finest materials from around the world to ensure your garments look and feel exceptional.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {fabrics.map((fabric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="overflow-hidden h-80">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition duration-500">
                    <span className="text-[#caa892] text-sm font-medium">{fabric.origin}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{fabric.name}</h3>
                  </div>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition duration-500 delay-100">
                    <p className="text-white/90">{fabric.description}</p>
                    <button className="mt-4 text-white border border-white hover:bg-white hover:text-gray-900 font-medium py-2 px-4 rounded-full transition duration-300">
                      View Options
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f9f5f0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#caa892] font-semibold tracking-wider">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              The <span className="text-[#caa892]">Atelier</span> Difference
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              What sets our tailoring apart is a combination of traditional craftsmanship and modern innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#caa892] font-semibold tracking-wider">CLIENT STORIES</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              What Our Clients <span className="text-[#caa892]">Say</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1e293b] p-8 rounded-xl"
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#caa892]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-[#caa892] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#caa892] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Experience <span className="text-[#0f172a]">Bespoke Luxury</span>?
            </h2>
            <p className="text-xl mb-10">
              Schedule a consultation with our master tailor and begin your journey to perfectly crafted garments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book an Appointment
              </button>
              <button className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Visit Our Atelier
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;