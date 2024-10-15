import React from "react";
import { Link, useLocation } from "react-router-dom";

// images
import truckLogo from "../assets/images/logos/logo.png";

const Header = ({ className = "" }) => {
  const location = useLocation();
  const join = location.pathname == "/join"
  return (
    <header className={`py-5 ${className}`}>
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <nav className=" animate__animated animate__fadeInDown flex items-center justify-between gap-5 w-full sm:w-auto sm:justify-normal">
            {/* logo */}
            <Link to="/" className="flex items-center gap-3.5">
              <img
                width={96}
                height={96}
                src={truckLogo}
                alt="truck logo svg"
                className="size-24"
              />

            </Link>

            {/* nav list */}
            <ul className="flex items-center gap-3.5">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* header btn */}
          <Link
            to={`${join? '/contact':'/join'}`}
            className="animate__animated animate__fadeInRight hidden bg-primary backdrop-blur px-10 py-2.5 text-secondary rounded-full font-medium transition-colors duration-300 hover:bg-primary/70 sm:inline-block"
          >
            {join?'Contact Us' : 'Join Us'} 
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
