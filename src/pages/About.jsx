import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="container">
    {/* page content */}
    <div className="max-w-xl space-y-8">
      {/* page title */}
      <h1 className="animate__animated animate__fadeInDown">
      About K20 Team</h1>

      {/* description */}
      <p className="animate__animated animate__fadeInLeft text-gray-200 sm:text-lg">
      K20 Team is an auto transport logistics partner
      that provides a customizable software solution built
      to fulfill all your car hauling needs. Our tools are designed
      to maximize your businesses ability to streamline, automate and organize
      your entire car hauling process from start to finish.
      Our mission is to continue building a flexible car hauling platform
      that empowers shippers and carriers alike.
      </p>

      {/* links wrapper */}
      <div className="animate__animated animate__fadeInUp flex gap-5">
        {/* join us */}
        <Link
          to="/contact"
          className="flex items-center justify-center w-40 bg-primary py-3 rounded-lg text-secondary font-medium transition-colors duration-300 hover:bg-primary/70"
        >
          Contact Us 
        </Link>
      </div>
    </div>
  </div>
);

export default About;
