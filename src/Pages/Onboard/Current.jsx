import React, { useState } from "react";
import MenuClose from ".././components/MenuClose";
import MenuOpen from ".././components/MenuOpen";
import Card from ".././components/Card";
import Rectangle from ".././components/Rectangle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alex from "../../assets/Alex.png";
import man from "../../assets/man.png";
import RetroRoundedCorner from "../components/RetroRoundedCorner";
import Hero from "../components/Hero";
Hero;
function Current() {
  return (
    <div className=" w-full bg-black h-[100vh] flex">
      <Hero text={"Where are you right now?"} />

      <div className="w-[65%] py-10 bg-[#FFEDCC] rounded-tl-3xl rounded-bl-3xl   ml-[2px]">
        <Card
          word={"I’m struggling"}
          words={" I’ve overcome a challenge"}
          text={"We’ll help you frame your experience"}
          texts={"Reflect back on insights learned "}
          climb={Alex}
          human={man}
          link1={"/label"}
          link2={"/situation"}
        />
      </div>

      {/* <div className="w-full flex items-end   flex-col">
          <Link to={selectedCard === 1 ? "/label" : "/situation"}>
            <RetroRoundedCorner name={"Next"} />
          </Link>
        </div> */}
    </div>
  );
}

export default Current;
