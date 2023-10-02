import React from "react";
import Icon from "../../components/Icon";
import MenuClose from "../../components/MenuClose";
import MenuOpen from "../../components/MenuOpen";
import Card from "../../components/Card";
import Rectangle from "../../components/Rectangle";
import RetroRoundedCorner from "../../components/RetroRoundedCorner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Storytelling() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleNextPageClick = () => {
    if (selectedCard) {
      // Perform navigation to the next page here
      // You can use React Router, window.location.href, or any other navigation method
    } else {
      alert("Please select a card before proceeding.");
    }
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-[#FFEDCC] w-full ">
      <div className="pt-6" onClick={goBack}>
        <Icon />
      </div>
      <div>
        <div className="flex justify-end">
          <MenuClose />
        </div>
      </div>
      <Rectangle text={"Where are you right now?"} />
      <div className="mt-[100px] w-full">
        <div className="flex  pl-[107px]">
          <div
            className={` w-[320px] h-[370px] shadow-md shadow-black rounded-lg border-4 border-black mr-12  ${
              selectedCard === 1 ? "bg-[#FFBEAA]" : "bg-white"
            } flex justify-center items-center`}
            onClick={() => handleCardClick(1)}
          >
            <div className=" w-[15.125rem] text-black text-[2.1875rem] leading-[normal]">
              I’m ready to tell my story
            </div>
          </div>

          <div
            className={`  w-[320px] h-[370px]  shadow-md shadow-black rounded-lg border-4 border-black mr-12  ${
              selectedCard === 2 ? "bg-[#FFBEAA]" : "bg-white"
            } flex justify-center items-center`}
            onClick={() => handleCardClick(2)}
          >
            <div className=" w-[15.125rem] text-black text-[2.1875rem] leading-[normal]">
              I could use some help starting with a prompt
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-end  p-8 flex-col">
        <Link to={selectedCard === 1 ? "/records" : "/prompts"}>
          <button
            onClick={handleNextPageClick}
            disabled={!selectedCard}
            className={`status_default ${
              selectedCard ? "bg-[#ff3c00]" : "bg-gray-400 cursor-not-allowed"
            } inline-flex font-bold justify-center items-center  h-12 w-36 rounded-[0.625rem] border-2 border-black   text-black  font-['Inter'] text-md leading-[normal]`}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Storytelling;
