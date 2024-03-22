import React from "react";
import CompletedProduct from "./subcomponents/CompletedProduct";
import OrderSummary from "./subcomponents/OrderSummary";

const Complete = () => {
  return (
    <div className="min-h-screen w-full p-20">
      <div className="min-h-[5vh] w-full py-">
        <h1 className=" font-['Lato', sans-serif] font-[500] text-[18px] text-[#804294]">
          My Cart (2 items)
        </h1>
      </div>
      <div className="h-[95vh] w-full flex gap-5">
        <div className="h-full w-2/3 ">
          <CompletedProduct />
        </div>
        <div className="h-full w-1/3 ">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Complete;
