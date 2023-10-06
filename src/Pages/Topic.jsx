import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

import RetroRoundedCorner from "./components/RetroRoundedCorner";
import Hero from "../Pages/components/Hero";

function Topic() {
  const options = [
    "Personal Growth",
    "Health and Fitness Journeys",
    "Academic Achievements",
    "Volunteer and Charity Work",
    "Entrepreneurial Ventures",
    "Spiritual Awakening",
    "Sporting Achievements",
    "Technological Innovations",
    "Cross-Cultural Experiences",
    "Scientific Discoveries",
    "Career Advancement",
    "Artistic Expressions",
    "Educational Milestones",
    "Cultural Immersion",
    "Relationship Milestones",
    "Personal Achievements",
    "Outdoor Expeditions",
    "Creative Pursuits",
    "Family and Parenthood",
    "Travel Adventures",
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
    }
  };

  React.useEffect(() => {
    setIsButtonEnabled(selectedOptions.length === 3);
  }, [selectedOptions]);

  const handleButtonClick = () => {
    if (isButtonEnabled) {
      // Navigate to another page and pass selectedOptions as route parameters
      navigate(`/another-page/${selectedOptions.join("-")}`);
    }
  };

  return (
    <div className="w-full bg-black h-[100vh] flex">
      <Hero text={`What topics would you like to talk about?`} />
      <div className="bg-[#FFEDCC] flex flex-col items-center justify-center gap-3 w-[64%] ml-[2px] rounded-tl-3xl rounded-bl-3xl">
        <div className="flex flex-wrap items-center pl-16 content-start gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex justify-center items-center gap-1 py-2 px-4 rounded-full border-2 ${
                index % 2 === 0 ? "border-black" : "border-[#551400]"
              } ${
                selectedOptions.includes(option)
                  ? "bg-orange-300"
                  : "bg-white/0"
              } text-black text-center text-base font-bold leading-[normal]`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <Link to="/area">
          <button
            className={`py-2 px-4 rounded-md ${
              isButtonEnabled
                ? "bg-green-500 text-white cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleButtonClick}
            disabled={!isButtonEnabled}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Topic;
