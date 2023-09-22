import React from "react";
import Icon from "../../components/Icon";
import MenuClose from "../../components/MenuClose";
import MenuOpen from "../../components/MenuOpen";
import Card from "../../components/Card";
import Rectangle from "../../components/Rectangle";
import RetroRoundedCorner from "../../components/RetroRoundedCorner";
import { Link } from "react-router-dom";

function Storytelling() {
  return (
    <div className="bg-[#FFEDCC] w-full ">
      <div className="pt-6">
        <Icon />
        <div className="flex justify-end">
          <MenuClose />
        </div>
      </div>
      <Rectangle text={"Where are you right now?"} />
      <div className="flex ">
        <Card />
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

export default Storytelling;
