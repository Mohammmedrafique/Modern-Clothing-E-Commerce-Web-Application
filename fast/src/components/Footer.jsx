import { Logo3 } from "../Assets";
import { Link } from "react-router-dom";

import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "100px",
          backgroundColor: "black",
        }}
      >
        <div style={{ marginRight: "100px" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div>
              <img
                src={Logo3}
                width="150px"
                className="logo-image"
                alt="Logo"
              />
              <h5
                style={{ color: "white", textDecoration: "none", margin: "0" }}
              >
                REAL DESIGNS BY REAL ARTIST{" "}
              </h5>
              <h5 style={{ color: "white", marginRight: "80px" }}>
                FOR REAL PEOPLE
              </h5>
            </div>
          </Link>
        </div>

        <div>
          <h6 style={{ color: "white" }}>PRODUCT</h6>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Jackets
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Shirt
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Dresses
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Outwear
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Bottoms
            </Link>{" "}
          </p>
        </div>

        <div>
          <h6 style={{ color: "white" }}>BUYING</h6>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Shop
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Terms of Use
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Privacy
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              How it Works
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Custumor Service
            </Link>{" "}
          </p>
        </div>

        <div>
          <h6 style={{ color: "white" }}>SOCIAL</h6>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Instagram
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Facebook
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "lightGray",
              }}
            >
              Twitter
            </Link>{" "}
          </p>
        </div>

        <div>
          <h6 style={{ color: "white", marginRight: "120px" }}>
            JOIN OUR COMMUNITY
          </h6>
          <input
            type="Email"
            placeholder="EMAIL ADDRESS"
            style={{
              borderRadius: "20px",
              width: "250px",
              height: "30px",
              backgroundColor: "black",
            }}
          />
        </div>
      </div>
    </footer>
  );
};
