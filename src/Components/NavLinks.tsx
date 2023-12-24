import React from "react";
import { categories } from "../constants.tsx";
import { useLocation } from "react-router-dom";
import NavLink from "./NavLink.tsx";

const NavLinks = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname?.split("/").pop() === path;
  };
  
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b-1 ">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
