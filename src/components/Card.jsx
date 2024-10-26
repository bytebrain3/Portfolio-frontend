import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const CardHeader = ({ className="", title="", description="" }) => {
  const style = `${className} p-4`;
  return (
    <motion.div
      className={style}
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <motion.h1 variants={itemVariants} className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
        {title}
      </motion.h1>
      {description && (
        <motion.p variants={itemVariants} className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export const CardFooter = ({ children, className="" }) => {
  return (
    <div
      className={`p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={itemVariants}
      className="p-4 text-zinc-700 dark:text-zinc-300"
    >
      {children}
    </motion.div>
  );
};

export const Card = ({ children, className = '' }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={formVariants}
        className={`bg-white dark:bg-zinc-900 rounded-lg shadow-md ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const CardExample = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader title="Card Components Example" description="This is an example of how the card components look." />
      <CardContent>
        <p>
          It seems that the page you’re trying to reach doesn’t exist, or it might have been removed.
        </p>
      </CardContent>
      <CardFooter>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
          Go Home
        </button>
      </CardFooter>
    </Card>
  );
};

export default CardExample;
