import React, { useState } from "react";
import Tooltip from "../Tooltip";

const generateShape = (index, fillColor) => {
  switch (index) {
    case 0:
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_162_11662)">
            <path
              d="M48.9873 24.9936C48.9873 38.2449 38.2449 48.9873 24.9936 48.9873C11.7423 48.9873 1 38.2449 1 24.9936C1 11.7423 11.7423 1 24.9936 1C38.2449 1 48.9873 11.7423 48.9873 24.9936Z"
              fill="url(#paint0_linear_162_11662)"
              stroke={fillColor}
              stroke-width="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_162_11662"
              x1="12.4972"
              y1="46.6515"
              x2="37.4999"
              y2="3.34555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C2C2C2" />
              <stop offset="0.1974" stop-color="#F7F7F7" />
              <stop offset="0.4821" stop-color="#C7C7C7" />
              <stop offset="0.759" stop-color="#F7F7F7" />
              <stop offset="1" stop-color="#C2C2C2" />
            </linearGradient>
            <clipPath id="clip0_162_11662">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 1:
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_162_11662)">
            <path
              d="M48.9873 24.9936C48.9873 38.2449 38.2449 48.9873 24.9936 48.9873C11.7423 48.9873 1 38.2449 1 24.9936C1 11.7423 11.7423 1 24.9936 1C38.2449 1 48.9873 11.7423 48.9873 24.9936Z"
              fill="url(#paint0_linear_162_11662)"
              stroke={fillColor}
              stroke-width="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_162_11662"
              x1="12.4972"
              y1="46.6515"
              x2="37.4999"
              y2="3.34555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C2C2C2" />
              <stop offset="0.1974" stop-color="#F7F7F7" />
              <stop offset="0.4821" stop-color="#C7C7C7" />
              <stop offset="0.759" stop-color="#F7F7F7" />
              <stop offset="1" stop-color="#C2C2C2" />
            </linearGradient>
            <clipPath id="clip0_162_11662">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 2:
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_162_11666)">
            <path
              d="M48.9873 24.9936C48.9873 38.2449 38.2449 48.9873 24.9936 48.9873C11.7423 48.9873 1 38.2449 1 24.9936C1 11.7423 11.7423 1 24.9936 1C38.2449 1 48.9873 11.7423 48.9873 24.9936Z"
              fill="url(#paint0_linear_162_11666)"
              stroke={fillColor}
              stroke-width="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_162_11666"
              x1="12.4972"
              y1="46.6515"
              x2="37.4999"
              y2="3.34555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E8B956" />
              <stop offset="0.1974" stop-color="#FFE3AB" />
              <stop offset="0.4821" stop-color="#E6B755" />
              <stop offset="0.759" stop-color="#FFE3AB" />
              <stop offset="1" stop-color="#ECBC57" />
            </linearGradient>
            <clipPath id="clip0_162_11666">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 3:
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_162_11666)">
            <path
              d="M48.9873 24.9936C48.9873 38.2449 38.2449 48.9873 24.9936 48.9873C11.7423 48.9873 1 38.2449 1 24.9936C1 11.7423 11.7423 1 24.9936 1C38.2449 1 48.9873 11.7423 48.9873 24.9936Z"
              fill="url(#paint0_linear_162_11666)"
              stroke={fillColor}
              stroke-width="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_162_11666"
              x1="12.4972"
              y1="46.6515"
              x2="37.4999"
              y2="3.34555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E8B956" />
              <stop offset="0.1974" stop-color="#FFE3AB" />
              <stop offset="0.4821" stop-color="#E6B755" />
              <stop offset="0.759" stop-color="#FFE3AB" />
              <stop offset="1" stop-color="#ECBC57" />
            </linearGradient>
            <clipPath id="clip0_162_11666">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 4:
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_162_11670)">
            <path
              d="M48.9873 24.9936C48.9873 38.2449 38.2449 48.9873 24.9936 48.9873C11.7423 48.9873 1 38.2449 1 24.9936C1 11.7423 11.7423 1 24.9936 1C38.2449 1 48.9873 11.7423 48.9873 24.9936Z"
              fill="url(#paint0_linear_162_11670)"
              stroke={fillColor}
              stroke-width="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_162_11670"
              x1="12.4972"
              y1="46.6515"
              x2="37.4999"
              y2="3.34555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6774F" />
              <stop offset="0.1974" stop-color="#F5B79C" />
              <stop offset="0.4821" stop-color="#CC724B" />
              <stop offset="0.759" stop-color="#F5B79C" />
              <stop offset="1" stop-color="#D6774F" />
            </linearGradient>
            <clipPath id="clip0_162_11670">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 5:
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_162_11670)">
            <path
              d="M48.9873 24.9936C48.9873 38.2449 38.2449 48.9873 24.9936 48.9873C11.7423 48.9873 1 38.2449 1 24.9936C1 11.7423 11.7423 1 24.9936 1C38.2449 1 48.9873 11.7423 48.9873 24.9936Z"
              fill="url(#paint0_linear_162_11670)"
              stroke={fillColor}
              stroke-width="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_162_11670"
              x1="12.4972"
              y1="46.6515"
              x2="37.4999"
              y2="3.34555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6774F" />
              <stop offset="0.1974" stop-color="#F5B79C" />
              <stop offset="0.4821" stop-color="#CC724B" />
              <stop offset="0.759" stop-color="#F5B79C" />
              <stop offset="1" stop-color="#D6774F" />
            </linearGradient>
            <clipPath id="clip0_162_11670">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 6:
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_162_11674)">
            <path
              d="M48.9873 24.9936C48.9873 38.2449 38.2449 48.9873 24.9936 48.9873C11.7423 48.9873 1 38.2449 1 24.9936C1 11.7423 11.7423 1 24.9936 1C38.2449 1 48.9873 11.7423 48.9873 24.9936Z"
              fill="url(#paint0_linear_162_11674)"
              stroke={fillColor}
              stroke-width="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_162_11674"
              x1="12.4972"
              y1="46.6515"
              x2="37.4999"
              y2="3.34555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#949CA1" />
              <stop offset="0.1974" stop-color="#D9E6ED" />
              <stop offset="0.4772" stop-color="#949CA1" />
              <stop offset="0.759" stop-color="#D9E6ED" />
              <stop offset="1" stop-color="#949CA1" />
            </linearGradient>
            <clipPath id="clip0_162_11674">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return null;
  }
};

