import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 190) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed right-10 bottom-10"
        >
          <div
            className="p-3 rounded-full text-white bg-black cursor-pointer"
            onClick={handleBackToTop}
          >
            <AiOutlineArrowUp size={30} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
