import React, { useState } from "react";
import Tooltip from "../Tooltip";
import Slider from "../Slider";

const AdvancedFilterContainer = ({ icon, title, data, min, max }) => {
  const [tooltipToggle, setTooltipToggle] = useState(false);

  return (
    <div className="min-h-[12vh] w-full  px-5 py-4 rounded-lg flex flex-col gap-3 bg-[#fffff] border border-[#DCDCDC]">
      <div className="h-1/3 w-full  flex justify-start items-center gap-2">
        <h3 className="font-[500] text-[16px] leading-[20px] font-['Lato', sans-serif] ">
          {title}
        </h3>

        <div
          className="relative cursor-pointer"
          onClick={() => setTooltipToggle(!tooltipToggle)}
        >
          {icon} {tooltipToggle && <Tooltip toggle={setTooltipToggle} />}
        </div>
      </div>
      <div className="min-h-2/3 w-full  flex justify-start items-center gap-5">
        <Slider data={data} min={min} max={max} />
      </div>
    </div>
  );
};

export default AdvancedFilterContainer;
