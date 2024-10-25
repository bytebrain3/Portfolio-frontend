import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ItemsInput = ({ onItemsAdd,placeholder="Add an keyboard and press Enter" , ...props }) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null); 

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [items]);

  // Notify parent when items change
  const notifyParent = (updatedItems) => {
    const patternedData = updatedItems.map((item, index) => `${item}`).join(', ');
    
    onItemsAdd(patternedData);  // Return the items in a custom pattern
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      addItem(inputValue.trim());
    }
  };

  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    notifyParent(updatedItems);
    setInputValue('');
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    notifyParent(updatedItems);
  };

  return (
    <div className="w-full flex flex-auto rounded-b-lg bg-white  dark:bg-black">
      <div
        ref={containerRef}
        className="w-full flex flex-col bg-white p-2 text-black dark:bg-black dark:text-white overflow-y-auto max-h-60 "
      >
        <div className="flex-grow flex flex-wrap gap-2 my-2 ">
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                className="flex items-center bg-black dark:bg-neutral-50 text-white dark:text-black dark:text-black px-3 py-1 rounded-full text-sm"
              >
                <span className="truncate max-w-[150px]">{item}</span>
                <button
                  onClick={() => removeItem(index)}
                  className="ml-2 focus:outline-none hover:text-red-500 transition-colors"
                  aria-label={`Remove ${item}`}
                >
                  <FaTimes size={14} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          className="flex-shrink-0"
          initial={{ height: 'auto' }}
          animate={{ height: 'auto' }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full  rounded  p-2 bg-transparent focus:outline-none "
            {...props}  // Correctly spread props here
            placeholder={placeholder}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ItemsInput;
