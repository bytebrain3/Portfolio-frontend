'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Button from "@ui/Button.jsx"

const formVariants = {
  hidden: { opacity: 0, y: 66 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: {
    when: "beforeChildren",
    staggerChildren: 0.1,
  }},
};

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Automatically move to the next input
    if (e.target.value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-3">
      {/* Background with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/bg.jpeg')", 
          filter: 'blur(4px)', 
          zIndex: '-1' // Make sure the background is behind the form
        }}
      />

      {/* Main content */}
      <div className="w-full flex flex-col items-center justify-center p-2 font-poppins">
        <ToastContainer
           position="top-right"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="dark"
        /> 
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="w-full max-w-lg backdrop-blur-lg text-black rounded-lg shadow-xl overflow-hidden p-2 bg-amber-100 space-y-2"
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-center mb-5"
          >
            Verify OTP
          </motion.h1>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex justify-center space-x-1"
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-2xl text-center text-white dark:text-white border-1 bg-zinc-900 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200 outline-none"
                required
              />
            ))}
          </motion.div>
          <Button variant="dark" loading={false} Ios_loading={true}  className="w-full">
            Verify
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyOTP;
