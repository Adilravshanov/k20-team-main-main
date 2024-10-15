import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container relative">
    {/* page content */}
    <div className="max-w-xl space-y-8 mb-8 md:mb-0">
      {/* page title */}
      <h1 className="animate__animated animate__fadeInDown">
        K20 Team
      </h1>

      {/* description */}
      <p className="animate__animated animate__fadeInLeft text-gray-200 sm:text-lg">
      K20 Team values commitment,
      professionalism,and safety. We're looking for
      passionate and skilled truck drivers to join our growing team.
      Our mission is to continue building a flexible car hauling platform
      that empowers shippers and carriers alike.
      Be a part of something bigger.

      </p>

      {/* links wrapper */}
      <div className="animate__animated animate__fadeInUp flex gap-5">
        {/* about */}
        <Link
          to="/about"
          className="flex items-center justify-center w-40 bg-primary py-3 rounded-lg text-secondary font-medium transition-colors duration-300 hover:bg-primary/70"
        >
          About
        </Link>

        {/* join us */}
        <Link
          to="/contact"
          className="flex items-center justify-center w-40 py-3 rounded-lg border-2 border-primary bg-secondary/20 font-medium transition-colors duration-300 hover:bg-primary/20"
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* social networks list */}
    <ul className="animate__animated animate__fadeInRight flex gap-5 right-5 bottom-0 md:flex-col md:absolute">
      {/* telegram */}
      <li>
        <a
          target="_blank"
          title="telegram"
          aria-label="telegram"
          rel="noopener noreferrer"
          href="https://t.me/k20teaminc"
          className="flex items-center justify-center size-11 group"
        >
          <svg
            width="26"
            height="26"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="size-7 text-white transition-colors duration-300 group-hover:text-primary"
          >
            <path
              fill="currentColor"
              d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
            />
          </svg>
        </a>
      </li>

      {/* telephone number */}
      <li>
        <a
          href="tel:+1(256)600-58-24"
          title="telephone number"
          rel="noopener noreferrer"
          aria-label="telephone number"
          className="flex items-center justify-center size-11 group"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="size-6 text-white transition-colors duration-300 group-hover:text-primary"
          >
            <path
              fill="currentColor"
              d="M34.06 26.407l-3.496-3.496a4.942 4.942 0 0 0-8.34 2.528c-5.765-1.078-11.372-6.662-11.721-11.653a4.908 4.908 0 0 0 2.586-1.36a4.943 4.943 0 0 0 0-6.99L9.594 1.94a4.943 4.943 0 0 0-6.99 0C-7.882 12.426 23.574 43.882 34.06 33.396a4.944 4.944 0 0 0 0-6.989z"
            ></path>
          </svg>
        </a>
      </li>

      {/* email */}
      <li>
        <a
          title="email"
          aria-label="email"
          rel="noopener noreferrer"
          href="mailto:k20teaminc@gmail.com"
          className="flex items-center justify-center size-11 group"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-7 text-white transition-colors duration-300 group-hover:text-primary"
          >
            <path
              fill="currentColor"
              d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
);

export default Home;