const defaultData = [
  { title: "Sliver", value: "14k" },
  { title: "Sliver", value: "18k" },
  { title: "Gold", value: "14k" },
  { title: "Gold", value: "18k" },
  { title: "Rose G", value: "14k" },
  { title: "Rose G", value: "18k" },
  { title: "Platinum", value: "" },
];

const MetalType = ({ data = defaultData, icon, title = "Carat" }) => {
  const [activeShape, setActiveShape] = useState(0);
  const [tooltipToggle, setTooltipToggle] = useState(false);

  return (
    <div
      className={`min-h-[12vh] w-full  px-5 py-2 rounded-lg flex flex-col gap-3 bg-[#fffff] ${
        icon && "border"
      } border-[#DCDCDC]`}
    >
      <div className="h-1/3 w-full  flex justify-start items-center gap-2">
        <h3 className="font-[500] text-[16px] leading-[20px] font-['Lato', sans-serif] ">
          {title}
        </h3>
        <div
          className="relative cursor-pointer"
          onClick={() => setTooltipToggle(!tooltipToggle)}
        >
          {icon} {icon && <Tooltip toggle={setTooltipToggle} />}
        </div>
      </div>
      <div className="min-h-2/3 w-full  flex justify-start items-center gap-3">
        {data?.map((shape, index) => {
          return (
            <div
              key={index}
              className="p-1 flex flex-col  justify-between items-center "
            >
              <div
                // className={`${
                //   activeShape === index && "border-[#804294] bg-[#804294]"
                // } h-auto w-auto   gap-2 rounded-md focus:border flex justify-center items-center   object-contain  p-3 cursor-pointer`}
                className={` h-auto w-auto    rounded-md focus:border flex justify-center items-center  object-contain  py-2 cursor-pointer relative`}
                key={index}
                onClick={() => setActiveShape(index)}
              >
                <span className="absolute text-[#1E1E1E] font-['Lato', sans-serif] text-[400] text-[16px] leading-[20px]">
                  {shape.value}
                </span>
                {generateShape(
                  index,
                  activeShape === index ? "#804294" : "#DCDCDC"
                )}
              </div>
              <h3 className="w-full font-[400] text-[15px] leading-[18px] font-['Lato', sans-serif] text-[#464646] text-center">
                {shape.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetalType;
