import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ChooseDiamonds from "../../components/ChooseDiamonds";
import ProductFilter from "../../components/ProductFilter";
import ProductGridView from "../../components/ProductGridView";
import ProductTableView from "../../components/ProductTableView";
import AdvancedFilter from "../../components/AdvancedFilter";

const Diamond = () => {
  const [productView, setProductView] = useState(false);
  return (
    <div className="min-h-screen max-w-screen  ">
      <div className="h-[90%] w-[85%] flex-col py-10 mx-auto flex justify-start items-center">
        <Breadcrumb />
        <ChooseDiamonds />
        <AdvancedFilter />
        <ProductFilter
          setProductView={setProductView}
          productView={productView}
        />
        {productView ? <ProductTableView /> : <ProductGridView />}
      </div>
    </div>
  );
};

export default Diamond;
