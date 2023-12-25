import React from "react";
import Card from "./Card";
import Ldata from "./Ldata";
export default function Service() {
  return (
    <div>
      <div className="container flex main">
        {Ldata.map((val) => {
          return <Card imgpic={val.imgpic} title={val.title} />;
        })}
      </div>
    </div>
  );
}
