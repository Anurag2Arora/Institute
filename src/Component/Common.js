import React from "react";
import "./home.css";

export default function Common(props) {
  return (
    <>
      <div className="home container flex">
        <div className="des">
          <h1>
            {props.name}
            <p style={{ color: "blue" }}>Bright Infonet</p>
          </h1>
          <p>We are the team of talented developer making websites</p>
          {props.button}
        </div>
        <div className="image">
          <img src={props.imgsrc} alt="" />
        </div>
      </div>
    </>
  );
}
