import React, { useState } from "react";

const ProductFilter = () => {
  const [productView, setProductView] = useState(1);
  return (
    <>
      <div className=" min-h-14 w-full flex py-10 ">
        <div className=" min-h-14 w-full   ">
          <span className="font-[lato] text-[#804294] font-medium text-xl ">
            Round Natural Diamond
          </span>

          <p className="font-[lato] font-normal text-base">
            Shop Certified Natural Diamonds 277,856 Conflict-Free Natural
            Diamonds
          </p>
        </div>
        <div className=" min-h-14 w-full  flex justify-end items-end ">
          <div className=" w-1/2 flex gap-3 justify-center cursor-pointer items-end">
            <div className="h-full w-2/3  flex font-[Poppins]   font-medium leading-4 text-[#804294] text-base   gap-2 text-center p-2.5 rounded-md border border-[#804294] ">
              <label>Sort:</label>
              <select className="w-full">
                <option>Best Value</option>
                <option>Best Value</option>
                <option>Best Value</option>
                <option>Best Value</option>
                <option>Best Value</option>
                <option>Best Value</option>
              </select>
            </div>
            <div className="h-full w-1/4 p-1 rounded-md border flex justify-center items-center  border-[#804294]  ">
              <button
                className={`rounded-sm ${
                  productView === 1 ? "bg-[#804294]" : "bg-white"
                }  p-2 `}
                onClick={() => setProductView(1)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0H1C0.447266 0 0 0.447266 0 1V5C0 5.55273 0.447266 6 1 6H5C5.55273 6 6 5.55273 6 5V1C6 0.447266 5.55273 0 5 0Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                  <path
                    d="M12 0H8C7.44727 0 7 0.447266 7 1V5C7 5.55273 7.44727 6 8 6H12C12.5527 6 13 5.55273 13 5V1C13 0.447266 12.5527 0 12 0Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                  <path
                    d="M19 0H15C14.4473 0 14 0.447266 14 1V5C14 5.55273 14.4473 6 15 6H19C19.5527 6 20 5.55273 20 5V1C20 0.447266 19.5527 0 19 0Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                  <path
                    d="M5 14H1C0.447266 14 0 14.4473 0 15V19C0 19.5527 0.447266 20 1 20H5C5.55273 20 6 19.5527 6 19V15C6 14.4473 5.55273 14 5 14Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                  <path
                    d="M12 14H8C7.44727 14 7 14.4473 7 15V19C7 19.5527 7.44727 20 8 20H12C12.5527 20 13 19.5527 13 19V15C13 14.4473 12.5527 14 12 14Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                  <path
                    d="M19 14H15C14.4473 14 14 14.4473 14 15V19C14 19.5527 14.4473 20 15 20H19C19.5527 20 20 19.5527 20 19V15C20 14.4473 19.5527 14 19 14Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                  <path
                    d="M5 7H1C0.447266 7 0 7.44727 0 8V12C0 12.5527 0.447266 13 1 13H5C5.55273 13 6 12.5527 6 12V8C6 7.44727 5.55273 7 5 7Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                  <path
                    d="M12 7H8C7.44727 7 7 7.44727 7 8V12C7 12.5527 7.44727 13 8 13H12C12.5527 13 13 12.5527 13 12V8C13 7.44727 12.5527 7 12 7Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                  <path
                    d="M19 7H15C14.4473 7 14 7.44727 14 8V12C14 12.5527 14.4473 13 15 13H19C19.5527 13 20 12.5527 20 12V8C20 7.44727 19.5527 7 19 7Z"
                    fill={`${productView === 1 ?  "#FFFFFF":"#804294" }`}
                  />
                </svg>
              </button>
              <button
                className={` rounded-sm ${
                  productView === 2 ? "bg-[#804294]" : "bg-white"
                }  p-2 `}
                onClick={() => setProductView(2)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1667 20H7.5C7 20 6.66667 19.6364 6.66667 19.0909V15.4545C6.66667 14.9091 7 14.5455 7.5 14.5455H19.1667C19.6667 14.5455 20 14.9091 20 15.4545V19.0909C20 19.6364 19.6667 20 19.1667 20ZM4.16667 20H0.833333C0.333333 20 0 19.6364 0 19.0909V15.4545C0 14.9091 0.333333 14.5455 0.833333 14.5455H4.16667C4.66667 14.5455 5 14.9091 5 15.4545V19.0909C5 19.6364 4.66667 20 4.16667 20ZM19.1667 12.7273H7.5C7 12.7273 6.66667 12.3636 6.66667 11.8182V8.18182C6.66667 7.63636 7 7.27273 7.5 7.27273H19.1667C19.6667 7.27273 20 7.63636 20 8.18182V11.8182C20 12.3636 19.6667 12.7273 19.1667 12.7273ZM4.16667 12.7273H0.833333C0.333333 12.7273 0 12.3636 0 11.8182V8.18182C0 7.63636 0.333333 7.27273 0.833333 7.27273H4.16667C4.66667 7.27273 5 7.63636 5 8.18182V11.8182C5 12.3636 4.66667 12.7273 4.16667 12.7273ZM19.1667 5.45455H7.5C7 5.45455 6.66667 5.09091 6.66667 4.54545V0.909091C6.66667 0.363636 7 0 7.5 0H19.1667C19.6667 0 20 0.363636 20 0.909091V4.54545C20 5.09091 19.6667 5.45455 19.1667 5.45455ZM4.16667 5.45455H0.833333C0.333333 5.45455 0 5.09091 0 4.54545V0.909091C0 0.363636 0.333333 0 0.833333 0H4.16667C4.66667 0 5 0.363636 5 0.909091V4.54545C5 5.09091 4.66667 5.45455 4.16667 5.45455Z"
                    fill={`${productView === 2 ? "#FFFFFF" : "#804294"}`}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
