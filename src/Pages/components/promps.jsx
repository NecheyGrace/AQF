import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import circle from "../../assets/circle.png";
import prompt from "../../assets/prompt.png";

function Prompts() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <>
      <div className="flex flex-col h-[100vh] pl-[107px] space-y-4">
        {/* Card 1 */}
        <div
          className={`relative w-[350px] h-[130px] flex shadow-md shadow-black rounded-lg border-2 border-black ${
            selectedCard === 1 ? "bg-[#8BC965]" : "bg-white"
          }`}
          onClick={() => handleCardClick(1)}
        >
          <div className=" text-black font-medium text-[1rem] leading-[normal]">
            <div className="flex justify-start p-4">
              <p>Prompt 1</p>
            </div>
          </div>

          {selectedCard === 1 && (
            <Link to="/page1">
              {" "}
              {/* Link to your desired page */}
              <div className="absolute bottom-3 right-3 cursor-pointer">
                <img src={circle} alt="Arrow" />
              </div>
            </Link>
          )}
        </div>

        {/* Card 2 */}
        <div
          className={`relative w-[350px] h-[130px] flex shadow-md shadow-black rounded-lg border-2 border-black ${
            selectedCard === 2 ? "bg-[#8BC965]" : "bg-white"
          }`}
          onClick={() => handleCardClick(2)}
        >
          <div className=" text-black font-medium text-[1rem] leading-[normal]">
            <div className="flex justify-start p-4">
              <p>Prompt 2</p>
            </div>
          </div>
          {selectedCard === 2 && (
            <Link to="/page2">
              {" "}
              {/* Link to your desired page */}
              <div className="absolute bottom-3 right-3 cursor-pointer">
                <img src={circle} alt="Arrow" />
              </div>
            </Link>
          )}
        </div>

        {/* Card 3 */}
        <div
          className={`relative w-[350px] h-[130px] flex shadow-md shadow-black rounded-lg border-2 border-black ${
            selectedCard === 3 ? "bg-[#8BC965]" : "bg-white"
          }`}
          onClick={() => handleCardClick(3)}
        >
          <div className=" text-black font-medium text-[1rem] leading-[normal]">
            <div className="flex justify-start p-4">
              <p>Prompt 3</p>
            </div>
          </div>

          {selectedCard === 3 && (
            <Link to="/page3">
              {" "}
              {/* Link to your desired page */}
              <div className="absolute bottom-3 right-3 cursor-pointer">
                <img src={circle} alt="Arrow" />
              </div>
            </Link>
          )}
        </div>

        <div className="relative space-x-2 w-[350px] h-[35px] flex shadow-md shadow-black rounded-full border-2 border-[#FFA355] bg-[#FFA355] justify-center items-center text-black font-medium text-[1rem] leading-[normal]">
          <div>
            <img src={prompt} alt="" />
          </div>
          <div className=" ">
            <p className="text-sm">See more prompts</p>
          </div>
        </div>
        <div className="flex justify-center w-[350px] pt-4">
          <p className="text-sm  underline">I don’t need a prompt</p>
        </div>
      </div>
    </>
  );
}

export default Prompts;
