import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

type ShoppingCartProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ setOpen, open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ right: '-100%', opacity: 0 }}
          animate={{ right: 0, opacity: 1 }}
          exit={{ right: '-100%', opacity: 0 }}
          className="w-[70%] md:w-[40%] h-screen absolute top-[0] right-0 bg-white border-l-[1px] border-l-gray-200 z-[10] py-8 px-5"
        >
          <AiOutlineArrowRight
            size={20}
            onClick={setOpen}
            className="cursor-pointer"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
