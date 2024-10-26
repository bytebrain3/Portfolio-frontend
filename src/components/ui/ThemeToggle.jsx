// ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import { MdWbSunny, MdDarkMode } from 'react-icons/md';
import { useThemeStore } from '../../stores/Theme.js';

const ThemeToggle = (className="") => {
  const setThemeDark = useThemeStore((state) => state.setThemeDark);
  const setThemeLight = useThemeStore((state) => state.setThemeLight);
    // Handle dark toggle 
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true';
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      setThemeDark();
      localStorage.setItem('dark-mode', 'true');
    } else {
      setThemeLight();
      document.body.classList.remove("dark");
      localStorage.setItem('dark-mode', 'false');
    }
  }, [isDarkMode]);
  const style = `p-2 rounded-full bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none ${className}`;
  return (
    

    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className={style}
      >
        {isDarkMode ? 
          <MdWbSunny className="w-6 h-6 text-yellow-500" /> : 
          <MdDarkMode className="w-6 h-6 text-zinc-700" />
        }
      </button>
    </div>
  );
};

export default ThemeToggle;

