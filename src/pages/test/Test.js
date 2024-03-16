import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const Test = () => {
  return (
    <div className="min-h-screen max-w-screen  flex-col gap-5  py-10 mx-auto flex justify-start items-center">
      <div className="h-[90%] w-[85%]">
        <Breadcrumb />
      </div>
    </div>
  );
};

export default Test;
