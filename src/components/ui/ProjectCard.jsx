import React from 'react';
import { motion } from 'framer-motion';
import Badge from '@ui/Badge.jsx';
import Button from "@ui/Button.jsx";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ description = "", technology_use = [], url = "", alt = "Project background" }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05, // Scale the card
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Add shadow effect
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="w-full font-poppins max-w-md h-64 rounded-lg shadow-lg relative hover:bg-blue-950"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 z-0">
          {url ? (
            <img
              src={url}
              alt={alt}
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-900 via-pink-600 via-yellow-500 to-orange-500 relative">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>
            </div>
          )}
        </div>

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t  from-black to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-between p-4">
          <div className="flex items-center">
            <h3 className="text-xl font-semibold text-white hidden">KLIND OS</h3>
          </div>
          <div className="space-y-3">
            <p className="text-white text-sm mb-2">{description}</p>
            <div>
              {technology_use.length > 0 && technology_use.map((item, index) => (
                <Badge key={index}>
                  {item}
                </Badge>
              ))}
            </div>
            <Button variant={"dark"} className="transition-colors space-x-2">
              <span>Read More</span>
              <FaExternalLinkAlt />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
