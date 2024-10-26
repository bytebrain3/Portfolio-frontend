import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const DrawerContent = ({ children }) => {
  return (
    <div className="px-6 pb-6 mt-4 ">
      {children}
    </div>
  );
}

export const DrawerHeader = ({ title, description }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-gray-600 mb-6 dark:text-gray-300">{description}</p>
    </>
  );
}

export const DrawerFooter = ({ onClose, children, className }) => {
  // Adjust the style variable declaration to be properly formatted
  const style = `mt-2 space-y-2 px-1 ${className}`;

  return (
    <div className={style}>
      {children}
      <button
        className="w-full px-4 py-2 bg-transparent text-black border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-zinc-800"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};



export const DrawerComponent = ({ isOpen, onClose, children }) => {
  const controls = useAnimation();
  const constraintsRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      controls.start('visible');
    } else {
      document.body.style.overflow = 'unset';
      controls.start('hidden');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, controls]);

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 50) {
      onClose();
    } else {
      controls.start('visible');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed backdrop-blur-sm inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}>
      <motion.div
        ref={constraintsRef}
        className="fixed inset-x-0 bottom-0 z-50 w-full bg-white shadow-lg dark:bg-zinc-950"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { y: 0 },
          hidden: { y: '100%' },
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{
          maxHeight: '90vh',
          overflowY: 'auto',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white pt-3 pb-2 px-6 dark:bg-zinc-900">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-2 dark:bg-zinc-600"></div>
        </div>
        {children}
      </motion.div>
    </div>
  );
}

export const DrawerTrigger = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200 dark:text-black dark:bg-white dark:hover:bg-neutral-50"
    >
      Open Drawer
    </button>
  );
}

// Example usage
const DrawerExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="p-4 bg-gray-100 dark:bg-zinc-600 min-h-screen">
      <DrawerTrigger onClick={() => setIsOpen(true)} />
      <DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerContent>
          <DrawerHeader 
            title="" 
            description="" 
          />
          <DrawerFooter onClose={() => setIsOpen(false)} />
        </DrawerContent>
      </DrawerComponent>
    </div>
  );
}

export default DrawerExample;
