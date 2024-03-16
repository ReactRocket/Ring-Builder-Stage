import React from "react";
import diamond  from '../components/resources/choose_diamonds/diamond.svg'
import  diamond1 from '../components/resources/choose_diamonds/diamond (1).svg'

const ChooseDiamonds = () => {
  return (
    <div className="px-10 py-10 w-full flex justify-center ">
      <div className="min-h-12 w-1/4 bg-[#F0F0F0] border rounded-md   flex shadow-inner p-1 gap-2">
        <div className="h-full w-1/2 bg-[#FFFFFF] border rounded-md flex justify-center p-2 text-sm gap-2 items-center  ">
          <span className="h-5 w-5">
            <img src={diamond} />
          </span>
          <div className="">
            <p className="font-[lato] w-32 h-5 text-nowrap text-[#804294]">Natural Diamonds</p>
          </div>
        </div>
        <div className="h-full w-1/2 bg-[#F0F0F0]  p-2  rounded-md flex justify-center gap-2 text-sm items-center">
          <span className="h-5 w-5">
            <img src={diamond1} />
          </span>
          <div className="">
            <p className="font-[lato] w-32 h-5 text-end text-nowrap">Lab Grown Diamonds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseDiamonds;
