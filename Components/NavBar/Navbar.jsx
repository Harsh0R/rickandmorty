import React from "react";
import Style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Style.header}>
      <nav className={Style.nav}>
        <div className={Style.logo}>
          <a href="/">
            <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" />
          </a>
        </div>
        <div className={Style.icon}>
          <span className={Style.toggle}>☰</span>
        </div>
        <ul className={Style.listitem}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/location">Location</a>
          </li>
          <li>
            <a href="/episodes">Episodes</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
