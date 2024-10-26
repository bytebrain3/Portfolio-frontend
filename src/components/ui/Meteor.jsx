import React from 'react';
import { motion } from 'framer-motion';

const Meteor = () => {
  return (
    <div className="relative">
      {/* Meteor Trail */}
      <motion.div
        className="absolute w-4 h-1 bg-blue-300 rounded-full opacity-60"
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: [0.5, 0, 0],
          y: [0, 20],
        }}
        transition={{ duration: 1, ease: 'easeIn', repeat: 1 }}
      />
      {/* Main Meteor */}
      <motion.div
        className="absolute w-8 h-8 bg-blue-500 rounded-full"
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: [1, 0],
          y: [0, 300],
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default Meteor;
