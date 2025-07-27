import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
    <div className="joka">
        <div className="logo"></div>
    </div>
<div className="xato">
        <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/tours" onClick={() => setOpen(false)}>Tours</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
</div>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;
