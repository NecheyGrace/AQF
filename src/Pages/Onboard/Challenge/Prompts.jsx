import React from "react";
import Icon from "../../components/Icon";
import MenuClose from "../../components/MenuClose";
import MenuOpen from "../../components/MenuOpen";
import Card from "../../components/Card";
import Rectangle from "../../components/Rectangle";

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

function Prompts() {
  return (
    <div className="bg-[#FFEDCC] w-full ">
      <div className="pt-6">
        <Icon />
        <div className="flex justify-end">
          <MenuClose />
        </div>
      </div>
      <Rectangle text={"Where are you right now?"} />
      <div className="flex flex-wrap gap-4">
        {promptsData.map((data) => (
          <div key={data.id} className="flex-shrink-0 w-[23.3125rem] h-[456px]">
            <div className="frame_193 flex-shrink-0 rounded-lg border-4 border-black bg-white">
              <div className="Pro text-black font-Readex text-lg font-light leading-normal">
                {data.question}
              </div>
              <div className="flex flex-shrink-0 justify-center items-center w-12 h-12">
                <div className="lightgray 50% / cover no-repeat flex-shrink-0 w-12 h-12 bg-[url(data.imagePath)]" />
              </div>
            </div>
          </div>
        ))}
        <svg
          width={57}
          height={70}
          viewBox="0 0 57 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4L30.7574 30.7574C33.1005 33.1005 33.1005 36.8995 30.7574 39.2426L4 66"
            stroke="black"
            strokeWidth={8}
            strokeLinecap="round"
          />
          <path
            d="M24 4L50.7574 30.7574C53.1005 33.1005 53.1005 36.8995 50.7574 39.2426L24 66"
            stroke="black"
            strokeWidth={8}
            strokeLinecap="round"
          />
        </svg>
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
          View Saved prompts
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Prompts;
