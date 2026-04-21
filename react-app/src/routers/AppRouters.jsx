import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "../pages/HomePages";
import ActivityStats from "../components/ActivityStats";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN */}
        <Route path="/" element={<HomePages />} />

        {/* REQUIRED ROUTES */}
        <Route path="/activities" element={<HomePages />} />
        <Route path="/activities/filter" element={<HomePages />} />
        <Route path="/activities/stats" element={<ActivityStats />} />

        {/* ID ROUTE */}
        <Route path="/activities/:id" element={<HomePages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;