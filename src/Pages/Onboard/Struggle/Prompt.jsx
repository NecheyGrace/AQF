import React, { useState } from "react";
import Icon from "../../components/Icon";
import MenuClose from "../../components/MenuClose";
import MenuOpen from "../../components/MenuOpen";
import Card from "../../components/Card";
// import BxsRightArrowCircle from "../../../assets/BxsRightArrowCircle.png";
import bookmark from "../../../assets/bookmark.png";
import Rectangle from "../../components/Rectangle";
import Hero from "../../components/Hero";
import Promps from "../../components/Promps";

// Define an array of data objects, one for each instance
const promptsData = [
  {
    id: 1,
    question:
      "Imagine you're talking to someone who knows nothing about the issue you’re facing. How would you begin that conversation, and what details would you emphasize to make them understand the situation?",
    imagePath: "<path-to-image-1>",
  },
  {
    id: 2,
    question:
      "Imagine you're talking to someone who knows nothing about the issue you’re facing. How would you begin that conversation, and what details would you emphasize to make them understand the situation?",
    imagePath: "<path-to-image-2>",
  },
  {
    id: 3,
    question:
      "Imagine you're talking to someone who knows nothing about the issue you’re facing. How would you begin that conversation, and what details would you emphasize to make them understand the situation?",
    imagePath: "<path-to-image-3>",
  },
];

function Prompt() {
  return (
    <div className=" w-full bg-black h-[100vh] flex">
      <Hero
        text={"Kickstart your storytelling with a prompt"}
        word={
          "Prompts let you focus less on the telling, and more on your story"
        }
      />

      <div className="w-[65%] py-10 bg-[#FFEDCC] rounded-tl-3xl rounded-bl-3xl   ml-[2px]">
        <Promps />
      </div>
    </div>
  );
}

export default Prompt;
