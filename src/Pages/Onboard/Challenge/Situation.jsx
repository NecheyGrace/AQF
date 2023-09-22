import React, { useState } from "react";
import Icon from "../../components/Icon";
import MenuClose from "../../components/MenuClose";
import Rectangle from "../../components/Rectangle";
function Situation() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleCardClick = (index) => {
    const cardIndex = selectedCards.indexOf(index);
    if (cardIndex === -1) {
      setSelectedCards([...selectedCards, index]);
    } else {
      const updatedSelectedCards = [...selectedCards];
      updatedSelectedCards.splice(cardIndex, 1);
      setSelectedCards(updatedSelectedCards);
    }

    setIsButtonActive(selectedCards.length >= 4 ? true : false);

    // setIsButtonActive(selectedCards.length + 1 >= 5);
  };

  const handleNextPageClick = () => {
    if (selectedCards.length >= 5) {
      // Perform navigation to the next page here
      // You can use React Router, window.location.href, or any other navigation method
    } else {
      alert("Please select at least five cards before proceeding.");
    }
  };

  // Define an array of card labels
  const cardLabels = [
    "Overcoming Adversity",
    "Career Transitions",
    "Financial Hardships",
    "Health Struggles",
    "Loss and Grief",
    "Mental Health Challenges",
    "Cultural Barriers",
    "Educational Obstacles",
    "Personal Relationships",
    "Work-Life Balance",
    "Social Isolation",
    "Discrimination and Prejudice",
    "Identity Crisis",
    "Language Barriers",
    "Addiction and Recovery",
    "Creative Blocks",
    "Environmental Challenges",
    "Parenting Challenges",
    "Technological Challenges",
    "Legal Battles",
  ];

  return (
    <div>
      <div className="bg-[#FFEDCC] w-full ">
        <div className="pt-6">
          <Icon />
          <div className="flex justify-end">
            <MenuClose />
          </div>
        </div>
        <Rectangle text={"Let’s get a sense of what the situation is"} />

        <div className="flex flex-wrap items-start content-start gap-4  pb-[0.9375rem] pl-[107px] pr-[2.1875rem] pt-[102px] rounded-3xl">
          {cardLabels.map((label, index) => (
            <button
              key={index}
              className={`flex justify-center items-center gap-2.5 pt-[0.85rem] pb-[0.9375rem] px-[2rem] rounded-full border-2 border-[#551400] ${
                selectedCards.includes(index) ? "bg-[#ff3c00]" : "bg-white/0"
              } text-black text-center font-['Readex text-lg font-bold leading-[normal]']`}
              onClick={() => handleCardClick(index)}
            >
              {label}
            </button>
          ))}
          <div className=" w-full flex items-end  p-8 flex-col">
            {/* <Link to={`${selectedCard===1?"/c/s":"/c/ns"}`}> */}
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
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className=" w-full flex items-end  p-8 flex-col">
        {/* <Link to={`${selectedCard===1?"/c/s":"/c/ns"}`}> */}
        <button
          onClick={handleNextPageClick}
          disabled={!selectedCard}
          className={`status_default ${
            selectedCard ? "bg-[#ff3c00]" : "bg-gray-400 cursor-not-allowed"
          } inline-flex font-bold justify-center items-center  h-12 w-36 rounded-[0.625rem] border-2 border-black   text-black  font-['Inter'] text-md leading-[normal]`}
        >
          Next
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Situation;
