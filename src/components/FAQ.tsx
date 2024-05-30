import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useState } from 'react';
import SingleQuestion from './SingleQuestion';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState('');

  const handleOpen = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    if (isOpen === (e.target as HTMLElement).id) {
      setIsOpen('');
    } else {
      setIsOpen((e.target as HTMLElement).id);
    }
  };

  const questions = [
    {
      id: 0,
      question: 'What is your return policy?',
      answear: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
      doloribus consequatur distinctio numquam? Magnam deserunt
      consequatur accusantium dolor quisquam incidunt maiores minima
      reprehenderit laudantium quos!`,
    },
    {
      id: 1,
      question: 'How do I return an item?',
      answear: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
      doloribus consequatur distinctio numquam? Magnam deserunt
      consequatur accusantium dolor quisquam incidunt maiores minima
      reprehenderit laudantium quos!`,
    },
    {
      id: 2,
      question: 'What is your shipping policy?',
      answear: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
      doloribus consequatur distinctio numquam? Magnam deserunt
      consequatur accusantium dolor quisquam incidunt maiores minima
      reprehenderit laudantium quos!`,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1200px] py-[7rem]">
        <h1 className="text-center text-3xl font-semibold">FAQ</h1>
        <div className="flex flex-col justify-center items-center py-5">
          {questions.map((q) => (
            <SingleQuestion
              key={q.id}
              question={q.question}
              answear={q.answear}
              handleOpen={handleOpen}
              isOpen={isOpen}
              id={`question-${q.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
