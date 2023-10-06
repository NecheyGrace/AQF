import React from "react";
import mikhail from "../assets/mikhail.png";
import Icon from "./components/Icon";
import { Link, useNavigate } from "react-router-dom";

function Finish() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-row h-[952px] bg-black">
      <div onClick={goBack}>
        <Icon />
      </div>
      <div className="w-[ 559px] h-[952px] ">
        <img
          src={mikhail}
          className="w-full h-full object-cover rounded-r-3xl"
          alt=""
        />
      </div>
      <div className="flex flex-col  ml-[2px] flex-shrink-0 justify-center items-center gap-10 py-0 px-20 w-[878px] h-[952px] rounded-tl-3xl rounded-bl-3xl bg-[#ffedcc]">
        <div className=" w-[645px] text-black  text-[2.6875rem] font-bold leading-[normal]">
          Nice work! You’re all set up.
        </div>
        <div className="flex flex-col justify-center items-center gap-4 self-stretch">
          <div className=" w-[609px] text-black  text-[2.1875rem] leading-[normal]">
            Where would you like to go first?
          </div>
          <div className="flex flex-wrap justify-center items-center content-center gap-10 ">
            <div className="flex flex-col items-start gap-4">
              <Link to="/currents">
                <button className="retro_rounded_corner_button_dark_mode flex justify-center items-center gap-2.5 pt-[0.5rem] pb-[0.5rem] pl-[2.5rem] pr-[2.5rem] w-[12.5rem] min-w-[12.5rem] rounded-[0.625rem] border-2 border-black bg-[#ff3c00] button  text-black text-center  text-lg font-bold leading-[normal]">
                  Record a story
                </button>
              </Link>
            </div>
            <button className="retro_rounded_corner_button_dark_mode flex justify-center items-center gap-2.5 pt-[0.5rem] pb-[0.5rem] pl-[2.5rem] pr-[2.5rem] w-[12.5rem] rounded-[0.625rem] border-2 border-black bg-[#ff3c00] button  text-black text-center  text-lg font-bold leading-[normal]">
              Visit your story library
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finish;
