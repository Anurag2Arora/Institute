import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import Common from "./Common";
export default function Home() {
  return (
    <>
      <div className="home">
        <Common
          name={"Grow with"}
          imgsrc={"laptop.webp"}
          button={
            <NavLink style={{ textDecoration: "none" }} to="/service">
              <button className="btnn">Get Started</button>
            </NavLink>
          }
        />
      </div>
    </>
  );
}
