import React from "react";
import { NavLink } from "react-router-dom";
import "./card.css";
export default function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="pic">
          <img src={props.imgpic} className="card-img-top" alt="..." />
        </div>

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink
            to="https://www.geeksforgeeks.org/web-development/"
            className="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </>
  );
}
