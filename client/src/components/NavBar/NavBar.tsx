import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

export const NavBar = () => {
  // TODO links в constants (name в enum)
  const links = [
    { name: "registration", path: "/reg" },
    { name: "authorization", path: "/login" },
    { name: "todo list", path: "/todo" },
  ];
  return (
    <div className={classes.navBarContainer}>
      {links.map((el) => (
        <Link to={el.path}>{el.name}</Link>
      ))}
    </div>
  );
};
