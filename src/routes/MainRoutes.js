import { Routes, Route } from "react-router-dom";
import Diamond from "../pages/diamond/Diamond";
import DiamondView from "../pages/diamond/subcomponents/DiamondView";
import Setting from "../pages/setting/Setting";
import SettingView from "../pages/setting/subcomponents/SettingView";
import Complete from "../pages/complete/Complete";
import Test from "../pages/test/Test";
import Error_404 from "../pages/error/Error_404";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/diamond" element={<Diamond />} />
      <Route path="/diamond=view" element={<DiamondView />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/setting=view" element={<SettingView />} />
      <Route path="/complete" element={<Complete />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<Error_404 />} />
    </Routes>
  );
};

export default MainRoutes;
