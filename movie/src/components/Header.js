import React, { useState } from "react";
import logo from "../assets/logo.png";
import NavItems from "./NavItems";
import NavItemsData from "../data/NavItemsData";
import Search from "./Search";
import Button from "./Button";

export default function Header({ scroll }) {
  const [navList, setNavList] = useState(NavItemsData);

  const handleNavOnclick = (id) => {
    const newNavList = navList.map(nav => {
      nav.active = false;
      if (nav._id === id) {
        nav.active = true;
      }
      return nav;
    });
    setNavList(newNavList);
  }

  return (
    <header className={`${scroll > 100 ? 'scrolled' : ''}`}>
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
      <ul className="nav">
        {NavItemsData.map((nav) => {
          return <NavItems key={nav._id} nav={nav} />;
        })}
      </ul>
      <Search />
      <Button icon={<i class="bi bi-box-arrow-in-right"></i>} name='Sign in'/>
    </header>
  );
}
