import { useState } from "react";
import White from "./components/White";
import header from "../assets/header.png";
import RetroRoundedCorner from "./components/RetroRoundedCorner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Status from "./components/Status";

function Name() {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="h-[952px] w-[1440px]  bg-[#FFEDCC]">
      <div onClick={goBack}>
        <White />
      </div>
      <div className="h-[200px] w-full">
        <img src={header} className="w-full h-full" />
      </div>
      <div className=" items-center pt-20 flex flex-col h-[60%] ">
        <h3 className="text-[44px] font-bold">What's your name?</h3>
        <input className="mt-5 px-4 w-[720px] h-[38px] border border-black rounded-full" />
        <p className="mt-2 text-sm">
          While we encourage real names for storytelling, use whatever name you
          feel most comfortable with.
        </p>
      </div>
      <div className="bg-[#FFEDCC] w-full flex items-end pr-8 pb-8 flex-col">
        <Link to="/email">
          <RetroRoundedCorner name={"Next"} />
        </Link>
      </div>
      <Status num={60} />
    </div>
  );
}

export default Name;
