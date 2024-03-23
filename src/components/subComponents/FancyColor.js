import React, { useState } from "react";
import Yellow from "./../resources/images/Fancy_color/Yellow.svg";
import Pink from "./../resources/images/Fancy_color/Pink.svg";
import Purple from "./../resources/images/Fancy_color/Purple.svg";
import Red from "./../resources/images/Fancy_color/Red.svg";
import Blue from "./../resources/images/Fancy_color/Blue.svg";
import Green from "./../resources/images/Fancy_color/Green.svg";
import Orange from "./../resources/images/Fancy_color/Orange.svg";
import Brown from "./../resources/images/Fancy_color/Brown.svg";
import Black from "./../resources/images/Fancy_color/Black.svg";
import Gray from "./../resources/images/Fancy_color/Gray.svg";
import Tooltip from "../Tooltip";
const fancyColor = [
  {
    img: Yellow,
    Color: "Yellow",
  },

  {
    img: Pink,
    Color: "Pink",
  },
  {
    img: Purple,
    Color: "Purple",
  },
  {
    img: Red,
    Color: "Red",
  },
  {
    img: Blue,
    Color: "Blue",
  },
  {
    img: Green,
    Color: "Green",
  },
  {
    img: Orange,
    Color: "Orange",
  },
  {
    img: Brown,
    Color: "Brown",
  },
  {
    img: Black,
    Color: "Black",
  },
  {
    img: Gray,
    Color: "Gray",
  },
];

const FancyColor = ({ icon }) => {
  const [activeShape, setActiveShape] = useState(0);
  const [tooltipToggle, setTooltipToggle] = useState(false);
  return (
    <>
      <div className="min-h-[12vh]  w-full  px-5 py-2 rounded-lg flex flex-col gap-3 bg-[#fffff] border border-[#DCDCDC]">
        <div className="h-1/3 w-full  flex justify-start items-center gap-2">
          <h3 className="font-[500] text-[16px] leading-[20px] font-['Lato', sans-serif] ">
            Fancy Color
          </h3>

          <div
            className="relative cursor-pointer"
            onClick={() => setTooltipToggle(!tooltipToggle)}
          >
            {icon} {tooltipToggle && <Tooltip toggle={setTooltipToggle} />}
          </div>
        </div>
        <div className="min-h-2/3 w-full  grid grid-flow-col grid-cols-10 gap-2">
          {fancyColor?.map((item, index) => {
            return (
              <div
                key={index}
                className="p-1 w-full h-full flex flex-col  justify-center items-center gap-2"
              >
                <div
                  className={`${
                    activeShape === index && "border-[#804294] bg-[#804294]"
                  }  w-full h-full   gap-2 rounded-md focus:border flex justify-center items-center   object-contain p-1 cursor-pointer`}
                  key={index}
                  onClick={() => setActiveShape(index)}
                >
                  <img
                    className="p-1 object-contain h-full w-auto"
                    src={item.img}
                    alt="img"
                  />
                </div>
                <h3 className="w-full font-[400] text-[15px] leading-[18px] font-['Lato', sans-serif] text-[#464646] flex justify-center items-center">
                  {item.Color}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FancyColor;
