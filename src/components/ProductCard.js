import React from "react";
import ProductChild from "../resources/images/ProductChild.svg";

const ProductCard = () => {
  return (
    <>
      <div className="px-10 py-10">
        <div className="h-[450px] w-[383px] border border-3 border-[#DCDCDC] flex flex-col justify-around items-center">

          {/* // for img */}
          <div className="w-[260px] h-[260px]  bg-white flex justify-center items-center ">
            <img src={ProductChild} />
          </div>

          <div className="h-[38px] w-[216px] text-center flex justify-center items-center gap-10">
            <span className="text-center  w-full text-nowrap font-[500]  leading-[19.2px]  font-[lato] text-[16px] text-[#464646]">
              <span class="inline-block">ROUND 0.7 E SI1 EXCELLENT</span>
              <span class="block mx-auto">GIA</span>
            </span>
          </div>
          <div className="h-[30px] w-[234px] flex justify-center items-center mt-5 ">
            <span className="text-center text-[#804294] font-[lato] w-[500px] text-[22px]">
              $1324.00 (Setting Price)
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
