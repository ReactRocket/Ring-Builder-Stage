import React from "react";
import Ring from "../../../resources/images/complete/Ring.svg";

const ProductTableView = () => {
  const Product_Details = [
    {
      image: Ring,
      name: "LOLA DIAMOND ENGAGEMENT RING",
      carat: "WHITE GOLD 14K",
      price: "$450.00 (Setting Price)",
    },
    {
      image: Ring,
      name: "LOLA DIAMOND ENGAGEMENT RING",
      carat: "WHITE GOLD 14K",
      price: "$450.00 (Setting Price)",
    },
    {
      image: Ring,
      name: "LOLA DIAMOND ENGAGEMENT RING",
      carat: "WHITE GOLD 14K",
      price: "$450.00 (Setting Price)",
    },
    {
      image: Ring,
      name: "LOLA DIAMOND ENGAGEMENT RING",
      carat: "WHITE GOLD 14K",
      price: "$450.00 (Setting Price)",
    },
    {
      image: Ring,
      name: "LOLA DIAMOND ENGAGEMENT RING",
      carat: "WHITE GOLD 14K",
      price: "$450.00 (Setting Price)",
    },
  ];

  return (
    <>
      <div className="h-screen w-full  px-5 py-10">
        <ul className="h-full w-full px-20 flex gap-3  flex-col ">
          {Product_Details?.map((val, index) => {
            return (
              <li
                key={index}
                className="border justify-between bg-white items-center text-[#464646] font-normal flex gap-2 h-[15%] rounded-sm border-[#DCDCDC]"
              >
                <div className="h-full  w-[12%]">
                  <img
                    className="h-full w-full   "
                    src={val.image}
                    alt={val.altText}
                  />
                </div>
                <div className="h-1/2 flex justify-center items-center border-l border-[#DCDCDC]  w-[30%]">
                  <span className="font-medium">{val.name}</span>
                </div>

                <div className="h-full flex justify-center items-center  w-[20%]">
                  <span className="font-medium">{val.carat}</span>
                </div>
                <div className="h-full flex justify-center items-center   w-[20%]">
                  <span className="text-[#804294] font-medium">{val.price}</span>
                </div>
                <div className="h-full  flex justify-center items-center   w-[10%]">
                  <svg
                    className="cursor-pointer"
                    width="12"
                    height="15"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.95617 2.20101e-05C2.14498 -0.00106898 2.33215 0.0351192 2.50694 0.106515C2.68174 0.177911 2.84073 0.283111 2.97478 0.416078L11.5828 9.02411C11.85 9.29291 12 9.65653 12 10.0356C12 10.4146 11.85 10.7782 11.5828 11.047L2.97478 19.655C2.70033 19.8901 2.34729 20.0129 1.98621 19.9989C1.62514 19.985 1.28263 19.8353 1.02712 19.5798C0.771616 19.3243 0.621933 18.9818 0.607986 18.6207C0.594039 18.2596 0.716857 17.9066 0.951894 17.6321L8.54131 10.0427L0.951895 2.45331C0.750436 2.2535 0.61275 1.99844 0.556245 1.72038C0.499739 1.44232 0.526955 1.15376 0.634449 0.891164C0.741942 0.628573 0.924887 0.403752 1.16015 0.245131C1.39541 0.0865107 1.67243 0.00121217 1.95617 2.20101e-05Z"
                      fill="#464646"
                    />
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductTableView;
