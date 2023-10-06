import bro from "../assets/bro.png";
import { Link, useNavigate } from "react-router-dom";
import White from "./components/White";
import RetroRoundedCorner from "./components/RetroRoundedCorner";

function Role() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <style>
        {" "}
        {`
 .frame_129 {
  gap: 11px;
}`}
      </style>
      <div className="flex flex-col h-[1024px] family-sans ">
        <div onClick={goBack}>
          <White />
        </div>
        <div className="h-[538px] w-full bg-black rounded-2xl">
          <img src={bro} className="w-full h-[full] object-cover " />
        </div>
        <div className="frame_129 inline-flex flex-col items-center bg-[#FFEDCC] h-[952px]">
          <div className="Pro'] text-black font-['Readex text-[2.1875rem] font-bold leading-[normal]">
            There are two roles to play: storyteller and listener
          </div>
          <div className="flex flex-col items-start gap-2 text-center">
            <div className="Pro'] w-[1223px] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Storytellers record their triumphs, challenges they’ve learned
              from, and challenges they’re still working through.
            </div>
            <div className="Pro'] w-[1200px] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Listeners are folks looking to understand through others, and lend
              a positive perspective whenever possible.
            </div>
          </div>
          <div className="bg-[#FFEDCC] w-full flex items-end pr-8 pt-64 flex-col">
            <Link to="/experience">
              <RetroRoundedCorner name={"Next"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Role;
