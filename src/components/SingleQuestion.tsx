import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

interface SingleQuestionProps {
  question: string;
  answear: string;
  handleOpen: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
  isOpen: string;
  id: string;
}

const SingleQuestion = ({
  question,
  answear,
  handleOpen,
  isOpen,
  id,
}: SingleQuestionProps) => {
  return (
    <div className="w-[300px] md:w-[460px]">
      <h1
        className="flex py-2 px-2 w-full border-b-[1px] border-b-gray-300 gap-5 items-center justify-between cursor-pointer"
        id={id}
        onClick={(e) => handleOpen(e)}
      >
        <strong className="pointer-events-none">{question}</strong>
        {isOpen === id ? (
          <AiOutlineArrowUp size={20} className="pointer-events-none" />
        ) : (
          <AiOutlineArrowDown size={20} className="pointer-events-none" />
        )}
      </h1>
      {isOpen === id && <p className="py-2 px-2">{answear}</p>}
    </div>
  );
};

export default SingleQuestion;
