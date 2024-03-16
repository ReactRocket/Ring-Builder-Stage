import React, { useState } from "react";
import "./resources/css/breadcrumb.css";
import diamondImg from "../components/resources/images/breadcrumb/001-diamond.svg";
import settingImg from "../components/resources/images/breadcrumb/002-diamond-ring.svg";
import completeImg from "../components/resources/images/breadcrumb/003-wedding-ring.svg";

const Breadcrumb = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <section className=" h-auto w-full flex flex-col gap-3 overflow-hidden">
      <span className="font-medium text-sm font-lato text-prussian-blue-light">
        Ring Builder
      </span>
      <section className="  w-full h-full ">
        <div className="flex relative right-5 border border-[#E6E6E6] bg-white  w-full h-full overflow-hidden">
          <article
            onClick={() => setActiveButton(0)}
            className={`${
              activeButton === 0
                ? "bg-[#804294] text-white"
                : "bg-white text-[#464646]  "
            } overflow-hidden  triangle-top-left flex min-h-[10vh] w-full justify-center items-center `}
          >
            <div className="skew-negate  h-[50%]   w-full  flex justify-start px-10 items-center">
              <div className="h-full w-[15%] flex justify-center items-center ">
                <img
                  src={diamondImg}
                  className="h-9  object-cover"
                  alt="diamond"
                />
              </div>
              <div className="h-full w-[55%] flex flex-col justify-center items-start pl-3 ">
                <h1 className="text-[100%] font-medium">Diamond</h1>
                <p className="text-[70%] text-nowrap">Choose your diamond</p>
              </div>
              <div className="h-full w-[30%] flex flex-col border-l border-l-[#ffffff5a] justify-center items-start pl-4">
                <h1 className="text-[100%] font-medium ">$1,025</h1>
                <p className="text-[70%] text-nowrap">View | Edit</p>
              </div>
            </div>
          </article>
          <article
            onClick={() => setActiveButton(1)}
            className={`${
              activeButton === 1
                ? "bg-[#804294] text-white"
                : "bg-white text-[#464646]"
            } overflow-hidden parallelogram min-h-[10vh] w-full  border-x border-x-[#E6E6E6] flex justify-center items-center`}
          >
            <div className="skew-negate  h-[50%]   w-full  flex justify-start px-10 items-center">
              <div className="h-full w-[15%] flex justify-center items-center">
                <img
                  src={settingImg}
                  className="h-9  object-cover"
                  alt="diamond"
                />
              </div>
              <div className="h-full w-[55%] flex flex-col justify-center items-start pl-3 ">
                <h1 className="text-[100%] font-medium">Settings</h1>
                <p className="text-[70%] text-nowrap">Choose your settings</p>
              </div>
              <div className="h-full w-[30%] flex flex-col border-l border-l-[#4646465a] justify-center items-start pl-4">
                <h1 className="text-[100%] font-medium ">$1,025</h1>
                <p className="text-[70%] text-nowrap">View | Edit</p>
              </div>
            </div>
          </article>
          <article
            onClick={() => setActiveButton(2)}
            className={`${
              activeButton === 2
                ? "bg-[#804294] text-white"
                : "bg-white text-[#464646]"
            } overflow-hidden  triangle-top-right min-h-[10vh] w-full   flex justify-center items-center`}
          >
            <div className="skew-negate  h-[50%]   w-full  flex justify-start px-10 items-center">
              <div className="h-full w-[15%] flex justify-center items-center">
                <img
                  src={completeImg}
                  className="h-9  object-cover"
                  alt="diamond"
                />
              </div>
              <div className="h-full w-[55%] flex flex-col justify-center items-start pl-3 ">
                <h1 className="text-[100%] font-medium">Complete ring</h1>
                <p className="text-[70%] text-nowrap">Review your ring</p>
              </div>
              <div className="h-full w-[30%] flex flex-col   justify-center items-start pl-4"></div>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Breadcrumb;
