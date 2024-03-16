import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ChooseDiamonds from "../../components/ChooseDiamonds";
import ProductTableView from "../../components/ProductTableView";

const Diamond = () => {
  return (
    <div className="min-h-screen max-w-screen  ">
      <div className="h-[90%] w-[85%] flex-col gap-5  py-10 mx-auto flex justify-start items-center">
        <Breadcrumb />
        <ChooseDiamonds />

        <ProductTableView />
      </div>
    </div>
  );
};

export default Diamond;
