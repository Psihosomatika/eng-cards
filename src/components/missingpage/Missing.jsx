import React from "react";
import "./Missing.css";
import Error from "../assets/icons/404-error.png";

function Missing() {
  return (
    <div className="errorMessage">
        <h1>404 not found</h1>
        <img src={Error} alt="404" />
        </div>
);
}

export default Missing;