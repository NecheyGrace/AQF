import pexels from "../../assets/pexels.png";
import AQF from "../../assets/AQF.png";
import { Link } from "react-router-dom";
import RetroRoundedCorner from "../components/RetroRoundedCorner";
import "../../index.css";

function Intro() {
  return (
    <>
      <div className="w-full h-full flex flex-row bg-black">
        <div className="w-[40%] ">
          <img
            className=" rounded-r-3xl object-fill w-full h-full"
            src={pexels}
            alt=""
          />
        </div>
        <div className="frame_101 flex flex-col ml-[2px]  justify-center items-start  px-[80px] w-[60%]  rounded-tl-3xl rounded-bl-3xl bg-[#ffedcc]">
          <img src={AQF} alt="Logo" className="absolute top-0 pt-[41px]" />
          <div className="flex flex-col items-start gap-4 ">
            <div className="flex flex-col items-center gap-10  w-[550px] text-black  text-[1.7rem] font-bold leading-[normal]">
              This is where challenges are embraced, narratives are spoken, and
              resilience is born in you.
            </div>
            <div className=" w-[609px] text-black font-['Readex text-[1.7rem] font-normal leading-[normal] pb-8">
              Discover the transformative power of storytelling to conquer your
              struggles.
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 ">
            <Link to="/onboarding">
              <RetroRoundedCorner name={"Get Started"} />
            </Link>
            <div className="already_an_aqf_member__sign_in Pro'] text-black text-center font-semibold text-base leading-[normal]">
              Already an AQF member?{" "}
              <Link to="/login">
                <span className="underline">Sign in</span>{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;

{
  /* <div className="frame_101 flex flex-col flex-shrink-0 justify-center items-start py-0 px-20 w-[878px] h-[952px] rounded-tl-3xl rounded-bl-3xl bg-[#ffedcc]">
  <div className="flex flex-col items-start gap-4">
    <div className="flex flex-col items-center gap-10 Pro'] w-[609px] text-black font-['Readex text-[2.6875rem] font-light leading-[normal]">
      Humans have been telling stories for millennia to better understand the world and cultivate new perspectives on old problems.
    </div>
    <div className="Pro'] w-[609px] text-black font-['Readex text-[2.6875rem] font-bold leading-[normal]">What’s your story?</div>
  </div>
  <div className="flex flex-col items-start gap-4">
    <button className="retro_rounded_corner_button_dark_mode flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] min-w-[12.5rem] rounded-[0.625rem] border-2 border-black bg-[#ff3c00] button Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
      Get started
    </button>
    <div className="already_an_aqf_member__sign_in Pro'] text-black text-center font-['Readex text-lg leading-[normal]">Already an AQF member? Sign in</div>
  </div>
</div> */
}
