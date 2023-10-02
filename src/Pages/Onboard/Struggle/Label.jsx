import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import RetroRoundedCorner from "../../components/RetroRoundedCorner";
import "../../../index.css";

function Label() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const handleButtonClick = (issueId) => {
    if (selectedButtons.includes(issueId)) {
      // If the button is already selected, unselect it
      setSelectedButtons((prevState) =>
        prevState.filter((id) => id !== issueId)
      );
    } else if (selectedButtons.length < 3) {
      // If less than 3 buttons are selected, select the button
      setSelectedButtons((prevState) => [...prevState, issueId]);
    }
  };

  const isButtonSelected = (issueId) => selectedButtons.includes(issueId);

  const issuesData = [
    {
      id: 1,
      category: "Personal Growth",
      issues: [
        { id: 11, text: "Mental Health & Well-being" },
        { id: 12, text: "Resilience & Coping" },
        { id: 13, text: "Self Discovery" },
        { id: 14, text: "Unhealthy Habits/Vices" },
      ],
    },
    {
      id: 2,
      category: "Relationship Difficulties",
      issues: [
        { id: 21, text: "Intimacy & Connection" },
        { id: 22, text: "Friendships" },
        { id: 23, text: "Dating & Romance" },
      ],
    },
    {
      id: 3,
      category: "Work-related issues",
      issues: [
        { id: 31, text: "Work-life Balance" },
        { id: 32, text: "Job Searching" },
      ],
    },
    {
      id: 4,
      category: "Other issues",
      issues: [{ id: 41, text: "Other" }],
    },
  ];

  const isNextButtonEnabled = selectedButtons.length === 3;

  return (
    <div className="bg-black">
      <div className="w-full h-full flex">
        <Hero text={"How would you label this challenge?"} />
        <div className="flex flex-wrap w-[65%] bg-[#FFEDCC] ml-[2px] pl-[80px] pt-[102px] rounded-tl-3xl rounded-bl-3xl ">
          <div className="flex flex-col items-start gap-8">
            {issuesData.map((category) => (
              <div key={category.id}>
                <div className="font-bold text-black">{category.category}</div>
                <div className="flex flex-wrap items-start gap-3">
                  {category.issues.map((issue) => (
                    <button
                      key={issue.id}
                      onClick={() => handleButtonClick(issue.id)}
                      className={`${
                        isButtonSelected(issue.id)
                          ? "bg-[#8BC965]"
                          : "bg-white/0"
                      }  h-[40px]  py-1 text-black  border-black border-2 rounded-full font-bold text-sm px-[1rem]`}
                    >
                      {issue.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex items-end p-8 flex-col">
            <Link to={isNextButtonEnabled ? "/feel" : "#"}>
              <button
                onClick={() => {}}
                disabled={!isNextButtonEnabled}
                className={`${
                  isNextButtonEnabled
                    ? "bg-[#8BC965]"
                    : "bg-gray-400 cursor-not-allowed"
                } status_default inline-flex font-bold justify-center items-center h-12 w-36 rounded-[0.625rem] border-2 border-black text-black font-['Inter'] text-md leading-[normal]`}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Label;

{
  /* {cardLabels.map((label, index) => (
            <button
              key={index}
              className={`flex justify-center items-center gap-2.5 pt-[0.85rem] pb-[0.9375rem] px-[2rem] rounded-full border-2 border-[#551400] ${
                selectedCard === index ? "bg-[#ff3c00]" : "bg-white/0"
              } text-black text-center font-['Readex text-lg font-bold leading-[normal]']`}
              onClick={() => handleCardClick(index)}
            >
              {label}
            </button>
          ))}
          <div className=" w-full flex items-end  p-8 flex-col">
            <Link to="/feel">
              <button
                onClick={handleNextPageClick}
                disabled={!isButtonActive}
                className={`status_default ${
                  isButtonActive
                    ? "bg-[#ff3c00]"
                    : "bg-gray-400 cursor-not-allowed"
                } inline-flex font-bold justify-center items-center  h-12 w-36 rounded-[0.625rem] border-2 border-black   text-black  font-['Inter'] text-md leading-[normal]`}
              >
                Next
              </button>
            </Link>
          </div> */
}
