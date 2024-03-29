/* eslint-disable react/jsx-pascal-case */
import React from "react";

import MainRoutes from "./routes/MainRoutes";
import Breadcrumb from "./components/Breadcrumb";

const App = () => {
  return (
    <div className="min-h-screen max-w-screen ">
      <div className="h-[90%] w-[85%] flex-col py-10 mx-auto flex justify-start items-center">
        <Breadcrumb />
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
