import React from "react";
import "./Display.css";

const Display = ({ input, result }) => (
  <div className="container">
    <div className="input"> {input || "0"} </div>
    <div className="result"> {result} </div>
  </div>
);

export default Display;
