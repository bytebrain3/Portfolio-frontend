import React from 'react'
import { motion } from "framer-motion";

const Border = ({text}) => {
    const formattedText = text.includes("Dip Mondal")
    ? text.split("Dip Mondal").map((part, index) => (
        index === 0 ? 
        <>{part}
        <br/>
        <span className="text-5xl font-nano text-blue-900">Dip Mondal</span></> 
        : <>{part}</>
      ))
    : text;

  return (
    <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              drag
              whileTap={{ scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              dragConstraints={{
                top: 60,
                bottom: 20, 
                left: 0,
                right: 10
              }}
              dragElastic={0.2} 
            className="relative inline-block">

        <div 
            className="text-gray-400 text-4xl lg:text-7xl font-poppinsbold font-bold p-8"
        >
          {formattedText}
        </div>
        
        {/* Border */}
        <div className="absolute inset-0 border-2 border-blue-500 pointer-events-none"></div>
        
        {/* Corner Handles */}
        <div className="absolute -left-1 -top-1 w-3 h-3 bg-blue-500 rounded"></div>
        <div className="absolute -right-1 -top-1 w-3 h-3 bg-blue-500 rounded"></div>
        <div className="absolute -left-1 -bottom-1 w-3 h-3 bg-blue-500 rounded"></div>
        <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-blue-500 rounded"></div>
      </motion.div>
    </>
  )
}

export default Border;
