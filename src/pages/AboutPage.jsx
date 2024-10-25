import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center  p-3 lg:p-12">
      
      {/* Combined Card Section */}
      <motion.div
        className="w-full max-w-4xl lg:h-96 flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-gray-800 to-gray-700 p-8 lg:p-12 rounded-3xl shadow-2xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {/* Image Section with About Text inside */}
        <motion.div
          className="w-64 h-64 lg:w-80 lg:h-80 relative rounded-3xl mb-8 lg:mb-0 lg:mr-12 flex-shrink-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src="/person.png"
            className="w-full h-full object-cover rounded-3xl"
            alt="Person"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 to-blue-300 opacity-40 rounded-3xl"></div>

          {/* About Me Text inside Image */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <span className="font-starjhol text-white text-6xl">About Me</span>
          </div>
        </motion.div>

        {/* Text Section with Enhanced Typography */}
        <motion.div
          className="text-white text-left flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        >
          {/* Descriptive Text with Typography Enhancements */}
          <p className="text-lg lg:text-xl leading-relaxed mb-4 font-light">
            <span className="font-bold">I am deeply passionate about programming.</span> I spend most of my day immersed in code, striving to solve problems and create innovative solutions. <span className="font-semibold italic">The journey may be challenging,</span> but nothing compares to the joy of seeing things work smoothly.
          </p>

          <p className="text-lg lg:text-xl leading-relaxed font-light">
            While my academic background is in business, <span className="font-bold text-blue-400">technology has always been my true passion.</span> I’m driven to learn, explore, and use my skills to build <span className="font-semibold text-blue-400">revolutionary products</span> that make an impact.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
