import React from "react";
import productIMG from "./resources/images/product_card/ProductChild.svg";

const ProductCard = () => {
  return (
    <div className="min-h-[45vh] w-full border border-[#DCDCDC] flex justify-center items-center">
      <div className="w-[90%] h-full py-10  flex-col flex justify-between items-center gap-3">
        <div className="h-[60%]  w-full flex justify-center items-center">
          <img
            src={productIMG}
            alt="product img"
            className="object-cover aspect-square h-3/4 w-3/4"
          />
        </div>
        <div className="h-[30%] w-full flex justify-between flex-col items-center gap-5">
          <p className="w-full text-center font-['Lato',sans-serif] text-[#464646] font-[400] leading-[18px] text-[14px] px-3 ">
            <span className="text-center text-wrap ">
              ROUND 0.7 E SI1 EXCELLENT GIA
            </span>
          </p>
          <p className="w-full text-center font-['Lato',sans-serif] text-[#804294] font-medium text-[18px] leading-[20px]">
            $1324.00 (Setting Price)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
