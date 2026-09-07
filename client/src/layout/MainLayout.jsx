import { Outlet } from "react-router-dom";

import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />

      <div className="layout-body">
        <Sidebar />

        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;