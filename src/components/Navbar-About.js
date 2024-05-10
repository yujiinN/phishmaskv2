import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-customBlue-50  to-customBlue-500/95 text-white p-4 flex justify-between items-center shadow-inner">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={require("../images/logo-phishmask.png")}
          alt="Logo"
          className="h-12"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
