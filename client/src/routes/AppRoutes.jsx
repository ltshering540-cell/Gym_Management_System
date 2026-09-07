import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Members from "../pages/Members";
import Trainers from "../pages/Trainers";
import MembershipPlans from "../pages/MembershipPlans";
import Attendance from "../pages/Attendance";
import Payments from "../pages/Payments";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route
          path="/membership-plans"
          element={<MembershipPlans />}
        />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;