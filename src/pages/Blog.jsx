import { motion } from "framer-motion";
import { FiCalendar, FiUser, FiHeart, FiMessageSquare, FiArrowRight, FiScissors, FiFeather } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

// Unique high-quality images
const featuredPostImage = "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80";
const artisanImage = "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80";
const fabricCloseup = "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const heritageImage = "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const styleGuideImage = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
const clientStoryImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

// Unique content categories
const categories = [
  { name: "Master Craftsmanship", count: 8, icon: <FiScissors /> },
  { name: "Fabric Alchemy", count: 6, icon: <FiFeather /> },
  { name: "Sartorial History", count: 4, icon: <FiCalendar /> },
  { name: "Client Chronicles", count: 5, icon: <FiUser /> },
  { name: "Style Almanac", count: 7, icon: <FiHeart /> },
];

// Luxury fabric tags
const tags = [
  "Cashmere", "Vicuña", "Silk Mohair", "Super 150s", "Linen-Silk", 
  "Handwoven", "English Tweed", "Italian Wool", "Japanese Denim", "Egyptian Cotton"
];

// Recent posts with unique titles
const recentPosts = [
  { title: "The Secret Stitches of Savile Row", date: "June 15, 2023" },
  { title: "Vicuña: The Golden Fleece of the Andes", date: "May 28, 2023" },
  { title: "A Tailor's Notebook: 100 Measurements Explained", date: "April 30, 2023" },
  { title: "The Royal Warrant: Our Heritage of Excellence", date: "March 22, 2023" },
];

