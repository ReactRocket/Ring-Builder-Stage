import React,{useState} from "react";
import Tooltip from "../Tooltip";

const Shape = ({ data = [], icon }) => {
const [tooltipToggle, setTooltipToggle] = useState(false)

  return (
    <div className="min-h-[12vh] w-full  px-5 py-2 rounded-lg flex flex-col gap-3 bg-[#fffff] border border-[#DCDCDC]">
      <div className="h-1/3 w-full  flex justify-start items-center gap-2">
        <h3 className="font-[500] text-[16px] leading-[20px] font-['Lato', sans-serif] ">
          Shape{" "}
        </h3>
        <div className="relative cursor-pointer" onClick={()=> setTooltipToggle(!tooltipToggle)} >
          {icon} {tooltipToggle && <Tooltip toggle={setTooltipToggle} />}
        </div>
      </div>
      <div className="min-h-2/3 w-full  flex justify-start items-center gap-5">
        {data?.map((item) => {
          return (
            <div className="p-1 flex flex-col  justify-center items-center gap-2">
              <button
                className=" h-[35px] w-[35px]   gap-2 rounded-md focus:border flex justify-center items-center  border-[#804294] focus:bg-[#804294] object-contain  :aspect-square p-1"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full object-fill aspect-square z-10"
                />
              </button>
              <h3 className="w-full font-[400] text-[15px] leading-[18px] font-[['Lato', sans-serif]] text-[#464646] text-center">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shape;
