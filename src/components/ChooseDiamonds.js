import React, { useState } from "react";
import diamond from "../components/resources/choose_diamonds/diamond.svg";
import diamond1 from "../components/resources/choose_diamonds/diamond (1).svg";

const ChooseDiamonds = () => {
  const [option, SetOption] = useState(1);
  return (
    <div className="px-10 py-10 w-full flex justify-center ">
      <div className="min-h-12 w-1/3 bg-[#F0F0F0] border rounded-md   flex shadow-inner p-1 gap-3">
        <button
          className={`option ${
            option === 1 ? "selected" : ""
          } h-full w-full text-center transition-colors duration-500 rounded-md gap-2 flex justify-center text-sm items-center ${
            option === 1 ? "bg-white" : "bg-[#F0F0F0]"
          }`}
          onClick={() => SetOption(1)}
        >
          <span className="h-5 w-5">
            <img src={`${option === 1 ? diamond : diamond1}`} alt="Diamond" />
          </span>
          <div className="">
            <p className={`${option === 1 ? "text-[#804294]" : "text-[#787878]"} font-[lato] w-32 h-5 text-nowrap font-semibold text-[#804294]}`}>
              Natural Diamonds
            </p>
          </div>
        </button>

        <button
          className={`option ${
            option === 2 ? "selected" : ""
          } h-full w-full text-center  transition-colors duration-500  rounded-md gap-2 flex justify-center text-sm items-center ${
            option === 2 ? "bg-white " : "bg-[#F0F0F0]"
          }`}
          onClick={() => SetOption(2)}
        >
          <span className="h-5 w-5">
          <img src={`${option === 2 ? diamond : diamond1}`} alt="Diamond1"  />

          </span>
          <div className=" ">
            <p className={`${ option === 2 ? "text-[#804294]  " : "text-[#787878]"} font-[lato] w-32 h-5 text-center text-nowrap font-semibold text-[#787878]}`}>
              Lab Grown Diamonds
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChooseDiamonds;
