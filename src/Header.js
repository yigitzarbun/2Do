import React from "react";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex justify-between py-4 bg-black text-white font-bold text-lg">
      <Link to="/" className="ml-4">
        2-Do
      </Link>
      <nav className="mr-4 flex justify-between w-1/2">
        <NavLink to="/" className="" activeClassName="active">
          Tasks
        </NavLink>
        <NavLink to="/categories" className="" activeClassName="active">
          Categories
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
