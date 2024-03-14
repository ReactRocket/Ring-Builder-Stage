/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diamond from "./pages/diamond/Diamond";
import Setting from "./pages/setting/Setting";
import Complete from "./pages/complete/Complete";
import Test from "./pages/test/Test";
import Error_404 from "./pages/error/Error_404";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Diamond />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error_404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
