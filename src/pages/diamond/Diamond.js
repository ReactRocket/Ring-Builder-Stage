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
    <>
      <ChooseDiamonds />
      <AdvancedFilter />
      <ProductFilter
        setProductView={setProductView}
        productView={productView}
      />
      {productView ? <ProductTableView /> : <ProductGridView />}
    </>
  );
};

export default Diamond;
