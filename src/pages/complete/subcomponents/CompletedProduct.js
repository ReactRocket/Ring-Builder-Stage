import React from "react";
import demoRingImg from "../../../resources/images/complete/demoRingImg.svg";
import demoDiamondImg from "../../../resources/images/complete/demoDiamondImg.svg";
import ProductCard from "./ProductCard";

const defaultData = [
  {
    title: "Leah 4 Prong Solitaire Engagement Diamond Ring",
    subTitle: "LOLA DIAMOND ENGAGEMENT RING, WHITE GOLD 14K",
    img: demoRingImg,
    discountedPrice: "450.00",
    originalPrice: "599.99",
    type: "ring",
  },
  {
    title: "0.7 Carat Emerald Lab Diamond",
    subTitle: "Very Good Cut, E Color, VS2 Clarity, IGI SKU: 12704196",
    img: demoDiamondImg,
    discountedPrice: "384.00",
    originalPrice: "599.99",
    type: "-",
  },
];

const CompletedProduct = ({ data = defaultData }) => {
  return (
    <div className="min-h-[50vh] w-full ">
      <div className=" w-full pb-5">
        <h1 className=" font-['Lato', sans-serif] font-[500] text-[18px] leading-[20px] text-[#00000]">
          Engagement Ring (Completed)
        </h1>
      </div>
      <div className="h-full w-full border flex justify-center items-center flex-col gap-5 p-5">
        {data?.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CompletedProduct;
