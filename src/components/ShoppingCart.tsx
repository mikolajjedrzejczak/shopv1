import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
          className="w-full sm:w-[70%] md:w-[30%] h-screen absolute top-[0] right-0 bg-white border-l-[1px] border-l-gray-200 z-[10] py-8 px-5"
        >
          <AiOutlineArrowRight
            size={20}
            onClick={setOpen}
            className="cursor-pointer"
          />
          <div className="w-full py-10 h-[85%]">no items.</div>
          <Link
            to="/buy"
            className="w-full py-3 flex items-center justify-center text-white bg-black font-semibold mt-5 border-2 border-white hover:border-black transition-all ease-linear"
          >
            CHECKOUT
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
