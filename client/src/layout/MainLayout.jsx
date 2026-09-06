import { NavLink } from "react-router-dom";

function MainLayout({ children }) {
  const getLinkClass = ({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link";

  return (
    <div className="main-layout">
      <header className="navbar">
        <h2>Gym Management System</h2>

        <div className="navbar-right">
          <span>Admin</span>
          <button className="logout-button">Logout</button>
        </div>
      </header>

      <div className="layout-body">
        <aside className="sidebar">
          <h3>Menu</h3>

          <ul className="sidebar-menu">
            <li><NavLink to="/dashboard" className={getLinkClass}>Dashboard</NavLink></li>
            <li><NavLink to="/members" className={getLinkClass}>Members</NavLink></li>
            <li><NavLink to="/trainers" className={getLinkClass}>Trainers</NavLink></li>
            <li><NavLink to="/membership-plans" className={getLinkClass}>Membership Plans</NavLink></li>
            <li><NavLink to="/attendance" className={getLinkClass}>Attendance</NavLink></li>
            <li><NavLink to="/payments" className={getLinkClass}>Payments</NavLink></li>
            <li><NavLink to="/profile" className={getLinkClass}>Profile</NavLink></li>
          </ul>
        </aside>

        <main className="main-content">
          {children}
        </main>
      </div>

      <footer className="footer">
        <p>© 2026 Gym Management System</p>
      </footer>
    </div>
  );
}

export default MainLayout;