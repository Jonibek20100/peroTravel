import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="xato">

          <div className="co">
            <div className="joka"></div>
          </div>
<div className="burger-wrapper">
  <div
    className={open ? "burger open" : "burger"}
    onClick={() => setOpen(!open)}
  >
    <div className="rotate1"></div>
    <div className="fade"></div>
    <div className="line"></div>
  </div>

  <ul className={open ? "menu-links show" : "menu-links"}>
    <li><a href="/">Home</a></li>
    <li><a href="/tours">Tours</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</div>
            <ul className={open ? "nav-links open" : "nav-links"}>
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/tours" onClick={() => setOpen(false)}>Tours</Link></li>
              <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
