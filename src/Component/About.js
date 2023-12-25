import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import Common from "./Common";
export default function About() {
  return (
    <>
      <Common
        name={"Welcome to About Page"}
        imgsrc={"lapii.webp"}
        button={
          <NavLink style={{ textDecoration: "none" }} to="/contact">
            <button className="btnn">Contact Now</button>
          </NavLink>
        }
      />
    </>
  );
}
