import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

type SectionProps = {
  position?: string;
  background?: string;
  image?: string;
  caption?: string;
};

const Section: React.FC<SectionProps> = ({
  position = 'md:flex-row',
  background = 'bh-white',
  image,
  caption,
}) => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.2 }}
      className={`w-full py-[5rem] ${background} flex justify-center items-center`}
    >
      <div
        className={`lg:w-[1200px] gap-10 md:gap-0 px-5 md:px-0 flex-col ${position} flex justify-between items-center relative`}
      >
        <img src={image} alt="" className="border-[.5px] border-[#8080802c]" />
        <div className="flex flex-col gap-1 max-w-[400px]">
          <h2 className="text-xs text-gray-400 tracking-wider">{caption}</h2>
          <h1 className="font-bold text-5xl">Something.</h1>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis, optio! Officia velit repellat suscipit culpa maiores
            vitae ad, eaque debitis.
          </p>
          <Link
            to="/"
            className="w-[150px] text-white bg-black text-center py-3 border-2 border-white hover:border-black transition-all duration-200 ease-linear"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Section;
