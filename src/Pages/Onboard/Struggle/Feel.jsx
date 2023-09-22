import { useState } from "react";
import React from "react";
import Icon from "../../components/Icon";
import MenuClose from "../../components/MenuClose";
import Rectangle from "../../components/Rectangle";
import { Link, useNavigate } from "react-router-dom";

function Feel() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [selectedCard, setSelectedCard] = useState(false);
  const emojiData = [
    { id: 1, emoji: "🙂", mood: "happy" },
    { id: 2, emoji: "😢", mood: "sad" },
    { id: 3, emoji: "😨", mood: "scared" },
    { id: 4, emoji: "🤢", mood: "disgusted" },
    { id: 5, emoji: "😡", mood: "mad" },
    { id: 6, emoji: "😵", mood: "surprised" },
    { id: 7, emoji: "🤔", mood: "unsure" },
  ];
  const handleEmojiClick = (id) => {
    setSelectedEmoji(id);
    setSelectedCard(true);
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleNextPageClick = () => {
    if (selectedEmoji !== null) {
    } else {
      alert("Please select an emoji  before proceeding.");
    }
  };
  return (
    <>
      <div className="bg-[#FFEDCC] w-full ">
        <div className="pt-6" onClick={goBack}>
          <Icon />
          <div className="flex justify-end">
            <MenuClose />
          </div>
        </div>
        <Rectangle text={"How would you label the challenge?"} />

        <div className="flex flex-wrap gap-4 pt-[210px] pl-[112px]">
          {emojiData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col flex-shrink-0 justify-center items-center gap-4 w-28 h-28 rounded-3xl border border-[#551400] ${
                selectedEmoji === item.id ? "bg-[#FFA355]" : "bg-white"
              } cursor-pointer`}
              onClick={() => handleEmojiClick(item.id)}
            >
              <div className="Pro text-black text-center font-Readex text-[1rem] leading-normal">
                {item.emoji}
              </div>
              <div className="Pro text-black text-center font-Readex text-sm font-light leading-normal">
                {item.mood}
              </div>
            </div>
          ))}
          <div className=" w-full flex items-end  p-8 flex-col">
            <Link to="/story">
              <button
                onClick={handleNextPageClick}
                disabled={!selectedCard}
                className={`status_default ${
                  selectedCard
                    ? "bg-[#ff3c00]"
                    : "bg-gray-400 cursor-not-allowed"
                } inline-flex font-bold justify-center items-center  h-12 w-36 rounded-[0.625rem] border-2 border-black   text-black  font-['Inter'] text-md leading-[normal]`}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feel;
