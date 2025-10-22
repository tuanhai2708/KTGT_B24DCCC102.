import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">BlogManager</div>
      <div className="menu">
        <NavLink
          to="/"
          end
          className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : "")}
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : "")}
        >
          Viết bài
        </NavLink>
      </div>
    </nav>
  );
};
