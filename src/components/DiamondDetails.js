import React from "react";
import Maindiamond from "../components/resources/images/diamond_details/image 1.svg";

import rectangle from "../components/resources/images/diamond_details/Rectangle.svg";

import img1 from "../components/resources/images/diamond_details/image1.svg";
import img2 from "../components/resources/images/diamond_details/image2.svg";
import img3 from "../components/resources/images/diamond_details/image3.svg";
import img4 from "../components/resources/images/diamond_details/image4.svg";
import img5 from "../components/resources/images/diamond_details/image5.svg";
import img6 from "../components/resources/images/diamond_details/image6.svg";

const DiamondDetails = () => {
  const details = [
    {
      imageSrc: img1,
      altText: "img1",
    },
    {
      imageSrc: img2,
      altText: "img1",
    },
    {
      imageSrc: img3,
      altText: "img1",
    },
    {
      imageSrc: img4,
      altText: "img1",
    },
    {
      imageSrc: img5,
      altText: "img1",
    },
    {
      imageSrc: img6,
      altText: "img1",
    },
  ];
  const diamondCharacteristics = [
    {
      name: "IGI",
      value: "View Certificate",
    },

    {
      name: "Table",
      value: "60%",
    },
    {
      name: "Shape",
      value: "Round",
    },
    {
      name: "Depth",
      value: "61.9%",
    },
    {
      name: "Carat",
      value: "0.45",
    },
    {
      name: "L/W Ratio",
      value: "1.01",
    },
    {
      name: "Cut",
      value: "Rare Carat Ideal",
    },
    {
      name: "Measurement",
      value: "4.91 x 4.87 x 3.03 mm",
    },
    {
      name: "Color",
      value: "E",
    },
    {
      name: "Crown Angle",
      value: "34.9",
    },
    {
      name: "Clarity",
      value: "VS1",
    },
    {
      name: "Pavilion Angle ",
      value: "41.3",
    },
    {
      name: "Fluorescence ",
      value: "None",
    },
    {
      name: "Girdle Thick",
      value: "Med.",
    },
    {
      name: "Polish",
      value: "Excellent",
    },
    {
      name: "Girdle % ",
      value: "3.5%",
    },
    {
      name: "Symmetry",
      value: "Excellent",
    },
    {
      name: "Seller Comments",
      value: "Eye Clean",
    },
    {
      name: "Price",
      value: "$385",
    }
  ];

  return (
    <>
      <div className="w-full bg-red-4000 h-screen px-10 py-10">
        <div className="bg-white  w-full h-8  ">
          <span className="font-[Lato] text-[#1E1E1E] text-xl font-medium leading-7 text">
            Solitaire Rings
          </span>
        </div>
        <div className="w-full h-5/6    py-5 flex gap-10">
          {/* First section  */}

          <div className="w-1/2 bg-white h-full border-2 ">
            <div className="w-full  rounded-md cursor-pointer h-full flex justify-center items-center border-[#DCDCDC]">
              <img className="object-cover h-96 " src={Maindiamond} />
            </div>
            <div className="w-full  h-24 py-4 ">
              <ul className="flex gap-5">
                {details.map((detail, index) => (
                  <li
                    className="border w-40 rounded-md cursor-pointer p-1"
                    key={index}
                  >
                    <img src={detail.imageSrc} alt={detail.altText} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* second section  */}
          <div className="w-1/2 h-full ">
            <div className="w-full h-8">
              <span className="font-[Lato] text-[#1E1E1E] text-2xl font-semibold leading-9 ">
                0.70 Carat Emerald Lab Diamond
              </span>
            </div>
            <div className="w-full py-2">
              <span className="font-[Tomato Grotesk] text-2xl font-semibold text-[#804294] leading-9 ">
                {" "}
                $450.00
              </span>
              <del className="font-[Poppins] px-2   text-[#464646] font-normal text-lg">
                $599.99
              </del>
              <span className="font-[Poppins] px-1   text-[#464646] font-normal text-lg">
                (Setting Only)
              </span>
            </div>
            <div className="w-full ">
              <span className="font-[Lato] text-[#464646] text-lg">
                Very Good Cut · E Color · VS2 Clarity · IGI Certified
              </span>
            </div>
            <div className="w-full flex justify-start items-center gap-2 py-1">
              <span className="text-[#000000] font-[Poppins] text-base">
                Wholesaler Direct
              </span>
              <svg
                className="cursor-pointer"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_197_15581)">
                  <path
                    d="M10 0C4.47301 0 0 4.4725 0 10C0 15.5269 4.4725 20 10 20C15.527 20 20 15.5275 20 10C20 4.47309 15.5275 0 10 0ZM11.0269 13.9696C11.0269 14.2855 10.5662 14.6014 10.0002 14.6014C9.40785 14.6014 8.98668 14.2855 8.98668 13.9696V8.95445C8.98668 8.5859 9.40789 8.33574 10.0002 8.33574C10.5662 8.33574 11.0269 8.5859 11.0269 8.95445V13.9696ZM10.0002 7.12484C9.39473 7.12484 8.9209 6.6773 8.9209 6.17707C8.9209 5.67687 9.39477 5.2425 10.0002 5.2425C10.5926 5.2425 11.0665 5.67687 11.0665 6.17707C11.0665 6.6773 10.5925 7.12484 10.0002 7.12484Z"
                    fill="#804294"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_197_15581">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full h-10 flex gap-3">
              <button className=" bg-[#804294] text-xl  w-80 h-full rounded-sm font-[lato] text-white ">
                {" "}
                Add to Cart
              </button>

              <span className="bg-white h-full aspect-square  cursor-pointer w-10 rounded-sm border flex justify-center items-center border-[#804294]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_197_15621)">
                    <path
                      d="M21.3281 1.875C20.1416 1.87638 18.968 2.12082 17.8797 2.59326C16.7913 3.06569 15.8113 3.75609 15 4.62187C13.8111 3.35302 12.2683 2.47086 10.5717 2.08993C8.87513 1.709 7.10323 1.84688 5.48602 2.48568C3.8688 3.12448 2.48097 4.23469 1.50269 5.67219C0.524409 7.10968 0.000856078 8.80807 0 10.5469C0 19.1812 13.9266 27.6562 14.5312 27.9891C14.6771 28.0767 14.844 28.1229 15.0141 28.1229C15.1842 28.1229 15.3511 28.0767 15.4969 27.9891C16.0734 27.6562 30 19.1812 30 10.5469C29.9975 8.24771 29.0831 6.04343 27.4573 4.41767C25.8316 2.79192 23.6273 1.87748 21.3281 1.875ZM15 26.0812C12.5766 24.5344 1.875 17.3062 1.875 10.5469C1.8762 9.1031 2.33712 7.69721 3.19095 6.53297C4.04477 5.36872 5.24715 4.50661 6.62383 4.07156C8.0005 3.63652 9.47994 3.65116 10.8477 4.11335C12.2155 4.57554 13.4006 5.46128 14.2313 6.64219C14.3178 6.76502 14.4326 6.86526 14.566 6.93445C14.6993 7.00364 14.8474 7.03975 14.9977 7.03975C15.1479 7.03975 15.296 7.00364 15.4293 6.93445C15.5627 6.86526 15.6775 6.76502 15.7641 6.64219C16.594 5.45925 17.7794 4.5716 19.148 4.10811C20.5167 3.64461 21.9975 3.6294 23.3755 4.06467C24.7534 4.49994 25.9567 5.36305 26.8108 6.52869C27.6649 7.69433 28.1252 9.10183 28.125 10.5469C28.125 17.3016 17.4234 24.5297 15 26.0812Z"
                      fill="#804294"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_197_15621">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="bg-white h-full aspect-square cursor-pointer w-10  rounded-sm border border-[#804294] flex justify-center items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.875 27.1875C1.80352 27.1875 1.73133 27.1793 1.65984 27.1629C1.2368 27.0621 0.9375 26.6848 0.9375 26.25C0.9375 17.7309 2.01516 10.6458 15 10.3235V3.75C15 3.37734 15.2205 3.04055 15.5613 2.89125C15.9009 2.74289 16.2991 2.80711 16.5738 3.06164L28.7613 14.3116C28.9535 14.4881 29.0625 14.7382 29.0625 15C29.0625 15.2618 28.9535 15.5119 28.7613 15.6886L16.5738 26.9386C16.3001 27.1931 15.9019 27.259 15.5613 27.109C15.2205 26.9595 15 26.6227 15 26.25V19.6985C6.09281 19.9118 4.44938 23.1977 2.71359 26.6693C2.55258 26.9925 2.22375 27.1875 1.875 27.1875ZM15.9375 17.8125C16.4557 17.8125 16.875 18.2318 16.875 18.75V24.1085L26.7427 15L16.875 5.89148V11.25C16.875 11.7682 16.4557 12.1875 15.9375 12.1875C5.58094 12.1875 3.35086 16.193 2.91234 22.5907C4.85414 19.9823 8.16375 17.8125 15.9375 17.8125Z"
                    fill="#804294"
                  />
                </svg>
              </span>
            </div>
            <div className="w-full   py-2 flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4325 11.7L20.775 7.95C20.717 7.81701 20.6216 7.70371 20.5005 7.62384C20.3793 7.54396 20.2376 7.50095 20.0925 7.5H16.08L16.32 5.3325C16.3318 5.22728 16.3212 5.12075 16.2889 5.01992C16.2566 4.91909 16.2033 4.82625 16.1325 4.7475C16.0624 4.66981 15.9768 4.60765 15.8812 4.56502C15.7856 4.5224 15.6822 4.50025 15.5775 4.5H5.25C5.05109 4.5 4.86032 4.57902 4.71967 4.71967C4.57902 4.86032 4.5 5.05109 4.5 5.25C4.5 5.44891 4.57902 5.63968 4.71967 5.78033C4.86032 5.92098 5.05109 6 5.25 6H9C9.19891 6 9.38968 6.07902 9.53033 6.21967C9.67098 6.36032 9.75 6.55109 9.75 6.75C9.75 6.94891 9.67098 7.13968 9.53033 7.28033C9.38968 7.42098 9.19891 7.5 9 7.5H3.75C3.55109 7.5 3.36032 7.57902 3.21967 7.71967C3.07902 7.86032 3 8.05109 3 8.25C3 8.44891 3.07902 8.63968 3.21967 8.78033C3.36032 8.92098 3.55109 9 3.75 9H11.25C11.4489 9 11.6397 9.07902 11.7803 9.21967C11.921 9.36032 12 9.55109 12 9.75C12 9.94891 11.921 10.1397 11.7803 10.2803C11.6397 10.421 11.4489 10.5 11.25 10.5H6C5.80109 10.5 5.61032 10.579 5.46967 10.7197C5.32902 10.8603 5.25 11.0511 5.25 11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12H9C9.19891 12 9.38968 12.079 9.53033 12.2197C9.67098 12.3603 9.75 12.5511 9.75 12.75C9.75 12.9489 9.67098 13.1397 9.53033 13.2803C9.38968 13.421 9.19891 13.5 9 13.5H3C2.80109 13.5 2.61032 13.579 2.46967 13.7197C2.32902 13.8603 2.25 14.0511 2.25 14.25C2.25 14.4489 2.32902 14.6397 2.46967 14.7803C2.61032 14.921 2.80109 15 3 15H4.5C4.69891 15 4.88968 15.079 5.03033 15.2197C5.17098 15.3603 5.25 15.5511 5.25 15.75C5.25 15.9489 5.17098 16.1397 5.03033 16.2803C4.88968 16.421 4.69891 16.5 4.5 16.5H3.75C3.55109 16.5 3.36032 16.579 3.21967 16.7197C3.07902 16.8603 3 17.0511 3 17.25C3 17.4489 3.07902 17.6397 3.21967 17.7803C3.36032 17.921 3.55109 18 3.75 18H5.8875C5.96849 18.3163 6.12262 18.6092 6.3375 18.855C6.51959 19.0586 6.74271 19.2213 6.99219 19.3325C7.24168 19.4436 7.51187 19.5007 7.785 19.5C8.24719 19.4868 8.69518 19.3374 9.07278 19.0705C9.45038 18.8037 9.74076 18.4313 9.9075 18H15.6375C15.7185 18.3163 15.8726 18.6092 16.0875 18.855C16.2696 19.0586 16.4927 19.2213 16.7422 19.3325C16.9917 19.4436 17.2619 19.5007 17.535 19.5C17.9972 19.4868 18.4452 19.3374 18.8228 19.0705C19.2004 18.8037 19.4908 18.4313 19.6575 18H21.1575C21.3429 18.0011 21.5222 17.9335 21.6607 17.8103C21.7992 17.687 21.8871 17.5168 21.9075 17.3325L22.485 12.0825C22.5056 11.9526 22.4873 11.8195 22.4325 11.7ZM7.785 18C7.72281 18.0027 7.66081 17.9913 7.60366 17.9666C7.54651 17.9419 7.49569 17.9046 7.455 17.8575C7.39613 17.7847 7.35305 17.7004 7.32852 17.61C7.30399 17.5196 7.29853 17.4251 7.3125 17.3325C7.33166 17.1219 7.42257 16.9243 7.57003 16.7728C7.71748 16.6212 7.91252 16.5249 8.1225 16.5C8.18469 16.4973 8.24669 16.5087 8.30384 16.5334C8.36099 16.5581 8.41181 16.5954 8.4525 16.6425C8.51137 16.7153 8.55445 16.7996 8.57898 16.89C8.60351 16.9804 8.60897 17.0749 8.595 17.1675C8.57584 17.3781 8.48493 17.5757 8.33747 17.7272C8.19002 17.8788 7.99498 17.9751 7.785 18ZM17.535 18C17.4728 18.0027 17.4108 17.9913 17.3537 17.9666C17.2965 17.9419 17.2457 17.9046 17.205 17.8575C17.1461 17.7847 17.1031 17.7004 17.0785 17.61C17.054 17.5196 17.0485 17.4251 17.0625 17.3325C17.0817 17.1219 17.1726 16.9243 17.32 16.7728C17.4675 16.6212 17.6625 16.5249 17.8725 16.5C17.9347 16.4973 17.9967 16.5087 18.0538 16.5334C18.111 16.5581 18.1618 16.5954 18.2025 16.6425C18.2614 16.7153 18.3044 16.7996 18.329 16.89C18.3535 16.9804 18.359 17.0749 18.345 17.1675C18.3258 17.3781 18.2349 17.5757 18.0875 17.7272C17.94 17.8788 17.745 17.9751 17.535 18ZM20.91 12.75H17.595C17.4903 12.7498 17.3869 12.7276 17.2913 12.685C17.1957 12.6424 17.1101 12.5802 17.04 12.5025C16.9692 12.4237 16.9159 12.3309 16.8836 12.2301C16.8513 12.1292 16.8407 12.0227 16.8525 11.9175L17.1 9.6675C17.1221 9.48457 17.2108 9.31617 17.3491 9.19445C17.4874 9.07272 17.6657 9.00617 17.85 9.0075H19.5975L21 12.12L20.91 12.75Z"
                  fill="#804294"
                />
                <path
                  d="M3 12C3.19891 12 3.38968 11.921 3.53033 11.7803C3.67098 11.6397 3.75 11.4489 3.75 11.25C3.75 11.0511 3.67098 10.8603 3.53033 10.7197C3.38968 10.579 3.19891 10.5 3 10.5H2.25C2.05109 10.5 1.86032 10.579 1.71967 10.7197C1.57902 10.8603 1.5 11.0511 1.5 11.25C1.5 11.4489 1.57902 11.6397 1.71967 11.7803C1.86032 11.921 2.05109 12 2.25 12H3Z"
                  fill="#804294"
                />
              </svg>
              <span className="font-[lato] text-base text-[#464646]">
                Free insured shipping by Monday, Mar 11. Ships as complete ring
                with Diamond Selected by Monday, Mar 18.
              </span>
            </div>

            <div className="w-full flex gap-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 7.5V5.25C22.5 4.65326 22.2629 4.08097 21.841 3.65901C21.419 3.23705 20.8467 3 20.25 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H3.75C3.15326 3 2.58097 3.23705 2.15901 3.65901C1.73705 4.08097 1.5 4.65326 1.5 5.25V7.5H22.5Z"
                  fill="#804294"
                />
                <path
                  d="M1.5 9V20.25C1.5 20.8467 1.73705 21.419 2.15901 21.841C2.58097 22.2629 3.15326 22.5 3.75 22.5H20.25C20.8467 22.5 21.419 22.2629 21.841 21.841C22.2629 21.419 22.5 20.8467 22.5 20.25V9H1.5ZM16.2375 13.3193L10.9875 17.8193C10.844 17.9419 10.6595 18.006 10.4708 17.9986C10.2822 17.9913 10.1032 17.913 9.96975 17.7795L7.71975 15.5295C7.58313 15.388 7.50754 15.1986 7.50924 15.0019C7.51095 14.8053 7.58983 14.6172 7.72889 14.4781C7.86794 14.3391 8.05605 14.2602 8.2527 14.2585C8.44935 14.2568 8.6388 14.3324 8.78025 14.469L10.5398 16.2285L15.2648 12.1785C15.3391 12.1115 15.4261 12.06 15.5207 12.0272C15.6153 11.9943 15.7155 11.9807 15.8154 11.9872C15.9153 11.9936 16.0129 12.02 16.1024 12.0648C16.1919 12.1096 16.2716 12.1719 16.3367 12.2479C16.4018 12.324 16.451 12.4123 16.4814 12.5077C16.5118 12.6031 16.5229 12.7036 16.5138 12.8033C16.5048 12.903 16.4759 12.9999 16.4288 13.0882C16.3817 13.1766 16.3175 13.2546 16.2397 13.3177L16.2375 13.3193Z"
                  fill="#804294"
                />
              </svg>
              <span className="font-[lato] text-[#464646] font-normal">
                Free 30 Day Returns, Free Resizing. Free Lifetime Warranty.
              </span>
            </div>
            <div className="w-full flex py-4 gap-3 ">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_197_15614)">
                  <path
                    d="M22.244 9.95907C22.1779 6.51376 21.6979 3.97267 21.7045 3.97032C21.5048 3.58079 21.1546 3.25501 20.7262 3.0886C17.9137 1.99782 15.1481 0.956729 12.4518 0.0684473C12.1762 -0.0224902 11.8856 -0.0224902 11.6104 0.0684473C8.91464 0.954385 6.14948 1.9936 3.33745 3.08298C2.95917 3.2297 2.64182 3.5011 2.43511 3.8311C2.45104 3.83298 1.85714 5.68688 1.75589 9.78142C1.69589 13.8764 2.20589 15.1031 2.18901 15.1045C2.46511 16.0045 2.98167 16.92 3.72182 17.8509C4.54917 18.8906 5.66714 19.9645 7.01761 21.0202C9.25307 22.7747 11.3451 23.8233 11.4328 23.8603C11.6226 23.9531 11.8237 24.0005 12.0309 24C12.2385 24 12.4396 23.9527 12.629 23.8594C12.7171 23.8224 14.8115 22.7705 17.046 21.0164C18.397 19.9599 19.5149 18.8859 20.3428 17.8467C21.1359 16.8497 21.6721 15.8714 21.9314 14.9105C21.921 14.9091 22.296 13.4053 22.244 9.95954V9.95907ZM13.1437 12.6464V14.8294C13.1437 15.4444 12.6454 15.9427 12.0304 15.9431C11.4154 15.9431 10.9167 15.4449 10.9167 14.8299V12.6774C10.1142 12.2784 9.56198 11.4506 9.56198 10.4939C9.56198 9.14767 10.6532 8.05595 11.9995 8.05595C13.3457 8.05595 14.437 9.1472 14.4374 10.4934C14.4374 11.4263 13.9134 12.2367 13.1437 12.6464Z"
                    fill="#804294"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_197_15614">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className=" font-['Lato', sans-serif] text-[#464646]  ">
                  We inspect & verify authenticity before shipping.
                </p>

                <p className=" font-['Lato', sans-serif] text-[#464646] ">
                  100% Money-Back Guarantee.
                </p>
              </div>
            </div>
            <div className="w-full  h-48  flex gap-4 ">
              <div className="w-[30%]  h-full  ">
                <img className="h-full w-full object-contain" src={rectangle} />
              </div>
              <div className="w-[70%] h-full ">
                <div className="">
                  <p className="text-[#804294] font-[Tomato Grotesk] text-2xl font-semibold">
                    Uniquely Yours
                  </p>
                </div>
                <div className="w-80 py-2">
                  <p className="font-[lato] text-[#464646] text-lg wrap">
                    1/6 CTW. Diamond set with purchase over
                  </p>
                  <p className="font-[lato] text-[#464646] text-lg wrap">
                    $1,000.
                  </p>
                </div>

                <div className="w-80 ">
                  <p className="font-[lato] text-[#464646] text-lg wrap">
                    1/2 CTW. Diamond set with purchase over
                  </p>
                  <p className="font-[lato] text-[#464646] text-lg wrap">
                    $3,000.
                  </p>
                </div>
                <div className=" w-32">
                  <p className="cursor-pointer text-lg font-bold text-[#464646] font-['Lato', sans-serif]">
                    *Terms apply
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-5 border-[#DCDCDC]" />
            <div className="h-full w-full py-5 ">
              <h1 className="text-[#804294] font- font-medium text-2xl ">
                Diamond Information
              </h1>
              <div className="h-full w-full py-5 ">
                <ul className="grid grid-cols-2 w-full border-[#DCDCDC] border  ">
                  {diamondCharacteristics.map((property) => (
                    <li
                      className="border w-full flex gap-4 p-1.5"
                      key={property.name}
                    >
                      <div className="text-[#804294] font-medium text-sm h-full px-2 w-1/2">
                        {property.name}
                      </div>
                      :
                      <div className="w-1/2 h-full text-sm font-medium  px-3 text-nowrap text-[#464646]">
                        {" "}
                        {property.value}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiamondDetails;
