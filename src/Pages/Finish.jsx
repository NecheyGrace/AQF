import React from "react";
import mikhail from "../assets/mikhail.png";
import White from "../Pages/components/White";
import { Link } from "react-router-dom";

function Finish() {
  return (
    <div className="flex flex-row h-[952px] bg-black">
      <White />
      <div className="w-[ 559px] h-[952px] ">
        <img
          src={mikhail}
          className="w-full h-full object-cover rounded-r-3xl"
          alt=""
        />
      </div>
      <div className="flex flex-col flex-shrink-0 justify-center items-center gap-10 py-0 px-20 w-[878px] h-[952px] rounded-tl-3xl rounded-bl-3xl bg-[#ffedcc]">
        <div className="Pro'] w-[645px] text-black font-['Readex text-[2.6875rem] font-bold leading-[normal]">
          Nice work! You’re all set up.
        </div>
        <div className="flex flex-col justify-center items-center gap-4 self-stretch">
          <div className="Pro'] w-[609px] text-black font-['Readex text-[2.1875rem] leading-[normal]">
            Where would you like to go first?
          </div>
          <div className="flex flex-wrap justify-center items-center content-center gap-10 self-stretch">
            <div className="flex flex-col items-start gap-4">
              <button className="retro_rounded_corner_button_dark_mode flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] w-[12.5rem] min-w-[12.5rem] rounded-[0.625rem] border-2 border-black bg-[#ff3c00] button Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Finish my profile
              </button>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Link to="/audio">
                <button className="retro_rounded_corner_button_dark_mode flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] w-[12.5rem] min-w-[12.5rem] rounded-[0.625rem] border-2 border-black bg-[#ff3c00] button Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                  Record your first story
                </button>
              </Link>
            </div>
            <button className="retro_rounded_corner_button_dark_mode flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] w-[12.5rem] min-w-[12.5rem] rounded-[0.625rem] border-2 border-black bg-[#ff3c00] button Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
              Visit your story library
            </button>
            <div className="flex flex-col items-start gap-4 pr-6">
              <button className="retro_rounded_corner_button_dark_mode flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] w-[12.5rem] min-w-[12.5rem] rounded-[0.625rem] border-2 border-[#999] bg-[#ccc] button Pro'] text-[#999] text-center font-['Readex text-lg font-bold leading-[normal]">
                Explore the community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finish;
