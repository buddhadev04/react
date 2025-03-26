import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px" }}>
          <li>
            <NavLink
              to="/"
              exact
              style={({ isActive }) => ({
                color: isActive ? "red" : "black", // Change color when active
                textDecoration: "none",
                padding: "10px",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black", // Change color when active
                textDecoration: "none",
                padding: "10px",
              })}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black", // Change color when active
                textDecoration: "none",
                padding: "10px",
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
