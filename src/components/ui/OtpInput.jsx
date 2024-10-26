import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const OtpValueInput = ({ onChangeOtp }) => {
  const [otpValue, setOtpValue] = useState(['', '', '', '', '', '']);
  const otpValueRef = useRef([]);

  // Handle input change and navigation
  const otpValueInputHandel = (e, index) => {
    const newOtpValue = [...otpValue];
    const value = e.target.value;

    if (value.length <= 1) {
      newOtpValue[index] = value;
      setOtpValue(newOtpValue);
      onChangeOtp(newOtpValue.join('')); // Update the parent with OTP value

      // Move to the next input if input is not empty
      if (value && index < otpValue.length - 1) {
        otpValueRef.current[index + 1].focus();
      }
    }
  };
  // Handle input change and navigation end
  // Handle backspace key for deleting and focus
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otpValue[index] && index > 0) {
      otpValueRef.current[index - 1].focus();
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-between space-x-0">
      {otpValue.map((digit, index) => (
        <motion.input
          key={index}
          type="number"
          value={digit}
          maxLength={1}
          onChange={(e) => otpValueInputHandel(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (otpValueRef.current[index] = el)}
          className="w-12 h-12 border text-2xl text-center text-black dark:text-white bg-transparent rounded-md transition-all duration-200 outline-none otp-input-animation focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
          // Framer Motion Animation
          whileFocus={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 123, 255, 0.5)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default OtpValueInput;
