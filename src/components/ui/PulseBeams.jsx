import React from 'react';
import { motion } from 'framer-motion';

const PulseBeam = () => {
  return (
    <motion.div
      className="absolute w-32 h-32 bg-blue-500 rounded-full opacity-30"
      initial={{ scale: 0.5, opacity: 1 }}
      animate={{ scale: 1, opacity: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

export default PulseBeam;
