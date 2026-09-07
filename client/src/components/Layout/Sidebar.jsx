import { NavLink } from "react-router-dom";

function Sidebar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link";

  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" className={getLinkClass}>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/members" className={getLinkClass}>
            Members
          </NavLink>
        </li>

        <li>
          <NavLink to="/trainers" className={getLinkClass}>
            Trainers
          </NavLink>
        </li>

        <li>
          <NavLink to="/membership-plans" className={getLinkClass}>
            Membership Plans
          </NavLink>
        </li>

        <li>
          <NavLink to="/attendance" className={getLinkClass}>
            Attendance
          </NavLink>
        </li>

        <li>
          <NavLink to="/payments" className={getLinkClass}>
            Payments
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className={getLinkClass}>
            Profile
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;