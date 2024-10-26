import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSVG = () => {
  return (
    <motion.svg
      width="160px"
      height="160px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 10 }} // Initial scale
      whileHover={{ scale: 1.1 }} // Scale up on hover
      transition={{ duration: 0.3 }} // Duration of the scaling effect
    >
      <motion.rect
        x="15"
        y="9"
        width="6"
        height="6"
        rx="2"
        transform="rotate(-90 15 9)"
        stroke="#222222"
        // You can add animations specific to the rect here
        whileHover={{ fill: "#888" }} // Change color on hover
      />
      <motion.path
        d="M6 21L3 17L6 13"
        stroke="#222222"
        // You can add animations specific to this path here
        whileHover={{ stroke: "#888" }} // Change color on hover
      />
      <motion.path
        d="M3 17H10C13.7712 17 15.6569 17 16.8284 15.8284C18 14.6569 18 12.7712 18 9V9"
        stroke="#222222"
        // You can add animations specific to this path here
        whileHover={{ stroke: "#888" }} // Change color on hover
      />
    </motion.svg>
  );
};

export default AnimatedSVG;
