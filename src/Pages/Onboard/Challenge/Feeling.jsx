import Icon from "../../components/Icon";
import MenuClose from "../../components/MenuClose";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Hero from "../../components/Hero";
import RetroRoundedCorner from "../../components/RetroRoundedCorner";
import "../../../index.css";
import mad from "../../../assets/mad.png";
import happy from "../../../assets/happy.png";
import confused from "../../../assets/confused.png";
import disgusted from "../../../assets/disgusted.png";
import sad from "../../../assets/sad.png";
import scared from "../../../assets/scared.png";
import suprised from "../../../assets/suprised.png";

function Feeling() {
  const [selectedEmoji, setSelectedEmoji] = useState([]);
  const emojiData = [
    { id: 1, emoji: happy, mood: "happy" },
    { id: 2, emoji: sad, mood: "sad" },
    { id: 3, emoji: scared, mood: "scared" },
    { id: 4, emoji: disgusted, mood: "disgusted" },
    { id: 5, emoji: mad, mood: "mad" },
    { id: 6, emoji: suprised, mood: "surprised" },
    { id: 7, emoji: confused, mood: "unsure" },
  ];

  const handleEmojiClick = (id) => {
    if (selectedEmoji.includes(id)) {
      // Emoji is already selected, remove it from the selection.
      setSelectedEmoji(selectedEmoji.filter((emojiId) => emojiId !== id));
    } else {
      // Emoji is not selected, add it to the selection if less than 3 are selected.
      if (selectedEmoji.length < 3) {
        setSelectedEmoji([...selectedEmoji, id]);
      }
    }
  };

  const handleNextPageClick = () => {
    if (selectedEmoji.length >= 3) {
      // At least three emojis are selected, proceed to the next page.
      // You can add your navigation logic here.
    } else {
      alert("Please select at least three emojis before proceeding.");
    }
  };
  return (
    <>
      <div className="bg-black">
        <div className="w-full h-[100vh] flex">
          <Hero
            text={"How do you feel right now thinking about your challenge?"}
          />

          <div className="flex items-center w-[65%] bg-[#FFEDCC] ml-[2px] pl-[80px] pt-[122px] rounded-tl-3xl rounded-bl-3xl  flex-wrap gap-4 ">
            {emojiData.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col justify-center items-center gap-4 w-28 h-28 rounded-3xl border border-[#551400] ${
                  selectedEmoji.includes(item.id) ? "bg-[#8BC965]" : "bg-white"
                } cursor-pointer`}
                onClick={() => handleEmojiClick(item.id)}
              >
                <img src={item.emoji} className="w-12 h-12" />

                <div className="Pro text-black text-center font-Readex text-sm font-light leading-normal">
                  {item.mood}
                </div>
              </div>
            ))}
            <div className="w-full flex items-end p-8 flex-col">
              <Link to="/">
                <button
                  onClick={handleNextPageClick}
                  disabled={selectedEmoji.length < 3}
                  className={`status_default ${
                    selectedEmoji.length >= 3
                      ? "bg-[#8BC965]"
                      : "bg-gray-400 cursor-not-allowed"
                  } inline-flex font-bold justify-center items-center h-12 w-36 rounded-[0.625rem] border-2 border-black text-black font-['Inter'] text-md leading-[normal]`}
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeling;
