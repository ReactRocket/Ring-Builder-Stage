import React, { useState, useEffect } from "react";
import Shape from "./subComponents/Shape";
import AdvancedFilterContainer from "./subComponents/AdvancedFilterContainer";

const data = [];

const infoSVG = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_162_8178)">
      <path
        d="M10 0C4.47301 0 0 4.4725 0 10C0 15.5269 4.4725 20 10 20C15.527 20 20 15.5275 20 10C20 4.47309 15.5275 0 10 0ZM11.0269 13.9696C11.0269 14.2855 10.5662 14.6014 10.0002 14.6014C9.40785 14.6014 8.98668 14.2855 8.98668 13.9696V8.95445C8.98668 8.5859 9.40789 8.33574 10.0002 8.33574C10.5662 8.33574 11.0269 8.5859 11.0269 8.95445V13.9696ZM10.0002 7.12484C9.39473 7.12484 8.9209 6.6773 8.9209 6.17707C8.9209 5.67687 9.39477 5.2425 10.0002 5.2425C10.5926 5.2425 11.0665 5.67687 11.0665 6.17707C11.0665 6.6773 10.5925 7.12484 10.0002 7.12484Z"
        fill="#464646"
      />
    </g>
    <defs>
      <clipPath id="clip0_162_8178">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const shapesArray = [
  "Round",
  "Miner",
  "Oval",
  "Pear",
  "Princess",
  "Radiant",
  "S Radiant",
  "Emerald",
  "Asscher",
  "Heart",
  "Marquise",
];

const advancedFilterList = [
  // {
  //   title: "Shape",
  //   value: shapesArray,
  // },
  {
    title: "Cut",
    value: ["Very Good", "Excellent", "Ideal"],
    min: 0,
    max: 3,
  },
  {
    title: "Clarity",
    value: ["I1", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "FL/IF"],
    min: 0,
    max: 8,
  },
  {
    title: "Carat",
    value: data,
  },
  {
    title: "Price",
    value: data,
  },
  {
    title: "Color",
    value: ["L", "K", "J", "I", "H", "G", "F", "E", "D"],
    min: 0,
    max: 9,
  },
  {
    title: "Polish",
    value: ["Excellent", "Very Good", "Good"],
    min: 0,
    max: 3,
  },
  {
    title: "Symm",
    value: ["Excellent", "Very Good", "Good"],
    min: 0,
    max: 3,
  },
  {
    title: "Fluor",
    value: ["None", "Faint", "Medium", "Strong"],
    min: 0,
    max: 4,
  },
  {
    title: "Table %",
    value: data,
  },
  {
    title: "Depth %",
    value: data,
  },

  {
    title: "L/W Ratio",
    value: data,
  },
];

const AdvancedFilter = () => {
  const [advancedFilterToggle, setAdvancedFilterToggle] = useState(false);

  return (
    <div className="relative min-h-[50vh] w-full flex flex-col justify-center items-center gap-3 mb-20 pb-20 border-b  text-[--prussian-blue]">
      <Shape icon={infoSVG} data={shapesArray} />
      <section className="h-full w-full grid grid-cols-2 gap-x-5 gap-y-3">
        {advancedFilterList?.map((item) => {
          return (
            <AdvancedFilterContainer
              key={item.title} // Don't forget to add a unique key prop when mapping over arrays
              title={item.title}
              icon={infoSVG}
              data={item.value}
              min={item.min}
              max={item.max}
            />
          );
        })}
      </section>

      <button
        onClick={() => setAdvancedFilterToggle(!advancedFilterToggle)}
        className="absolute -bottom-6   h-12 w-1/6  rounded-sm text-white mx-auto font-['Lato',sans-serif] font-[500] text-[16px] leading-[20px] bg-[#804294] "
      >
        Advanced Option
      </button>
    </div>
  );
};

export default AdvancedFilter;
