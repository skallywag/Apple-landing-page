import React from "react";
import { navLinks } from "./navLinks";
import { BsSearch, BsBag } from "react-icons/bs";
import "./GlobalNav.scss";

const GlobalNav = () => {
  return (
    <div className="globalNav">
      <ul className="navLinks">
        <img
          src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
          alt=""
        />
        {navLinks.map((link) => {
          return (
            <li key={link.id} className={link.cName}>
              {link.name}
            </li>
          );
        })}
        <BsSearch className="navTool" />
        <BsBag className="navTool" />
      </ul>
    </div>
  );
};

export default GlobalNav;
