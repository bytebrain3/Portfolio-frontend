import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { SiGooglegemini } from "react-icons/si";



const Input = ({ 
  type = 'text', 
  className = '', 
  placeholder = '', 
  variant = 'default', 
  label = '', 
  error = '', 
  check_strong_password = false,  		// Check if check_strong_password
  generate_password = false, // New prop for random password generation
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [value, setValue] = useState('');

  // Define styles for each variant with dark mode support using zinc colors
  const styles = {
    default: `w-full h-12 outline-none text-black dark:text-white p-2 bg-white dark:bg-zinc-900 ${className}`,
    secondary: `w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white ${className}`,
    outlined: `w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white ${className}`,
    filled: `w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white ${className}`,
    rounded: `w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 dark:bg-transparent dark:text-white rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white ${className}`,
  };

  // Select style based on variant
  const style = styles[variant] || styles.default;

  // Handle change for typing and strength check
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (type === 'password' && check_strong_password) {
      setPasswordStrength(calculatePasswordStrength(newValue));
    }

    props.onChange && props.onChange(e);
  };

  // Optimized password strength calculation
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[#_+()/:\;{}%~÷×@$!%*?&]/.test(password)) strength++;
    return strength;
  };

  // Function to generate a random password
  const generateRandomPassword = (length = 12) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setValue(password); // Set the generated password to the input field
    setPasswordStrength(calculatePasswordStrength(password)); // Update password strength
  };

  return (
    <div
      className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative flex items-center">

        <input
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          className={`${style} ${passwordStrength < 2 && check_strong_password ? 'border-red-500 dark:border-red-500' : ''} ${check_strong_password ? 'pr-36' : 'pr-10'} `} // Added padding for the buttons
           
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
        />

        {/* Button to generate random password */}
        {type === 'password' && generate_password && (
<button
    type="button"
    className="absolute flex items-center right-10 cursor-pointer text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 focus:outline-none"
    onClick={() => generateRandomPassword()}
>
    <SiGooglegemini className="mr-1" /> {/* Margin-right to space out icon and text */}
    Generate {/* Fixed spelling from 'Genaret' to 'Generate' */}
</button>
        )}

        {/* Toggle visibility for password input */}
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {/* Enhanced Password Strength Indicator */}
      {type === 'password' && check_strong_password && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${passwordStrength * 25}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`h-2 mt-2 rounded-full ${
            passwordStrength === 1
              ? 'bg-red-500'
              : passwordStrength === 2
              ? 'bg-yellow-500'
              : passwordStrength === 3
              ? 'bg-blue-500'
              : passwordStrength === 4
              ? 'bg-green-500'
              : 'bg-zinc-300'
          }`}
        ></motion.div>
      )}

      {/* Error message display */}
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
