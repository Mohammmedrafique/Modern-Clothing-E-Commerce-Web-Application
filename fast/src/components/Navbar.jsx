import React from "react";
import { Link } from "react-router-dom";
import { Logo3 } from "../Assets";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        border: "1px solid red",
        width: "99%",
        margin: "auto",
        height: "100px",
      }}
    >
      <div>
        <Link to={"/"}>
          <div>
            <img src={Logo3} width={"100px"} alt="Logo" />
          </div>
        </Link>
      </div>

      <div
        style={{
          border: "1px solid red",
          display: "flex",
          marginLeft: "280px",
          gap: "50px",
          textDecoration: "none",
        }}
      >
        <Link to={"/about"} style={{ textDecoration: "none", color: "black" }}>
          ABOUT
        </Link>
        <Link to={"/men"} style={{ textDecoration: "none", color: "black" }}>
          MEN
        </Link>
        <Link to={"/women"} style={{ textDecoration: "none", color: "black" }}>
          WOMEN
        </Link>
        <Link to={"/shop"} style={{ textDecoration: "none", color: "black" }}>
          SHOP
        </Link>
        <Link
          to={"/contact"}
          style={{ textDecoration: "none", color: "black" }}
        >
          CONTACT
        </Link>
      </div>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          marginLeft: "50px",
        }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/men"}>Men</Link>
        <Link to={"/women"}>Women</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/contact"}>Contact</Link>
      </div> */}
    </div>
  );
};
