import { Link } from 'react-router-dom';
import IMG from '../assets/logov2.png';
import { motion } from 'framer-motion';

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 flex justify-center flex-col items-center">
      <div className="lg:w-[1200px] flex flex-col justify-center items-center gap-5">
        <div className="flex justify-between md:flex-row flex-col gap-5 md:gap-0 items-center py-[4.5rem] w-full">
          <img src={IMG} alt="Logo" className="w-[150px]" />
          <motion.ul
            className="flex-1 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.15 }}
            viewport={{ once: true }}
          >
            <li>
              <Link to="/">Policy</Link>
            </li>
            <li>
              <Link to="/">Track Order</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </motion.ul>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-end gap-2"
          >
            <a href="#">
              <AiFillFacebook
                size={30}
                className="hover:scale-105 transition-all ease-linear duration-75"
              />
            </a>
            <a href="#">
              <AiFillInstagram
                size={30}
                className="hover:scale-105 transition-all ease-linear duration-75"
              />
            </a>
            <a href="#">
              <AiFillTwitterSquare
                size={30}
                className="hover:scale-105 transition-all ease-linear duration-75"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <p className="w-full text-center py-3 font-semibold border-t-[1px] border-t-gray-300">
        &copy; 2023 Developed by{' '}
        <a
          href="https://github.com/mikolajjedrzejczak"
          target="_blank"
          className="underline font-bold"
        >
          mikolajjedrzejczak
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
