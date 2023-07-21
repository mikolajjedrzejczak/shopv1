import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useState } from 'react';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState('');

  const handleOpen = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    if (isOpen === (e.target as HTMLElement).id) {
      setIsOpen('');
    } else {
      setIsOpen((e.target as HTMLElement).id);
    }
  };

  console.log(isOpen);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1200px] py-[7rem]">
        <h1 className="text-center text-3xl font-semibold">FAQ</h1>
        <div className="flex flex-col justify-center items-center py-5">
          <div className="w-[460px]">
            <h1
              className="flex py-2 px-2 w-full border-b-[1px] border-b-gray-300 gap-5 items-center justify-between cursor-pointer"
              id="first-an"
              onClick={(e) => handleOpen(e)}
            >
              <strong>What is your return policy?</strong>
              {isOpen === 'first-an' ? (
                <AiOutlineArrowUp size={20} />
              ) : (
                <AiOutlineArrowDown size={20} />
              )}
            </h1>
            {isOpen === 'first-an' && (
              <p className="py-2 px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                doloribus consequatur distinctio numquam? Magnam deserunt
                consequatur accusantium dolor quisquam incidunt maiores minima
                reprehenderit laudantium quos!
              </p>
            )}
          </div>
          <div className="w-[460px]">
            <h1
              className="flex py-2 px-2 w-full border-b-[1px] border-b-gray-300 gap-5 items-center justify-between cursor-pointer"
              id="second-an"
              onClick={(e) => handleOpen(e)}
            >
              <strong>How do I return an item?</strong>
              {isOpen === 'second-an' ? (
                <AiOutlineArrowUp size={20} />
              ) : (
                <AiOutlineArrowDown size={20} />
              )}
            </h1>
            {isOpen === 'second-an' && (
              <p className="py-2 px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                doloribus consequatur distinctio numquam? Magnam deserunt
                consequatur accusantium dolor quisquam incidunt maiores minima
                reprehenderit laudantium quos!
              </p>
            )}
          </div>
          <div className="w-[460px]">
            <h1
              className="flex py-2 px-2 w-full border-b-[1px] border-b-gray-300 gap-5 items-center justify-between cursor-pointer"
              id="third-an"
              onClick={(e) => handleOpen(e)}
            >
              <strong>What is your shipping policy?</strong>
              {isOpen === 'third-an' ? (
                <AiOutlineArrowUp size={20} />
              ) : (
                <AiOutlineArrowDown size={20} />
              )}
            </h1>
            {isOpen === 'third-an' && (
              <p className="py-2 px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                doloribus consequatur distinctio numquam? Magnam deserunt
                consequatur accusantium dolor quisquam incidunt maiores minima
                reprehenderit laudantium quos!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
