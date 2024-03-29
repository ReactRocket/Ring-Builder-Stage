import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="min-h-[25vh]   w-full flex justify-center items-center gap-5">
      <div className="w-1/4 h-full border">
        <img src={data.img} className="object-contain h-full w-full " alt="" />
      </div>
      <div
        className={`w-3/4 h-full flex justify-around ${
          data.type === "ring" ? "gap-3 pb-2" : "gap-5"
        }  items-center flex-col`}
      >
        <div className="h-1/3 w-full flex flex-col justify-between items-start ">
          <h1 className="text-[#1E1E1E] text-[20px] leading-[38px] font-[800] text-nowrap font-['Poppins'] text-ellipsis w-full">
            {data.title}
          </h1>
          <h3 className="font-['Lato'] font-[400] text-[14px] text-[#464646]">
            {data.subTitle}
          </h3>
        </div>
        <div className="h-1/3 flex w-full ">
          <div className="w-full h-full flex justify-start items-center gap-5">
            <span className="text-[#804294]  font-['Poppins']  font-[700] text-[26px] leading-[38px]">
              ${data.discountedPrice}
            </span>
            <del className="text-[#464646]  font-['Lato']  font-[400] text-[16px] leading-[20px]">
              ${data.originalPrice}
            </del>
          </div>
          <div className="w-full h-full flex justify-end items-center"></div>
        </div>
        {data.type === "ring" && (
          <div className="w-full h-auto flex justify-start items-center gap-2">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3251 7.09166L15.5668 8.85L11.1501 4.43333L12.9084 2.675C13.044 2.52262 13.2082 2.39849 13.3918 2.30971C13.5754 2.22094 13.7747 2.16926 13.9783 2.15765C14.1819 2.14604 14.3858 2.17472 14.5783 2.24204C14.7708 2.30937 14.9481 2.41402 15.1001 2.55L17.4501 4.9C17.5861 5.05198 17.6907 5.22929 17.7581 5.42179C17.8254 5.61428 17.8541 5.81817 17.8425 6.02177C17.8308 6.22537 17.7792 6.42468 17.6904 6.60827C17.6016 6.79186 17.4775 6.95613 17.3251 7.09166ZM11.1501 6.2L10.2668 5.31666L3.15844 12.425C2.8674 12.7062 2.68451 13.0809 2.64177 13.4833L2.29177 17.025C2.28491 17.1116 2.29593 17.1986 2.32415 17.2808C2.35237 17.3629 2.39717 17.4384 2.45579 17.5025C2.51441 17.5666 2.58558 17.6179 2.66488 17.6533C2.74419 17.6887 2.82993 17.7075 2.91677 17.7083H2.97511L6.51677 17.3583C6.91924 17.3156 7.29386 17.1327 7.57511 16.8417L14.6834 9.73333L13.8001 8.85L11.1501 6.2Z"
                  fill="#464646"
                />
              </svg>
            </span>
            <span className="text-[#464646] text-[400] text-[16px] leading-[20px]">
              Add free engraving
            </span>
          </div>
        )}
        <div className="h-1/3 w-full  flex justify-start items-center gap-5 text-[16px] font-['Lato'] leading-[20px] font-[400] text-[#804294] ">
          <button className="border-b border-b-[#804294]">Change</button>
          <span>|</span>
          <button className="border-b border-b-[#804294]">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
