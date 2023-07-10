import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../Components/style.css"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              src="https://media.istockphoto.com/id/1181311065/vector/education-logo.jpg?s=612x612&w=0&k=20&c=029HVuj8i6XUBuXb2cayyj_tiZsCVMicLBicpJTne9M="
              alt="Loading" className="rounded-pill img1"
            ></img> &emsp; My-Ed
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses Offered
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
