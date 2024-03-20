import React from "react";
import ProductCard from "./ProductCard";

const data = [
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
  {
    img: "sdd",
    title: "sd",
    price: "sd",
    type: "settng",
  },
];

const ProductGridView = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-4 gap-5 border-t py-10 px-5">
      {data?.map((item, index) => {
        return <ProductCard />;
      })}
    </div>
  );
};

export default ProductGridView;
