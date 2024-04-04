import React, { useState } from "react";
import siteLogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-white py-[15px]">
        <div className="container mx-auto">
          <div className="header-wrap grid grid-cols-2 lg:grid-cols-4 gap-x-4 items-center justify-between auto-cols-auto">
            <div className="logo-wrap order-1 ">
              <Link to={"/"}>
                <img src={siteLogo} alt="main logo" />
              </Link>
            </div>
            <div className="nav-sec lg:col-span-2 order-3 lg:order-2 text-right">
              <ul className="navbar hidden nav-bar lg:block">
                <li className="active">
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>Jobs</Link>
                </li>
                <li>
                  <Link>Company</Link>
                </li>
                <li>
                  <Link>About us</Link>
                </li>
              </ul>
            </div>
            <div className="download-btn text-right flex items-center order-2 lg:order-3">
              <Link className="sign-btn">Sign Up</Link>
              <Link className="post-btn">Post a Job</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

