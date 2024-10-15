import React from "react";
import { Link } from "react-router-dom";

// images
import successImage from "../assets/images/icons/success-filled.svg";

const Success = () => {
  return (
    <div className="container">
      <div className="max-w-xl space-y-8">
        {/* success image */}
        <img
          width={128}
          height={128}
          src={successImage}
          alt="success image"
          className="animate__animated animate__bounceInRight size-24 sm:size-28 md:size-32"
        />

        {/* page title */}
        <h1 className="animate__animated animate__bounceInLeft">Success</h1>

        {/* description */}
        <p className="animate__animated animate__bounceInRight text-gray-200 sm:text-lg">
          Dear User, Your request has been sent successfully. Our admins will
          review your request and contact you as soon as possible!
        </p>

        {/* back */}
        <Link
          to={-1}
          className="animate__animated animate__bounceInLeft flex items-center justify-center w-40 bg-primary py-3 rounded-lg text-secondary font-medium transition-colors duration-300 hover:bg-primary/70"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Success;
