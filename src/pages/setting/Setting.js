import React, { useState } from "react";
import AdvancedFilter from "../../components/AdvancedFilter";
import ProductFilter from "../../components/ProductFilter";
import ProductTableView from "./subcomponents/ProductTableView";
import ProductGridView from "../../components/ProductGridView";

const Setting = () => {
  const [productView, setProductView] = useState(false);

  return (
    <>
      <AdvancedFilter />
      <ProductFilter
        productView={productView}
        setProductView={setProductView}
        title={"Ring Setting"}
        description={
          "898 Engagement Ring Settings Can't find what you're looking for?"
        }
      />
      {productView ? <ProductTableView /> : <ProductGridView />}
    </>
  );
};

export default Setting;
