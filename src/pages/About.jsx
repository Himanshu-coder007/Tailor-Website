import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import {
  FiScissors,
  FiFeather,
  FiAward,
  FiCheckCircle,
  FiUsers,
  FiCalendar,
  FiHeart,
} from "react-icons/fi";

// Replace these with your actual images
const heroImage =
  "https://needlesnthimbles.com/wp-content/uploads/2024/03/15837.jpg";
const tailorWorking =
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
const fabricSelection =
  "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
const finishedSuit =
  "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80";
const workshopImage =
  "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80";
const instaPost1 =
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const instaPost2 =
  "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
const clientImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

const AboutUsPage = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src={heroImage}
          alt="Master tailor at work"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
                fontSize="25"
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • BESPOKE TAILORING • LUXURY FABRICS • PERFECT FIT •
                </textPath>
              </text>
            </svg>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Crafting Sartorial Excellence
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Where tradition meets innovation in every stitch since 1985
          </p>
          <button className="bg-[#caa892] hover:bg-[#b8937a] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
            Book a Consultation
          </button>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <img
                src={tailorWorking}
                alt="Tailor measuring fabric"
                className="w-full rounded-xl shadow-xl aspect-[3/4] object-cover"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                src={fabricSelection}
                alt="Fabric selection"
                className="absolute -bottom-10 -right-10 w-1/2 h-auto border-4 border-white rounded-xl shadow-xl hidden md:block"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our <span className="text-[#caa892]">Tailoring</span> Heritage
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1985 by master tailor Antonio Moretti in a small
                Milanese workshop, our atelier has grown into an internationally
                recognized tailoring house while maintaining our commitment to
                traditional craftsmanship. What began as a one-man operation has
                flourished into a team of 12 master tailors serving clients
                worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Each garment tells a story of meticulous attention to detail and
                passion for sartorial excellence. Our master tailors combine
                decades of experience with innovative techniques to create
                clothing that not only fits perfectly but stands the test of
                time. We source only the finest fabrics from renowned mills in
                Italy, England, and Japan, ensuring every piece meets our
                exacting standards.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <FiAward className="text-2xl text-[#caa892] mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">35+ Years</h4>
                    <p className="text-gray-600 text-sm">
                      Of tailoring excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiUsers className="text-2xl text-[#caa892] mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      12 Master Tailors
                    </h4>
                    <p className="text-gray-600 text-sm">Dedicated artisans</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-2xl text-[#caa892] mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">10,000+</h4>
                    <p className="text-gray-600 text-sm">
                      Satisfied clients worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiCalendar className="text-2xl text-[#caa892] mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">200+ Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Average time per bespoke suit
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-[#caa892] hover:bg-[#b8937a] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Meet Our Tailors
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#caa892]">Tailoring</span> Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every stitch we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Without Compromise",
                description:
                  "We believe true luxury lies in uncompromising quality. From the selection of fabrics to the final pressing, every step in our process meets the highest standards of craftsmanship. Our tailors won't let a garment leave the workshop until it's perfect.",
                icon: <FiAward className="text-3xl text-white" />,
              },
              {
                title: "Sustainability Through Longevity",
                description:
                  "In an era of fast fashion, we create garments designed to last decades, not seasons. By focusing on timeless designs and durable construction, we reduce waste and promote sustainable consumption.",
                icon: <FiHeart className="text-3xl text-white" />,
              },
              {
                title: "Personal Connection",
                description:
                  "Tailoring is about understanding people, not just measurements. We take time to learn about your lifestyle, preferences, and needs to create clothing that truly reflects who you are.",
                icon: <FiUsers className="text-3xl text-white" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#caa892] bg-opacity-20 rounded-full flex items-center justify-center text-[#caa892] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-[#caa892]">Art</span> of Bespoke
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our meticulous process ensures perfection in every garment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiScissors className="text-3xl text-white" />,
                title: "Initial Consultation",
                description:
                  "A 60-minute discussion where we learn about your style preferences, lifestyle needs, and sartorial goals. We'll review fabric swatches and discuss design options.",
                details: [
                  "Style assessment",
                  "Fabric introduction",
                  "Design consultation",
                ],
              },
              {
                icon: <FiFeather className="text-3xl text-white" />,
                title: "Precision Measurements",
                description:
                  "Using both traditional and modern techniques, we take 25+ measurements to capture your unique proportions and posture characteristics.",
                details: [
                  "25+ precise measurements",
                  "Posture analysis",
                  "Movement assessment",
                ],
              },
              {
                icon: <FiAward className="text-3xl text-white" />,
                title: "First Fitting",
                description:
                  "After 4-6 weeks, you'll try on the basted garment (temporary stitching) so we can make precise adjustments before final construction.",
                details: [
                  "Basted garment fitting",
                  "Detailed adjustments",
                  "Final fabric cutting",
                ],
              },
              {
                icon: <FiCheckCircle className="text-3xl text-white" />,
                title: "Second Fitting",
                description:
                  "The nearly complete garment is evaluated for final refinements. We check drape, comfort, and all functional elements.",
                details: [
                  "Construction review",
                  "Final adjustments",
                  "Buttonhole placement",
                ],
              },
              {
                icon: <FiUsers className="text-3xl text-white" />,
                title: "Final Fitting",
                description:
                  "Your completed garment is presented for final approval. We ensure perfect fit and comfort before delivery.",
                details: [
                  "Final quality check",
                  "Care instructions",
                  "Delivery",
                ],
              },
              {
                icon: <FiCalendar className="text-3xl text-white" />,
                title: "Follow-Up",
                description:
                  "We schedule a check-in after you've worn the garment to address any minor adjustments needed after real-world wear.",
                details: [
                  "Post-wear evaluation",
                  "Minor adjustments",
                  "Future planning",
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#caa892] bg-opacity-20 rounded-full flex items-center justify-center text-[#caa892] mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <FiCheckCircle className="text-[#caa892] mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Story */}
      <section className="py-20 bg-[#f8f4f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                A <span className="text-[#caa892]">Client's</span> Journey
              </h2>
              <blockquote className="text-lg text-gray-700 mb-6 italic pl-6 border-l-4 border-[#caa892]">
                "When I first visited Tailor House, I was skeptical about
                bespoke clothing. But after experiencing the meticulous
                attention to detail and seeing how the team transformed my
                awkward proportions into a perfect fit, I'll never go back to
                off-the-rack again."
              </blockquote>
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={clientImage}
                  alt="James Wilson"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">James Wilson</h4>
                  <p className="text-gray-600">Client since 2015</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                James came to us frustrated after years of struggling to find
                suits that fit his athletic build properly. Our tailors
                developed a custom pattern that accommodated his broad shoulders
                and tapered waist, creating a silhouette that made him look and
                feel confident.
              </p>
              <button className="bg-[#caa892] hover:bg-[#b8937a] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Read More Stories
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <img
                src={workshopImage}
                alt="Tailor workshop"
                className="w-full rounded-xl shadow-xl aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <h4 className="font-bold text-gray-900 mb-2">Our Workshop</h4>
                <p className="text-gray-600 text-sm">
                  Where magic happens since 1985
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Master Tailors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-[#caa892]">Master Tailors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The skilled artisans behind your perfect fit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Giovanni Rossi",
                role: "Head Tailor",
                experience: "15 years",
                specialty: "Formal Wear",
                bio: "Trained in Naples under legendary tailor Eduardo de Luca. Specializes in structured silhouettes and formal wear.",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
              },
              {
                name: "Marco Bianchi",
                role: "Senior Tailor",
                experience: "10 years",
                specialty: "Casual Wear",
                bio: "Expert in unstructured jackets and casual tailoring. Believes comfort should never compromise style.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Luca Ferrari",
                role: "Master Cutter",
                experience: "12 years",
                specialty: "Pattern Making",
                bio: "Our pattern genius who can translate any design into a perfect three-dimensional form.",
                image: "https://randomuser.me/api/portraits/men/68.jpg",
              },
              {
                name: "Elena Romano",
                role: "Senior Seamstress",
                experience: "10 years",
                specialty: "Finishing",
                bio: "Hand-sews all buttonholes and does final pressing. Her attention to detail is unmatched.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
            ].map((tailor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={tailor.image}
                    alt={tailor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{tailor.bio}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {tailor.name}
                  </h3>
                  <p className="text-[#caa892] font-medium mb-3">
                    {tailor.role}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <FiAward className="text-[#caa892]" />
                    <span>{tailor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="text-[#caa892]" />
                    <span>Specializes in {tailor.specialty}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-[#caa892] text-[#caa892] hover:bg-[#caa892] hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer">
              View Full Team
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Our <span className="text-[#caa892]">Craft</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Behind-the-scenes of our tailoring process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: instaPost1,
                alt: "Bespoke suit fitting",
                caption: "Final fitting for a morning suit",
              },
              {
                image: instaPost2,
                alt: "Fabric selection",
                caption: "Selecting cashmere for winter coats",
              },
              {
                image: finishedSuit,
                alt: "Finished suit",
                caption: "Ready for its new home",
              },
              {
                image: tailorWorking,
                alt: "Tailor at work",
                caption: "Hand-stitching a lapel",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end p-6">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{post.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all"
            >
              <FaInstagram className="text-xl" />
              Follow @TailorHouse
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#caa892] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Difference of Bespoke Tailoring
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our master tailors and discover
              clothing crafted exclusively for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#caa892] hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Book an Appointment
              </button>
              <button className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
