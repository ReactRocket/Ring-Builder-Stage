import React, { useState } from "react";
import "./resources/css/breadcrumb.css";

const Breadcrumb = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <section className=" h-auto w-full flex flex-col gap-3 overflow-hidden">
      <span className="font-medium text-sm  font-['Lato', sans-serif] text-[#804294]">
        Ring Builder
      </span>
      <section
        className={` border border-[#E6E6E6]  ${
          activeButton === 2 && "bg-[#804294]"
        } w-full h-full overflow-hidden`}
      >
        <div
          className={`flex relative right-5  ${
            activeButton === 2 && "bg-[#804294]"
          }  w-full h-full overflow-hidden`}
        >
          <article
            onClick={() => setActiveButton(0)}
            className={`cursor-pointer ${
              activeButton === 0
                ? "bg-[#804294] text-white"
                : "bg-white text-[#464646]  "
            } overflow-hidden  triangle-top-left flex min-h-[10vh] w-full justify-center items-center `}
          >
            <div className="skew-negate  h-[50%]   w-full  flex justify-start px-10 items-center">
              <div className="h-full w-[15%] flex justify-center items-center ">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  className="object-contain"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.6192 43.9648H24.5996C23.7598 43.9551 22.959 43.6035 22.3828 42.9883L0.82035 19.6875C-0.263635 18.5254 -0.2734 16.7187 0.800819 15.5469C1.09379 15.2148 1.45512 14.834 1.83597 14.4629C3.31058 13.0176 4.82426 11.5527 6.27933 10.1465C7.40238 9.05272 8.56449 7.92968 9.70707 6.81639C10.2051 6.31835 10.8887 6.03514 11.5918 6.04491H23.4961H38.0567C38.7012 6.03514 39.3164 6.26952 39.8047 6.68944C42.2754 8.99413 46.8262 13.2617 49.0235 15.332C50.2539 16.4941 50.3125 18.4277 49.1504 19.6484C49.1407 19.6582 49.1407 19.6582 49.1309 19.668L26.836 43.0176C26.2598 43.623 25.459 43.9648 24.6192 43.9648ZM3.25199 17.6074L24.6192 40.6934L46.7383 17.5586C44.5703 15.5176 40.3321 11.5332 37.8614 9.23827C33.0762 9.23827 28.2129 9.23827 23.5059 9.23827C19.6094 9.23827 15.7032 9.23827 11.8067 9.23827C10.7032 10.3125 9.58988 11.3965 8.5059 12.4414C7.05082 13.8476 5.54691 15.3125 4.0723 16.748C3.7891 17.0312 3.5059 17.334 3.25199 17.6074Z"
                    fill={activeButton === 0 ? "white" : "#464646"}
                  />
                </svg>
              </div>
              <div className="h-full w-[55%] flex flex-col justify-center items-start pl-3 ">
                <h1 className="text-[100%] font-medium">Diamond</h1>
                <p className="text-[70%] text-nowrap">Choose your diamond</p>
              </div>
              <div
                className={`h-full w-[30%] flex flex-col border-l ${
                  activeButton === 0
                    ? "border-l-[#ffffff5a] "
                    : "border-l-[#4646465a] "
                }  justify-center items-start pl-4`}
              >
                <h1 className="text-[100%] font-medium ">$1,025</h1>
                <p className="text-[70%] text-nowrap">View | Edit</p>
              </div>
            </div>
          </article>
          <article
            onClick={() => setActiveButton(1)}
            className={`cursor-pointer ${
              activeButton === 1
                ? "bg-[#804294] text-white"
                : "bg-white text-[#464646]"
            } overflow-hidden parallelogram min-h-[10vh] w-full  border-x border-x-[#E6E6E6] flex justify-center items-center`}
          >
            <div className="skew-negate  h-[50%]   w-full  flex justify-start px-10 items-center">
              <div className="h-full w-[15%] flex justify-center items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.0416 16.1458C18.2751 16.1458 11.9791 22.4419 11.9791 30.2083C11.9791 37.9748 18.2751 44.2708 26.0416 44.2708C33.8081 44.2708 40.1041 37.9748 40.1041 30.2083C40.1041 22.4419 33.8081 16.1458 26.0416 16.1458ZM8.85413 30.2083C8.85413 20.7159 16.5492 13.0208 26.0416 13.0208C35.5339 13.0208 43.2291 20.7159 43.2291 30.2083C43.2291 39.7006 35.5339 47.3958 26.0416 47.3958C16.5492 47.3958 8.85413 39.7006 8.85413 30.2083Z"
                    fill={activeButton === 1 ? "white" : "#464646"}
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.625 3.22916C20.9202 2.83572 21.3833 2.60416 21.875 2.60416H30.2642C30.7608 2.60416 31.2277 2.84018 31.5223 3.23999L34.5915 7.40666C35.0767 8.06549 34.9715 8.98714 34.3502 9.51966L27.0585 15.7697C26.4733 16.2712 25.61 16.2712 25.0248 15.7697L17.7332 9.51966C17.108 8.98376 17.006 8.05459 17.5 7.39582L20.625 3.22916ZM22.6563 5.72916L20.8783 8.0997L26.0417 12.5254L31.2146 8.09149L29.4746 5.72916H22.6563Z"
                    fill={activeButton === 1 ? "white" : "#464646"}
                  />
                </svg>
              </div>
              <div className="h-full w-[55%] flex flex-col justify-center items-start pl-3 ">
                <h1 className="text-[100%] font-medium">Settings</h1>
                <p className="text-[70%] text-nowrap">Choose your settings</p>
              </div>
              <div
                className={`h-full w-[30%] flex flex-col border-l ${
                  activeButton === 1
                    ? "border-l-[#ffffff5a] "
                    : "border-l-[#4646465a] "
                }   justify-center items-start pl-4`}
              >
                <h1 className="text-[100%] font-medium ">$1,025</h1>
                <p className="text-[70%] text-nowrap">View | Edit</p>
              </div>
            </div>
          </article>
          <article
            onClick={() => setActiveButton(2)}
            className={`cursor-pointer ${
              activeButton === 2
                ? "bg-[#804294] text-white"
                : "bg-white text-[#464646]"
            } overflow-hidden  triangle-top-right min-h-[10vh] w-full  flex justify-center items-center`}
          >
            <div className="skew-negate  h-[50%]   w-full  flex justify-start px-10 items-center">
              <div className="h-full w-[15%] flex justify-center items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_162_8166)">
                    <path
                      d="M45.3431 32.3921V25.5294H34.8651C33.8235 22.0293 30.9913 19.3334 27.4409 18.4691L30.8212 14.972L27.8972 10.2197H22.102L19.179 14.972L22.5593 18.4691C19.0112 19.3328 16.1774 22.027 15.135 25.5294H4.65686V32.3921H0V43.2029C0 46.432 2.62726 49.0588 5.85657 49.0588H44.1433C47.3727 49.0588 49.9999 46.4319 49.9999 43.2029V32.3921H45.3431ZM23.7459 13.161H26.2534L27.12 14.5691L25 16.7623L22.8798 14.5691L23.7459 13.161ZM25 21.1176C28.0155 21.1176 30.6131 22.9065 31.7461 25.5294H18.2539C19.3869 22.9065 21.9845 21.1176 25 21.1176ZM7.59804 28.4706H42.402V32.3921H7.59804V28.4706ZM47.0588 43.2029C47.0588 44.8102 45.751 46.1176 44.1434 46.1176H5.85657C4.24902 46.1176 2.94118 44.8102 2.94118 43.2029V35.3333H47.0588V43.2029Z"
                      fill={activeButton === 2 ? "white" : "#464646"}
                    />
                    <path
                      d="M23.5293 0.941162H26.4705V6.98685H23.5293V0.941162Z"
                      fill={activeButton === 2 ? "white" : "#464646"}
                    />
                    <path
                      d="M29.4946 7.02505L33.769 2.75069L35.8484 4.8301L31.574 9.10447L29.4946 7.02505Z"
                      fill={activeButton === 2 ? "white" : "#464646"}
                    />
                    <path
                      d="M14.1453 4.82864L16.2247 2.74923L20.499 7.0236L18.4196 9.10301L14.1453 4.82864Z"
                      fill={activeButton === 2 ? "white" : "#464646"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_162_8166">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
