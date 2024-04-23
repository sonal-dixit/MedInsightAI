import { AnimatePresence, motion } from "framer-motion";

export const PageTransition = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
export const WarpAnimation = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex flex-col gap-16 w-full justify-center items-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
