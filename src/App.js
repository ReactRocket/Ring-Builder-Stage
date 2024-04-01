/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MainRoutes from "./routes/MainRoutes";
import Breadcrumb from "./components/Breadcrumb";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

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
