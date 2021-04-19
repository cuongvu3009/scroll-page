import React from "react";
import { links } from "./data";

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
  };

  return (
    <div>
      {links.map((link) => {
        return (
          <a href={links.url} key={link.id}>
            {link.text}
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;
