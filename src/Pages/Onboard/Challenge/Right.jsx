import { useState } from "react";
import React from "react";
import Icon from "../../components/Icon";
import MenuClose from "../../components/MenuClose";
import Rectangle from "../../components/Rectangle";

function Right() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
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
  };
  return (
    <>
      <div className="bg-[#FFEDCC] w-full ">
        <div className="pt-6">
          <Icon />
          <div className="flex justify-end">
            <MenuClose />
          </div>
        </div>
        <Rectangle text={"How are you feeling right?"} />
      </div>
      <div className="flex flex-wrap gap-4">
        {emojiData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col flex-shrink-0 justify-center items-center gap-4 w-40 h-40 rounded-3xl border border-[#551400] ${
              selectedEmoji === item.id ? "bg-pink-500" : "bg-white"
            } cursor-pointer`}
            onClick={() => handleEmojiClick(item.id)}
          >
            <div className="Pro text-black text-center font-Readex text-[4.5625rem] leading-normal">
              {item.emoji}
            </div>
            <div className="Pro text-black text-center font-Readex text-sm font-light leading-normal">
              {item.mood}
            </div>
          </div>
        ))}
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
    </>
  );
}

export default Right;
