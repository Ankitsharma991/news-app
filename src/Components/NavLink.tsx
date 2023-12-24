import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type Props = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {

  return (
    <Link
      to={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold "
      }`}
    >
      {category}
    </Link>
  );
};

export default NavLink;
