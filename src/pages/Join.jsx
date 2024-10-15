import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Join = () => {
  // states
  const chatId = -1002452351776;
  const botId = "7582523616:AAGnWKUCxocIf0hgwutePx7wdMQGDg7OI6A";
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // send request
  const sendRequest = (e) => {
    e.preventDefault();

    // add loader
    setIsLoading(true);

    // helpers
    const getInputValue = (input) => e.target.querySelector(input)?.value.trim();

    // message
    const message = `👤 First name: ${getInputValue(".first-name")}\n👥 Middle name: ${getInputValue(".middle-name")}\n👥 Last name: ${getInputValue(".last-name")}\n✉️ Email: ${getInputValue(".email")}\n📞 Phone number: ${getInputValue(".phone")}\n🚗 Driver license number: ${getInputValue(".license")}\n🧑‍💼 Position: ${getInputValue(".position")}\nℹ️ Description:\n${getInputValue(".description")}`;

    // Telegram API URL
    const url = `https://api.telegram.org/bot${botId}/sendMessage`;

    // form data
    const formData = {
      chat_id: chatId,
      text: message,
    };

    // send a request
    axios
      .post(url, formData)
      .then(() => navigate("/success"))
      .catch(() => alert("Something went wrong!"))
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="container space-y-8 !p-0 sm:!p-5">
      {/* page title */}
      <h1 className="animate__animated animate__fadeInDown text-center">
        Join us
      </h1>

      {/* form */}
      <form
        onSubmit={sendRequest}
        className="animate__animated animate__fadeInLeft grid grid-cols-1 gap-y-5 gap-x-6 bg-white/10 backdrop-blur p-5 py-10 rounded-xl sm:grid-cols-2 sm:rounded-2xl md:p-12 lg:p-20"
      >
        {/* first name */}
        <label className="space-y-3.5">
          <span>First name*</span>

          <input
            required
            type="text"
            name="first name"
            autoComplete="off"
            disabled={isLoading}
            className="first-name"
            placeholder="First name"
          />
        </label>

        {/* middle name (optional) */}
        <label className="space-y-3.5">
          <span>Middle name (optional)</span>

          <input
            type="text"
            name="middle name"
            autoComplete="off"
            disabled={isLoading}
            className="middle-name"
            placeholder="Middle name"
          />
        </label>

        {/* last name */}
        <label className="space-y-3.5">
          <span>Last name*</span>

          <input
            required
            type="text"
            name="last name"
            autoComplete="off"
            disabled={isLoading}
            className="last-name"
            placeholder="Last name"
          />
        </label>

        {/* email */}
        <label className="space-y-3.5">
          <span>Email*</span>

          <input
            required
            type="email"
            name="email"
            className="email"
            autoComplete="off"
            disabled={isLoading}
            placeholder="youremail@example.com"
          />
        </label>

        {/* Phone number */}
        <label className="space-y-3.5">
          <span>Phone number*</span>

          <input
            required
            type="tel"
            name="phone"
            className="phone"
            autoComplete="off"
            disabled={isLoading}
            placeholder="Your phone number"
          />
        </label>

        {/* Driver license number */}
        <label className="space-y-3.5">
          <span>Driver license number*</span>

          <input
            required
            type="text"
            name="license"
            className="license"
            autoComplete="off"
            disabled={isLoading}
            placeholder="Driver license number"
          />
        </label>

        <div className="sm:col-span-2">
          {/* Position */}
          <label className="space-y-3.5">
            <span>Position*</span>

            <select
              required
              name="position"
              disabled={isLoading}
              className="position"
            >
              <option selected disabled>
                Please choose your position
              </option>
              <option className="text-black" value="Owner operator">
                Owner operator
              </option>
              <option className="text-black" value="Company Driver">
                Company Driver
              </option>
            </select>
          </label>
        </div>

        <div className="space-y-5 sm:col-span-2">
          {/* description */}
          <label className="space-y-3.5">
            <span>Description*</span>

            <textarea
              required
              name="description"
              disabled={isLoading}
              className="description"
              placeholder="Tell us more about yourself..."
            />
          </label>

          {/* submit btn */}
          <button
            disabled={isLoading}
            className="flex items-center justify-center w-full h-[46px] bg-primary rounded-lg text-secondary font-medium transition-colors duration-300 hover:bg-primary/70 disabled:bg-primary/70 sm:w-64"
          >
            {!isLoading ? "Submit" : "Loading..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
