import PageHeroSection from '../components/PageHeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import VideoSection from '../components/VideoSection'; 
import TestimonialSection from '../components/TestimonialSection';
import InstagramSection from "../components/InstagramSection";

import heroBg from '../assets/hero-tailor.png';

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHeroSection title="About Us" bgImage={heroBg} />
      <AboutSection />
      <WhyChooseUsSection />
      <VideoSection />
      <TestimonialSection />
      <InstagramSection />
    </div>
  );
};

export default About;
