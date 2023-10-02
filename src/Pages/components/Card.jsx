import React, { useState } from "react";
import RetroRoundedCorner from ".././components/RetroRoundedCorner";
import { Link } from "react-router-dom";
import Alex from "../../assets/Alex.png";
import arrowcircle from "../../assets/arrowcircle.png";
import circle from "../../assets/circle.png";

function Card({ text, texts, word, words, climb, human, link1, link2 }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <>
      <div className="flex flex-col  h-[100vh] pl-[107px] space-y-4  ">
        <div
          className={` relative w-[350px] h-[250px] flex shadow-md shadow-black rounded-lg border-2 border-black   ${
            selectedCard === 1 ? "bg-[#8BC965]" : "bg-white"
          } `}
          onClick={() => handleCardClick(1)}
        >
          <div className=" w-[50%] text-black text-[1rem] leading-[normal]">
            <div className=" py-3  pl-3">
              <div>
                <p className="text-3xl font-semibold">{word}</p>
              </div>
              <div className="pt-16">
                <p className="text-lg font-bold">{text}</p>
              </div>
            </div>
          </div>
          <div className="h-[250px] w-[50%]   ">
            <img
              src={climb}
              alt=""
              className="h-full pb-[3px] w-full rounded-r-lg"
            />
          </div>
          {selectedCard === 1 && (
            <Link to={link1}>
              <div className="absolute bottom-3 right-3 cursor-pointer">
                <img src={arrowcircle} alt="Arrow" />
              </div>
            </Link>
          )}
        </div>

        <div
          className={` relative  w-[350px] h-[250px] flex  shadow-md shadow-black rounded-lg border-2 border-black  ${
            selectedCard === 2 ? "bg-[#8BC965]" : "bg-white"
          } `}
          onClick={() => handleCardClick(2)}
        >
          <div className=" w-[50%] text-black text-[1rem] leading-[normal]">
            <div className=" py-3  pl-3">
              <div>
                <p className="text-3xl font-semibold">{words}</p>
              </div>
              <div className="pt-16">
                <p className="text-lg font-bold">{texts}</p>
              </div>
            </div>
          </div>
          <div className=" w-[50%] h-[250px] ">
            <img
              src={human}
              alt=""
              className="object-cover w-full h-full pb-[3px] rounded-r-lg"
            />
          </div>
          {selectedCard === 2 && (
            <Link to={link2}>
              <div className="absolute bottom-3 right-3 cursor-pointer">
                <img src={arrowcircle} alt="Arrow" />
              </div>
            </Link>
          )}
          {/* <img src={circle} alt="" className="" /> */}
        </div>
      </div>

      {/* <div className=" w-full flex items-end  p-8 flex-col">
          <Link to={selectedCard === 1 ? "/label" : "/situation"}>
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
        </div> */}
    </>
  );
}

export default Card;
