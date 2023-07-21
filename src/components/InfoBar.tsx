import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdGppGood } from 'react-icons/md';
import { GiPathDistance } from 'react-icons/gi';

const InfoBar = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100 py-10">
      <div className="w-[1200px] gap-10 md:gap-0 px-5 md:px-0 flex-col md:flex-row flex justify-between items-center text-gray-500">
        <div className="bg-gray-200 px-[5rem] md:px-[8rem] py-5 flex gap-5 md:gap-0 md:flex-col flex-row items-center">
          <LiaShippingFastSolid size={40} className="text-black" />
          <h2>Fast Shipping</h2>
        </div>
        <div className="bg-gray-200 px-[5rem] md:px-[8rem] py-5 flex gap-5 md:gap-0 md:flex-col flex-row items-center">
          <MdGppGood size={40} className="text-black" />
          <h2 className="font-semibold">High Quality</h2>
        </div>
        <div className="bg-gray-200 px-[5rem] md:px-[8rem] py-5 flex gap-5 md:gap-0 md:flex-col flex-row items-center">
          <GiPathDistance size={40} className="text-black" />
          <h2>Track Delivery</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
