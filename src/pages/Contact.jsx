import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="container">
    {/* page content */}
    <div className="max-w-xl space-y-8">
      {/* page title */}
      <h1 className="animate__animated animate__fadeInDown">
      K20 TEAM INC</h1>

      {/* description */}
      <p className="animate__animated animate__fadeInLeft text-gray-200 sm:text-lg">
      If you want to become a driver Please apply now
        <br />
      If you have questions Please contact us
      </p>
      <p className="animate__animated animate__fadeInLeft text-gray-200 sm:text-lg">
      Email: <br /> k20teaminc@gmail.com
        <br />
      Phone <br /> Number 267-400-9494 
      </p>

      {/* links wrapper */}
      <div className="animate__animated animate__fadeInUp flex gap-5">
        {/* join us */}
        <Link
          to="/join"
          className="flex items-center justify-center w-40 bg-primary py-3 rounded-lg text-secondary font-medium transition-colors duration-300 hover:bg-primary/70"
        >
          Join us
        </Link>
      </div>
    </div>
  </div>
);

export default About;