const BlogPage = () => {
  return (
    <div className="font-serif bg-white text-gray-800">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.img
          src={featuredPostImage}
          alt="Bespoke tailoring workshop"
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
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 mx-auto mb-8"
          >
            <svg viewBox="0 0 300 300" className="w-full h-full">
              <path
                id="circlePath"
                fill="none"
                d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
              />
              <text
                fill="#caa892"
                fontSize="22"
                fontFamily="serif"
                fontWeight="bold"
              >
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • BESPOKE JOURNAL • CRAFTMANSHIP • ELEGANCE •
                </textPath>
              </text>
            </svg>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            The Atelier Chronicles
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-light">
            Where threads of heritage weave stories of timeless elegance
          </p>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
            Begin Reading
          </button>
        </motion.div>
      </section>

      {/* Featured Article - Interactive */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.article 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 items-center mb-24"
          >
            <div className="w-full lg:w-1/2 relative group">
              <img
                src={artisanImage}
                alt="Master tailor at work"
                className="w-full h-auto object-cover rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#caa892] text-white p-4 rounded-lg shadow-lg hidden lg:block">
                <FiScissors className="text-2xl" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-2 font-medium">
                  <FiUser className="text-[#caa892]" />
                  By Giovanni Rossi, Master Tailor
                </span>
                <span className="flex items-center gap-2">
                  <FiCalendar className="text-[#caa892]" />
                  June 18, 2023
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="border-b-4 border-[#caa892]">The 200-Hour Suit: Anatomy of</span> a Bespoke Masterpiece
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In our Milan atelier, time stands still as we craft what many consider the pinnacle of sartorial 
                achievement. This exclusive look behind the curtain reveals why a true bespoke suit requires 
                no fewer than 200 hours of meticulous handwork by our artisans.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FiScissors className="text-[#caa892]" /> 187 Stitches
                  </h4>
                  <p className="text-sm text-gray-600">Per inch in the lapel roll</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FiCalendar className="text-[#caa892]" /> 6 Weeks
                  </h4>
                  <p className="text-sm text-gray-600">Minimum creation time</p>
                </div>
              </div>
              
              <button className="bg-[#caa892] hover:bg-[#b8937a] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2">
                Read Full Masterclass <FiArrowRight />
              </button>
            </div>
          </motion.article>

          {/* Special Series: Fabric Alchemy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="text-[#caa892] font-medium tracking-widest text-sm">SPECIAL SERIES</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Fabric Alchemy</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Our journey through the world's most exclusive textiles
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img src={fabricCloseup} alt="Luxury fabrics" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <span className="text-xs text-[#caa892] font-medium">EPISODE 1</span>
                  <h3 className="text-xl font-bold my-2">Vicuña: The Fiber of Gods</h3>
                  <p className="text-gray-600 mb-4">
                    Exploring the rarest natural fiber, harvested from wild Andean vicuñas.
                  </p>
                  <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center gap-1 text-sm">
                    Watch Episode <FiArrowRight />
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img src={heritageImage} alt="Tailoring heritage" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <span className="text-xs text-[#caa892] font-medium">EPISODE 2</span>
                  <h3 className="text-xl font-bold my-2">The Silk Roads Revisited</h3>
                  <p className="text-gray-600 mb-4">
                    How ancient trade routes shaped modern luxury textiles.
                  </p>
                  <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center gap-1 text-sm">
                    Watch Episode <FiArrowRight />
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img src={styleGuideImage} alt="Style guide" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <span className="text-xs text-[#caa892] font-medium">EPISODE 3</span>
                  <h3 className="text-xl font-bold my-2">Moonlight Harvest</h3>
                  <p className="text-gray-600 mb-4">
                    The secret Egyptian cotton picked only by moonlight.
                  </p>
                  <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center gap-1 text-sm">
                    Watch Episode <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Articles Column */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">Latest Chronicles</h2>
              
              {/* Article 1 */}
              <motion.article
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 pb-16 border-b border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3">
                    <img 
                      src={clientStoryImage} 
                      alt="Client story" 
                      className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-[#caa892] text-white px-3 py-1 rounded-full text-xs">CLIENT STORY</span>
                      <span>June 12, 2023</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">The Heirloom Project: Restoring a 1920s Morning Coat</h3>
                    <p className="text-gray-600 mb-4">
                      When James brought us his great-grandfather's moth-eaten morning coat, our restoration team 
                      faced their greatest challenge yet. This is the story of how we brought history back to life.
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center gap-1">
                        Continue Reading <FiArrowRight />
                      </button>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <FiHeart className="text-[#caa892]" /> 42 Appreciations
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Article 2 */}
              <motion.article
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-16 pb-16 border-b border-gray-100"
              >
                <div className="mb-6">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={styleGuideImage} 
                      alt="Style guide" 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-[#caa892] text-white px-3 py-1 rounded-full text-xs">STYLE GUIDE</span>
                  <span>May 28, 2023</span>
                  <span className="flex items-center gap-1">
                    <FiMessageSquare className="text-[#caa892]" /> 14 Comments
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">The Silent Language of Cufflinks</h3>
                <p className="text-gray-600 mb-4">
                  From antique intaglios to modern minimalist designs, cufflinks speak volumes about the wearer. 
                  Our style director deciphers this subtle sartorial code and shares how to build a meaningful collection.
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center gap-1">
                        Continue Reading <FiArrowRight />
                      </button>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <FiHeart className="text-[#caa892]" /> 36 Appreciations
                      </span>
                </div>
              </motion.article>

              {/* Article 3 */}
              <motion.article
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3">
                    <img 
                      src={heritageImage} 
                      alt="Tailoring heritage" 
                      className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-[#caa892] text-white px-3 py-1 rounded-full text-xs">HISTORY</span>
                      <span>May 15, 2023</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">The Lost Art of the Waistcoat: A Revival</h3>
                    <p className="text-gray-600 mb-4">
                      Once considered essential, the waistcoat faded into obscurity. Now, it's making a triumphant 
                      return. Discover how modern gentlemen are reinventing this classic piece with contemporary flair.
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center gap-1">
                        Continue Reading <FiArrowRight />
                      </button>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <FiHeart className="text-[#caa892]" /> 28 Appreciations
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center mt-12"
              >
                <nav className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#caa892] text-white">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700">
                    3
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700">
                    8
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700">
                    <FiArrowRight />
                  </button>
                </nav>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              {/* About The Atelier Chronicles */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#f8f4f0] p-8 rounded-xl mb-8 border border-[#e8d9c5]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FiFeather className="text-[#caa892]" /> About The Chronicles
                </h3>
                <p className="text-gray-600 mb-4">
                  The Atelier Chronicles is our curated collection of sartorial wisdom, client stories, 
                  and behind-the-scenes glimpses into the world of haute couture tailoring.
                </p>
                <button className="text-[#caa892] hover:text-[#b8937a] font-medium flex items-center gap-1 text-sm">
                  Our Story <FiArrowRight />
                </button>
              </motion.div>

              {/* Categories with Icons */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f8f4f0] p-8 rounded-xl mb-8 border border-[#e8d9c5]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chronicle Categories</h3>
                <ul className="space-y-4">
                  {categories.map((category, index) => (
                    <li key={index} className="flex justify-between items-center pb-2 border-b border-[#e8d9c5]">
                      <a href="#" className="text-gray-700 hover:text-[#caa892] transition-colors duration-300 flex items-center gap-2">
                        <span className="text-[#caa892]">{category.icon}</span>
                        {category.name}
                      </a>
                      <span className="bg-white text-[#caa892] text-xs px-2 py-1 rounded-full border border-[#e8d9c5]">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Fabric Encyclopedia */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#f8f4f0] p-8 rounded-xl mb-8 border border-[#e8d9c5]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fabric Encyclopedia</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full hover:bg-[#caa892] hover:text-white transition-colors duration-300 border border-[#e8d9c5]"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Video Series */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#f8f4f0] p-8 rounded-xl mb-8 border border-[#e8d9c5]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Video Chronicles</h3>
                <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <FaYoutube className="text-4xl text-[#caa892]" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Masterclass: Hand-Stitched Buttonholes</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Watch our head tailor demonstrate this vanishing art form
                </p>
                <button className="w-full bg-[#caa892] hover:bg-[#b8937a] text-white py-2 rounded-full text-sm font-medium transition-all duration-300">
                  View All Videos
                </button>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#f8f4f0] p-8 rounded-xl border border-[#e8d9c5]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Join The Conversation</h3>
                <p className="text-gray-600 mb-4">
                  Follow our daily atelier stories and sartorial insights
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#3b5998] text-white rounded-full hover:bg-opacity-90 transition-all duration-300">
                    <FaFacebook className="text-lg" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1da1f2] text-white rounded-full hover:bg-opacity-90 transition-all duration-300">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full hover:opacity-90 transition-all duration-300">
                    <FaInstagram className="text-lg" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#e60023] text-white rounded-full hover:bg-opacity-90 transition-all duration-300">
                    <FaPinterest className="text-lg" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Newsletter */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="text-[#caa892] font-medium tracking-widest text-sm">EXCLUSIVE ACCESS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                The Private Edition
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Subscribe to receive our premium content, including rare fabric previews and invitation-only events.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#caa892] focus:border-transparent"
              />
              <button className="bg-[#caa892] hover:bg-[#b8937a] text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;