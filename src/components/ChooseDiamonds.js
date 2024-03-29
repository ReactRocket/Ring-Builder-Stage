import React, { useState } from "react";

const ChooseDiamonds = () => {
  const [option, SetOption] = useState(1);
  return (
    <div className="mt-10    h-12 lg:w-full flex justify-center items-center ">
      <div className="h-full lg:w-[40%] w-40%   bg-[#F0F0F0] border rounded-md   flex shadow-inner p-1 gap-3">
        <button
          className={`${
            option === 1 ? "selected" : ""
          } h-full w-full text-center transition-colors duration-500 rounded-md gap-2 flex justify-center text-sm items-center ${
            option === 1 ? "bg-white" : "bg-[#F0F0F0]"
          }`}
          onClick={() => SetOption(1)}
        >
          <span className="h-5 w-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_277_19)">
                <path
                  d="M19.9013 7.32354L16.6333 2.07303C16.514 1.88132 16.3042 1.76476 16.0784 1.76476H3.92167C3.69597 1.76476 3.48617 1.88132 3.36675 2.07303L0.0988094 7.32354C-0.0580643 7.57561 -0.0256037 7.90154 0.178106 8.11744L9.52444 18.03C9.64795 18.1609 9.82006 18.2352 10 18.2352C10.18 18.2352 10.3521 18.1609 10.4756 18.0298L19.8219 8.11744C20.0255 7.90131 20.0581 7.57561 19.9013 7.32354ZM10.0001 16.6289L1.47462 7.58694L4.28483 3.07193H15.7154L18.5255 7.58694L10.0001 16.6289Z"
                  fill={`${option === 1 ? "#804294" : "#787878"}`}
                />
                <path
                  d="M19.3464 7.01526H0.653687V8.32244H19.3464V7.01526Z"
                  fill={`${option === 1 ? "#804294" : "#787878"}`}
                />
                <path
                  d="M6.71379 7.60634L7.72163 2.54603L6.43949 2.29068L5.39376 7.54118C5.36915 7.66536 5.38091 7.79392 5.42798 7.91157L9.3931 17.8243L10.6068 17.339L6.71379 7.60634Z"
                  fill={`${option === 1 ? "#804294" : "#787878"}`}
                />
                <path
                  d="M14.6479 7.48869L13.5586 2.39069L12.2804 2.66389L13.3281 7.56647L9.39392 17.3376L10.6063 17.8256L14.6152 7.86951C14.6636 7.74861 14.6751 7.61592 14.6479 7.48869Z"
                  fill={`${option === 1 ? "#804294" : "#787878"}`}
                />
              </g>
              <defs>
                <clipPath id="clip0_277_19">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="">
            <p
              className={`${
                option === 1 ? "text-[#804294]" : "text-[#787878]"
              }  font-['Lato', sans-serif] w-32 h-5 text-nowrap font-semibold text-[#804294]}`}
            >
              Natural Diamonds
            </p>
          </div>
        </button>

        <button
          className={`option ${
            option === 2 ? "selected" : ""
          } h-full w-full text-center  transition-colors duration-100  rounded-md gap-2 flex justify-center text-sm items-center ${
            option === 2 ? "bg-white " : "bg-[#F0F0F0]"
          }`}
          onClick={() => SetOption(2)}
        >
          <span className="h-5 w-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_277_19)">
                <path
                  d="M19.9013 7.32354L16.6333 2.07303C16.514 1.88132 16.3042 1.76476 16.0784 1.76476H3.92167C3.69597 1.76476 3.48617 1.88132 3.36675 2.07303L0.0988094 7.32354C-0.0580643 7.57561 -0.0256037 7.90154 0.178106 8.11744L9.52444 18.03C9.64795 18.1609 9.82006 18.2352 10 18.2352C10.18 18.2352 10.3521 18.1609 10.4756 18.0298L19.8219 8.11744C20.0255 7.90131 20.0581 7.57561 19.9013 7.32354ZM10.0001 16.6289L1.47462 7.58694L4.28483 3.07193H15.7154L18.5255 7.58694L10.0001 16.6289Z"
                  fill={`${option === 2 ? "#4FAB5E" : "#787878"}`}
                />
                <path
                  d="M19.3464 7.01526H0.653687V8.32244H19.3464V7.01526Z"
                  fill={`${option === 2 ? "#4FAB5E" : "#787878"}`}
                />
                <path
                  d="M6.71379 7.60634L7.72163 2.54603L6.43949 2.29068L5.39376 7.54118C5.36915 7.66536 5.38091 7.79392 5.42798 7.91157L9.3931 17.8243L10.6068 17.339L6.71379 7.60634Z"
                  fill={`${option === 2 ? "#4FAB5E" : "#787878"}`}
                />
                <path
                  d="M14.6479 7.48869L13.5586 2.39069L12.2804 2.66389L13.3281 7.56647L9.39392 17.3376L10.6063 17.8256L14.6152 7.86951C14.6636 7.74861 14.6751 7.61592 14.6479 7.48869Z"
                  fill={`${option === 2 ? "#4FAB5E" : "#787878"}`}
                />
              </g>
              <defs>
                <clipPath id="clip0_277_19">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className=" ">
            <p
              className={`${
                option === 2 ? "text-[#4FAB5E]  " : "text-[#787878]"
              }  font-['Lato', sans-serif] w-32 h-5 text-center text-nowrap font-semibold text-[#787878]}`}
            >
              Lab Grown Diamonds
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChooseDiamonds;
