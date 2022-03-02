import React from "react";
import { navLinks } from "./navLinks";
import "./GlobalNav.scss";

const GlobalNav = () => {
  return (
    <div className="globalNav">
      <ul className="navLinks">
        {navLinks.map((link) => {
          return (
            <li key={link.id} className={link.cName}>
              {link.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GlobalNav;
