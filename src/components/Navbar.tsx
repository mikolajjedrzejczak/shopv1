import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import Logo from '../assets/logov2.png';
import { BsBag } from 'react-icons/bs';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';

import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  };

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const handleScroll = () => {
    if (navRef.current) {
      document.documentElement.scrollTop > 100
        ? navRef.current.classList.add('active')
        : navRef.current.classList.remove('active');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className="w-full py-5 flex justify-center items-center sticky bg-white top-0 left-0 z-[10] transition-all ease-linear"
        ref={navRef}
      >
        <div className="w-[1200px] px-5 md:px-0 flex justify-between items-center ">
          <div className="flex md:hidden cursor-pointer" onClick={handleMenu}>
            {isOpen ? <IoCloseSharp size={20} /> : <IoMenuSharp size={20} />}
          </div>
          <ul className="hidden md:flex gap-5 text-gray-600 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline underline-offset-[.2rem]'
                    : 'hover:text-black hover:underline underline-offset-[.2rem]'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline underline-offset-[.2rem]'
                    : 'hover:text-black hover:underline underline-offset-[.2rem]'
                }
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline underline-offset-[.2rem]'
                    : 'hover:text-black hover:underline underline-offset-[.2rem]'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu */}
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ left: '-100%', opacity: 0 }}
                animate={{ left: 0, opacity: 1 }}
                exit={{ left: '-100%', opacity: 0 }}
                className="flex flex-col absolute w-full left-0 -top-0  md:hidden gap-5 text-gray-600 text-sm z-[-1]"
                onClick={handleMenu}
              >
                <ul
                  className="w-[75%] bg-white h-screen flex flex-col gap-2 items-center py-[15rem]"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <motion.li
                    initial={{ left: '-100%', opacity: 1 }}
                    animate={{ left: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full flex items-center text-[1.2rem]"
                  >
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-gray-200 py-4 w-full px-5'
                          : 'py-4 px-5 w-full'
                      }
                    >
                      Home
                    </NavLink>
                  </motion.li>
                  <li className="w-full flex items-center text-[1.2rem]">
                    <NavLink
                      to="/catalog"
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-gray-200 py-4 w-full px-5'
                          : 'py-4 w-full px-5'
                      }
                    >
                      Catalog
                    </NavLink>
                  </li>
                  <li className="w-full flex items-center text-[1.2rem]">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-gray-200 py-4 w-full px-5'
                          : 'py-4 w-full px-5'
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <Link to="/" className="md:mr-[9.4rem]">
            <img src={Logo} alt="logo" className="w-[100px]" />
          </Link>

          <div
            className="relative cursor-pointer"
            onClick={handleCart}
          >
            <BsBag size={20} />
            <div className="absolute -bottom-2 -right-1 text-xs flex items-center justify-center bg-black text-white px-1 rounded-full">
              0
            </div>
          </div>
        </div>
        {/* <ShoppingCart setOpen={handleCart} open={isCartOpen} /> */}
      </nav>
    </>
  );
};

export default Navbar;
