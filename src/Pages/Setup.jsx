import React, { useState } from "react";
import Hero from "./components/Hero";
import { Link } from "react-router-dom";

const TextInput = ({ type, text, image, value, onChange }) => {
  return (
    <div className="flex flex-col items-center justify-between w-[80%] -ml-5">
      <div className="flex items-start w-[400px]">
        <p className="text-[28px] text-start">{text}</p>
      </div>
      <div className="flex my-1 items-center">
        {image ? <img src={image} alt={text} /> : null}
      </div>
      <input
        className="px-4 w-[400px] h-[35px] border border-black rounded-full"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

function Setup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Function to handle email input change and validate email
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setIsEmailValid(emailRegex.test(newEmail));
  };

  // Function to handle password input change and validate password
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    setIsPasswordValid(
      newPassword.length >= 8 && newPassword === confirmPassword
    );
  };

  // Function to handle confirm password input change and validate password
  const handleConfirmPasswordChange = (newConfirmPassword) => {
    setConfirmPassword(newConfirmPassword);
    setIsPasswordValid(password.length >= 8 && password === newConfirmPassword);
  };

  const isButtonEnabled = isEmailValid && isPasswordValid;

  return (
    <div className="w-full bg-black h-[100vh] flex">
      <Hero text={`Get your account setup`} />
      <div className="flex flex-col items-center justify-center gap-3 bg-[#FFEDCC] w-[64%] ml-[2px] rounded-tl-3xl rounded-bl-3xl">
        <TextInput
          text={"Email address"}
          value={email}
          onChange={handleEmailChange}
          type={email}
        />
        <TextInput
          text={"Password"}
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />
        <TextInput
          text={"Confirm password"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          type="password"
        />
        <div className="w-[80%] h-[80%] flex justify-end items-end p-8 flex-col">
          <Link to={isButtonEnabled ? "/otp?" : "#"}>
            <button
              className={`status_default ${
                isButtonEnabled
                  ? "bg-[#8BC965]"
                  : "bg-gray-400 cursor-not-allowed"
              } inline-flex font-bold justify-center items-center h-12 w-36 rounded-[0.625rem] border-2 border-black text-black font-['Inter'] text-md leading-[normal]`}
              disabled={!isButtonEnabled}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Setup;
