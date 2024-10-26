// Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 		// Check if variant
  disabled = false, 
  loading = false,
  ...props 
}) => {
  const baseStyle = "px-4 py-2 rounded-md flex items-center justify-center transition-all duration-200";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900",
    secondary: "bg-gray-500 text-white hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700",
    outline: "bg-white text-black border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-zinc-800",
    ghost: "text-black dark:text-white backdrop-blur bg-transparent",
    danger: "bg-red-500 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700",
    dark: "bg-zinc-950 text-white dark:bg-gray-100 dark:text-black hover:bg-zinc-800",
    success: "bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700",
    info: "bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
  };

  const buttonClasses = `${baseStyle} ${variantStyles[variant]} ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : children}
    </button>
  );
};

export default Button;