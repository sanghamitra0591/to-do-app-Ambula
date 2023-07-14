import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <Link style={{fontSize: "22px", color: "black", fontWeight: "400"}} to="/">Home</Link>
      <Link style={{fontSize: "22px", color: "black", fontWeight: "400"}} to="/task">TO-DO App</Link>
      <Link style={{fontSize: "22px", color: "black", fontWeight: "400"}} to="/product">Shopping App</Link>
    </div>
  );
};