"use client";
import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Box from "@ui/Box.jsx";
import ThemeToggle from "@ui/ThemeToggle.jsx";
import { useThemeStore } from "../stores/Theme.js";
import { Canvas } from "@react-three/fiber";
import Model from "@ui/Model.jsx";
import * as THREE from "three";

const HeroPage = () => {
  const theme_mood = useThemeStore((state) => state.theme);

  // Handle WebGL Context Loss and Restoration
  const handleContextRestored = () => {
    console.log("WebGL context restored");
  };

  const handleContextLost = (event) => {
    event.preventDefault(); // Prevent default behavior (context loss)
    console.log("WebGL context lost");
    // Optionally, you can notify the user or try to reload the scene
  };

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.addEventListener("webglcontextlost", handleContextLost, false);
      canvas.addEventListener("webglcontextrestored", handleContextRestored, false);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("webglcontextlost", handleContextLost);
        canvas.removeEventListener("webglcontextrestored", handleContextRestored);
      }
    };
  }, []);

  return (
    <div
      className={`w-full font-poppins max-h-[20%] flex flex-col items-center justify-center text-white p-4 transition-all bg-gradient-to-t from-black to-zinc-700`}
    >
      {/* Animated Hero Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:lg:max-w-4xl lg:max-w-4xl h-12 rounded-full flex items-center justify-between p-4  backdrop-blur-sm"
      >
        {/* Vite Logo */}
        <img src="/icon.jpeg" className="w-10 h-10 add-glow rounded-sm" alt="Vite Logo" />
        {/* Theme Toggle */}
        <div className="bg-neutral-50 dark:bg-zinc-900 rounded-lg p-0">
          <ThemeToggle />
        </div>
      </motion.div>

      <div className="container mx-auto px-1 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 lg:w-1/2 mb-8 lg:mb-0 z-10 py-4 px-1">
            <div className="space-y-3">
              <h1 className=" font-bold p-3 text-center font-poppinsbold">
                <Box text="Hi 👋 I am Dip Mondal" />
              </h1>
              <p className="text-lg pl-6 pr-6 lg:text-xl font-medium text-center">
                I’m from Bangladesh, a passionate programmer.
              </p>
            </div>
          </div>

          {/* 3D Model with React Three Fiber */}
          <motion.div
            className="md:w-1/2 lg:w-1/2 rounded-full relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <motion.div
              
              className="w-full p-6 bg-transparent h-[600px] lg:h-[800px]  relative overflow-hidden flex flex-col items-center text-center justify-center"
            >
              <div className="w-32 h-32 lg:w-72 lg:h-72 absolute top-24 bg-blue-600 lg:top-28 blur-3xl rounded-full"></div>
              
              <div className="font-starjhol text-3xl absolute sm:text-4xl lg:top-36 top-20">
              self thought programmer 
              </div>
              <Canvas
                camera={{ position: [1, 3, 7], fov: 75 }}
                gl={{ preserveDrawingBuffer: false }} // This prevents memory from building up
                className="absolute"
                onCreated={({ gl }) => {
                  gl.shadowMap.enabled = true;
                  gl.shadowMap.type = THREE.PCFSoftShadowMap;
                }}
              >
                <ambientLight intensity={2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                  <Model />
                </Suspense>

              </Canvas>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;
