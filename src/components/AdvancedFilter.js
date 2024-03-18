import React from "react";
import Shape from "./subComponents/Shape";
import Round from "../resources/images/AllShape/Round.svg";
import Miner from "../resources/images/AllShape/Miner.svg";
import Oval from "../resources/images/AllShape/Oval.svg";
import Pear from "../resources/images/AllShape/Pear.svg";
import Princess from "../resources/images/AllShape/Princess.svg";
import Radiant from "../resources/images/AllShape/Radiant.svg";
import S_Radiant from "../resources/images/AllShape/SQ.Radiant.svg";
import Emerald from "../resources/images/AllShape/Emerald.svg";
import Asscher from "../resources/images/AllShape/Asscher.svg";
import Heart from "../resources/images/AllShape/Heart.svg";
import Marquise from "../resources/images/AllShape/Marquise.svg";

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
  { name: "Round", image: Round },
  { name: "Miner", image: Miner },
  { name: "Oval", image: Oval },
  { name: "Pear", image: Pear },
  { name: "Princess", image: Princess },
  { name: "Radiant", image: Radiant },
  { name: "S Radiant", image: S_Radiant },
  { name: "Emerald", image: Emerald },
  { name: "Asscher", image: Asscher },
  { name: "Heart", image: Heart },
  { name: "Marquise", image: Marquise },
];

const advancedFilterList = [
  {
    title: "Shape",
    value: shapesArray,
  },
  {
    title: "Carat",
    value: data,
  },
  {
    title: "Color",
    value: ["L", "K", "J", "I", "H", "G", "F", "E", "D"],
  },
  {
    title: "Cut",
    value: ["Very Good", "Excellent", "Ideal"],
  },
  {
    title: "Clarity",
    value: ["I1", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "FL/IF"],
  },

  {
    title: "Price",
    value: data,
  },
  {
    title: "Polish",
    value: ["Excellent", "Very Good", "Good"],
  },
  {
    title: "Symmetry",
    value: ["Excellent", "Very Good", "Good"],
  },
  {
    title: "Fluor",
    value: ["None", "Faint", "Medium", "Strong"],
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
  return (
    <div className="min-h-[50vh] w-full  text-[--prussian-blue]">
      {advancedFilterList?.map((item) => {
        item.title === "Shape" && <Shape icon={infoSVG} data={item.value} />;
      })}

      <Shape icon={infoSVG} data={shapesArray} />
    </div>
  );
};

export default AdvancedFilter;
