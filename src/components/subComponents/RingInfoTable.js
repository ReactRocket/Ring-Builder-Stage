import React from "react";

const RingInfoTable = () => {
  const ringInfo = [
    {
      name: "SKU",
      value: "SL0335-14K-W",
    },
    {
      name: "Setting Style",
      value: "Solitaire",
    },
    {
      name: "Sizes Available",
      value: "3.0 to 12.0",
    },
    {
      name: "Width Range",
      value: "1.70mm to 1.80mm",
    },
    {
      name: "Can be set with",
      value:
        "Round, Cushion, Oval, Princess, Emerald, Radiant, Pear, Asscher, Heart",
    },
    {
      name: "Metal",
      value: "14K White Gold",
    },
  ];
  return (
    <>
      <div className="w-full h-full   py-10">
        <div className="w-full  h-72">
          <div>
            <p className="text-[#804294]  font-['Lato', sans-serif] font-medium text-lg">
              Ring Information
            </p>
          </div>

          <div className="h-full w-full py-5  ">
            <ul className="w-full">
              {ringInfo.map((item, index) => {
                return (
                  <li key={index} className="flex ">
                    <div className="font-[Poppins] text-[#804294] w-1/4   text-sm font-medium leading-7">
                      {item.name}
                    </div>
                    <div className="text-sm font-[Poppins] w-3/4 font-normal text-nowrap  text-[#464646]">
                      {item.value}
                    </div>
                  </li>
                );
              })}
            </ul>
            <hr className="my-5  border-[#DCDCDC] w-full" />
            <div className="w-full flex gap-2 h-12  ">
            <div className="w-1/3 flex h-full justify-center items-center  border border-[#804294] cursor-pointer rounded-md">
              <div className="flex gap-2 justify-center items-center ">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_197_16082)">
                    <path
                      d="M25.9716 11.465C24.556 10.8988 22.9141 11.5237 22.2335 12.8869L21.251 14.8525V4.375C21.251 2.99625 20.1297 1.875 18.751 1.875C18.2897 1.875 17.8566 2.00063 17.4854 2.21938C17.3454 0.9725 16.2847 0 15.001 0C13.6222 0 12.501 1.12125 12.501 2.5V2.83563C12.1329 2.6225 11.706 2.5 11.251 2.5C9.87223 2.5 8.75098 3.62125 8.75098 5V5.96062C8.38285 5.7475 7.95598 5.625 7.50098 5.625C6.12223 5.625 5.00098 6.74625 5.00098 8.125V17.2087C5.00098 18.7356 5.3216 20.2156 5.95348 21.6056L8.12598 26.385V28.1244C8.12598 29.1581 8.96723 29.9994 10.001 29.9994H18.751C19.7847 29.9994 20.626 29.1581 20.626 28.1244V26.4756L22.5197 24.2019C23.286 23.2844 23.8866 22.2506 24.3066 21.1306L27.031 13.8637C27.386 12.9169 26.911 11.8412 25.9716 11.465ZM9.37535 13.125V11.875H13.1254V13.125H9.37535ZM10.0004 5C10.0004 4.31063 10.561 3.75 11.2504 3.75C11.9397 3.75 12.5004 4.31063 12.5004 5V10.625H10.0004V5ZM25.8604 13.4256L23.136 20.6925C22.7654 21.6806 22.2354 22.5925 21.5597 23.4025L19.5204 25.85C19.4272 25.9625 19.376 26.1031 19.376 26.25V28.125C19.376 28.47 19.096 28.75 18.751 28.75H10.001C9.65598 28.75 9.37598 28.47 9.37598 28.125V26.25C9.37598 26.1606 9.35723 26.0725 9.31973 25.9912L7.0916 21.0881C6.53348 19.8612 6.25098 18.5562 6.25098 17.2087V8.125C6.25098 7.43563 6.8116 6.875 7.50098 6.875C8.19035 6.875 8.75098 7.43563 8.75098 8.125V10.7987C8.3791 11.0156 8.12598 11.4144 8.12598 11.875V13.125C8.12598 13.5856 8.3791 13.9844 8.75098 14.2013V15.625C8.75098 15.9706 9.03035 16.25 9.37598 16.25C9.7216 16.25 10.001 15.9706 10.001 15.625V14.375H12.501V15.625C12.501 15.9706 12.7804 16.25 13.126 16.25C13.4716 16.25 13.751 15.9706 13.751 15.625V14.2013C14.1229 13.9844 14.376 13.5856 14.376 13.125V11.875C14.376 11.4144 14.1229 11.0156 13.751 10.7987V2.5C13.751 1.81062 14.3116 1.25 15.001 1.25C15.6904 1.25 16.251 1.81062 16.251 2.5V15.625C16.251 15.9706 16.5304 16.25 16.876 16.25C17.2216 16.25 17.501 15.9706 17.501 15.625V4.375C17.501 3.68563 18.0616 3.125 18.751 3.125C19.4404 3.125 20.001 3.68563 20.001 4.375V17.5C20.001 17.79 20.2004 18.0413 20.4829 18.1088C20.7616 18.1731 21.056 18.0394 21.1854 17.78L23.3522 13.4462C23.7454 12.66 24.6941 12.3019 25.5079 12.6262C25.821 12.7519 25.9797 13.1106 25.861 13.4263L25.8604 13.4256Z"
                      fill="#804294"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_197_16082">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#804294] font-medium">
                  Try in your hand
                </span>
              </div>
            </div>
            <div className="w-1/3 h-full border border-[#804294] flex justify-center rounded-md cursor-pointer">
              <div className="flex justify-center items-center   gap-1">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.625 18.75C5.625 18.5014 5.72377 18.2629 5.89959 18.0871C6.0754 17.9113 6.31386 17.8125 6.5625 17.8125H8.4375V15.9375C8.4375 15.6889 8.53627 15.4504 8.71209 15.2746C8.8879 15.0988 9.12636 15 9.375 15C9.62364 15 9.8621 15.0988 10.0379 15.2746C10.2137 15.4504 10.3125 15.6889 10.3125 15.9375V17.8125H12.1875C12.4361 17.8125 12.6746 17.9113 12.8504 18.0871C13.0262 18.2629 13.125 18.5014 13.125 18.75C13.125 18.9986 13.0262 19.2371 12.8504 19.4129C12.6746 19.5887 12.4361 19.6875 12.1875 19.6875H10.3125V21.5625C10.3125 21.8111 10.2137 22.0496 10.0379 22.2254C9.8621 22.4012 9.62364 22.5 9.375 22.5C9.12636 22.5 8.8879 22.4012 8.71209 22.2254C8.53627 22.0496 8.4375 21.8111 8.4375 21.5625V19.6875H6.5625C6.31386 19.6875 6.0754 19.5887 5.89959 19.4129C5.72377 19.2371 5.625 18.9986 5.625 18.75ZM21.5625 23.4375H23.4375C23.6861 23.4375 23.9246 23.3387 24.1004 23.1629C24.2762 22.9871 24.375 22.7486 24.375 22.5C24.375 22.2514 24.2762 22.0129 24.1004 21.8371C23.9246 21.6613 23.6861 21.5625 23.4375 21.5625H21.5625C21.3139 21.5625 21.0754 21.6613 20.8996 21.8371C20.7238 22.0129 20.625 22.2514 20.625 22.5C20.625 22.7486 20.7238 22.9871 20.8996 23.1629C21.0754 23.3387 21.3139 23.4375 21.5625 23.4375ZM21.5625 15.9375H23.4375C23.6861 15.9375 23.9246 15.8387 24.1004 15.6629C24.2762 15.4871 24.375 15.2486 24.375 15C24.375 14.7514 24.2762 14.5129 24.1004 14.3371C23.9246 14.1613 23.6861 14.0625 23.4375 14.0625H21.5625C21.3139 14.0625 21.0754 14.1613 20.8996 14.3371C20.7238 14.5129 20.625 14.7514 20.625 15C20.625 15.2486 20.7238 15.4871 20.8996 15.6629C21.0754 15.8387 21.3139 15.9375 21.5625 15.9375ZM15.9375 15.9375H17.8125C18.0611 15.9375 18.2996 15.8387 18.4754 15.6629C18.6512 15.4871 18.75 15.2486 18.75 15C18.75 14.7514 18.6512 14.5129 18.4754 14.3371C18.2996 14.1613 18.0611 14.0625 17.8125 14.0625H15.9375C15.6889 14.0625 15.4504 14.1613 15.2746 14.3371C15.0988 14.5129 15 14.7514 15 15C15 15.2486 15.0988 15.4871 15.2746 15.6629C15.4504 15.8387 15.6889 15.9375 15.9375 15.9375ZM21.5625 19.6875H23.4375C23.6861 19.6875 23.9246 19.5887 24.1004 19.4129C24.2762 19.2371 24.375 18.9986 24.375 18.75C24.375 18.5014 24.2762 18.2629 24.1004 18.0871C23.9246 17.9113 23.6861 17.8125 23.4375 17.8125H21.5625C21.3139 17.8125 21.0754 17.9113 20.8996 18.0871C20.7238 18.2629 20.625 18.5014 20.625 18.75C20.625 18.9986 20.7238 19.2371 20.8996 19.4129C21.0754 19.5887 21.3139 19.6875 21.5625 19.6875ZM28.125 7.5V25.3125C28.125 26.0584 27.8287 26.7738 27.3012 27.3012C26.7738 27.8287 26.0584 28.125 25.3125 28.125H4.6875C3.94158 28.125 3.22621 27.8287 2.69876 27.3012C2.17132 26.7738 1.875 26.0584 1.875 25.3125V7.5C1.875 6.75408 2.17132 6.03871 2.69876 5.51126C3.22621 4.98382 3.94158 4.6875 4.6875 4.6875H5.625V2.8125C5.625 2.56386 5.72377 2.3254 5.89959 2.14959C6.0754 1.97377 6.31386 1.875 6.5625 1.875C6.81114 1.875 7.0496 1.97377 7.22541 2.14959C7.40123 2.3254 7.5 2.56386 7.5 2.8125V4.6875H22.5V2.8125C22.5 2.56386 22.5988 2.3254 22.7746 2.14959C22.9504 1.97377 23.1889 1.875 23.4375 1.875C23.6861 1.875 23.9246 1.97377 24.1004 2.14959C24.2762 2.3254 24.375 2.56386 24.375 2.8125V4.6875H25.3125C26.0584 4.6875 26.7738 4.98382 27.3012 5.51126C27.8287 6.03871 28.125 6.75408 28.125 7.5ZM26.25 11.25H3.75V25.3125C3.75 25.5611 3.84877 25.7996 4.02459 25.9754C4.2004 26.1512 4.43886 26.25 4.6875 26.25H25.3125C25.5611 26.25 25.7996 26.1512 25.9754 25.9754C26.1512 25.7996 26.25 25.5611 26.25 25.3125V11.25ZM26.25 7.5C26.25 7.25136 26.1512 7.0129 25.9754 6.83709C25.7996 6.66127 25.5611 6.5625 25.3125 6.5625H4.6875C4.43886 6.5625 4.2004 6.66127 4.02459 6.83709C3.84877 7.0129 3.75 7.25136 3.75 7.5V9.375H26.25V7.5ZM15.9375 23.4375H17.8125C18.0611 23.4375 18.2996 23.3387 18.4754 23.1629C18.6512 22.9871 18.75 22.7486 18.75 22.5C18.75 22.2514 18.6512 22.0129 18.4754 21.8371C18.2996 21.6613 18.0611 21.5625 17.8125 21.5625H15.9375C15.6889 21.5625 15.4504 21.6613 15.2746 21.8371C15.0988 22.0129 15 22.2514 15 22.5C15 22.7486 15.0988 22.9871 15.2746 23.1629C15.4504 23.3387 15.6889 23.4375 15.9375 23.4375ZM15.9375 19.6875H17.8125C18.0611 19.6875 18.2996 19.5887 18.4754 19.4129C18.6512 19.2371 18.75 18.9986 18.75 18.75C18.75 18.5014 18.6512 18.2629 18.4754 18.0871C18.2996 17.9113 18.0611 17.8125 17.8125 17.8125H15.9375C15.6889 17.8125 15.4504 17.9113 15.2746 18.0871C15.0988 18.2629 15 18.5014 15 18.75C15 18.9986 15.0988 19.2371 15.2746 19.4129C15.4504 19.5887 15.6889 19.6875 15.9375 19.6875Z"
                    fill="#804294"
                  />
                </svg>

                <span className="text-[#804294] font-medium text-nowrap">
                  Book an Appointment
                </span>
              </div>
            </div>
            <div className="w-1/3 h-full border border-[#804294] flex justify-center items-center  cursor-pointer  rounded-md">
              <div className=" flex justify-center items-center gap-2  ">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 30 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.4886 0.130806C15.1866 -0.0436019 14.8144 -0.0436019 14.5124 0.130806L7.66585 4.08365C7.36382 4.25802 7.17773 4.58029 7.17773 4.92906V12.8347C7.17773 13.1835 7.36382 13.5058 7.66585 13.6802L14.5124 17.633C14.8144 17.8074 15.1866 17.8074 15.4886 17.633L22.3351 13.6802C22.6372 13.5058 22.8232 13.1835 22.8232 12.8347V4.92906C22.8232 4.58029 22.6372 4.25802 22.3351 4.08365L15.4886 0.130806ZM9.1302 12.2711V6.61982L14.0243 9.44541V15.0967L9.1302 12.2711ZM15.0005 7.75454L10.1065 4.92899L15.0005 2.10351L19.957 4.96511L15.0005 7.75454ZM15.9767 9.45202L20.8708 6.69259V12.2711L15.9767 15.0967V9.45202Z"
                    fill="#804294"
                  />
                  <path
                    d="M1.95247 4.09916C1.95247 2.97939 2.86022 2.0716 3.98003 2.0716H7.22773C7.76691 2.0716 8.20396 1.63455 8.20396 1.09537C8.20396 0.55623 7.76691 0.119141 7.22773 0.119141H3.98003C1.78193 0.119141 0 1.90106 0 4.09916V17.6674C0 19.8655 1.78193 21.6474 3.98003 21.6474H14.0238V24.9345H8.11389C7.57474 24.9345 7.13765 25.3716 7.13765 25.9107C7.13765 26.4499 7.57474 26.887 8.11389 26.887H21.8865C22.4256 26.887 22.8627 26.4499 22.8627 25.9107C22.8627 25.3716 22.4256 24.9345 21.8865 24.9345H15.9763V21.6474H26.02C28.2181 21.6474 30 19.8655 30 17.6674V4.09916C30 1.90106 28.2181 0.119141 26.02 0.119141H22.758C22.2189 0.119141 21.7818 0.55623 21.7818 1.09537C21.7818 1.63455 22.2189 2.0716 22.758 2.0716H26.02C27.1398 2.0716 28.0475 2.97939 28.0475 4.09916V17.6674C28.0475 18.7872 27.1398 19.695 26.02 19.695H3.98003C2.86022 19.695 1.95247 18.7872 1.95247 17.6674V4.09916Z"
                    fill="#804294"
                  />
                </svg>
                <span className=" font-medium text-[#804294]">
                  Virtual Consultation
                </span>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default RingInfoTable;
