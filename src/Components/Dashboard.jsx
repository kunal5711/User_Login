import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const DashBoard = ({ regDash }) => {
  return (
    <div>
      <div className="container">
        <div
          className="jumbotron"
          style={{ color: "white", backgroundColor: "lightblue" }}
        >
          <div className="row">
            <div className="col-sm-12">
              <h1>User DashBoard</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <h2>Welcome {regDash.name}</h2>
            </div>
            <div className="col-sm-4">
              <h1>
                <Link to="/logout">Logout</Link>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>Your Login Email : {regDash.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;