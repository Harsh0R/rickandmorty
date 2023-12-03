"use client";
import React from "react";
import Style from "./Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "../../img";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  function openMenu() {
    setIsClick(!isClick);
  }

  return (
    <div className={Style.header}>
      <nav className={Style.nav}>
        <div>
          <div className={Style.logo}>
            <a href="/">
              <Image src={images.logo} width={70} height={70} alt="Logo" />
            </a>
          </div>
        </div>

        <div>
          <div className={Style.headingInNav}>The Rick and Morty</div>
        </div>

        <div>
          <div className={Style.icon} onClick={openMenu}>
            ☰
          </div>
        </div>

        <div>
          <ul className={Style.listitem}>
            <li className={activeMenu === "/" ? Style.active : ""}>
              <Link href="/" onClick={() => setActiveMenu("/")}>
                Home
              </Link>
            </li>
            <li className={activeMenu === "/location" ? Style.active : ""}>
              <Link href="/location" onClick={() => setActiveMenu("/location")}>
                Location
              </Link>
            </li>
            <li className={activeMenu === "/episodes" ? Style.active : ""}>
              <Link href="/episodes" onClick={() => setActiveMenu("/episodes")}>
                Episodes
              </Link>
            </li>
            <li className={activeMenu === "/#2" ? Style.active : ""}>
              <Link href="/#" onClick={() => setActiveMenu("/#2")}>
                Contact us
              </Link>
            </li>
            <li className={activeMenu === "/##1" ? Style.active : ""}>
              <Link href="/#" onClick={() => setActiveMenu("/##1")}>
                About us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {isClick && (
        <div>
          <ul className={Style.listitemInMob}>
            <li className={activeMenu === "/" ? Style.active : ""}>
              <Link href="/" onClick={() => setActiveMenu("/")}>
                Home
              </Link>
            </li>
            <li className={activeMenu === "/location" ? Style.active : ""}>
              <Link href="/location" onClick={() => setActiveMenu("/location")}>
                Location
              </Link>
            </li>
            <li className={activeMenu === "/episodes" ? Style.active : ""}>
              <Link href="/episodes" onClick={() => setActiveMenu("/episodes")}>
                Episodes
              </Link>
            </li>
            <li className={activeMenu === "/#2" ? Style.active : ""}>
              <Link href="/#" onClick={() => setActiveMenu("/#2")}>
                Contact us
              </Link>
            </li>
            <li className={activeMenu === "/##1" ? Style.active : ""}>
              <Link href="/#" onClick={() => setActiveMenu("/##1")}>
                About us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
