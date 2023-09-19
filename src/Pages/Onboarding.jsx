import heart from "../assets/heart.png";
import door from "../assets/door.png";
import message from "../assets/message.png";
import cotton from "../assets/cotton.png";
import { Link } from "react-router-dom";
import White from "./components/White";
import { useNavigate } from "react-router-dom";
import RetroRoundedCorner from "./components/RetroRoundedCorner";

function Onboarding() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <style>
        {" "}
        {`
  .frame_104 {
gap: 20px;
}

.vector {
fill: #484848;
}

.vector {
fill: #484848;
}

.vector {
fill: #484848;
}`}
      </style>

      <div className="flex flex-row h-[952px] family-sans bg-black">
        <div onClick={goBack}>
          <White />
        </div>
        <div className="w-[45%] h-[952px]  rounded-2xl">
          <img
            src={cotton}
            className="w-full h-[952px] rounded-r-3xl  object-cover "
          />
        </div>
        <div className="flex flex-col ml-1 flex-shrink-0 justify-center pt-64 items-start w-[878px] h-[952px] rounded-tl-3xl rounded-bl-3xl bg-[#ffedcc]">
          <div className="flex flex-col items-start gap-10 py-0 px-20">
            <div className=" w-[609px] text-black font-['Readex text-[2.6875rem] font-light leading-[normal]">
              At AQF, we wholeheartedly believe in the power of conversation.{" "}
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-start gap-2.5  w-[609px] text-black font-['Readex text-[2.1875rem] leading-[normal]">
                We champion every dialogue:
              </div>
              <div className="flex items-center gap-2.5">
                <div className="frame_104 flex flex-col items-start text-[1.75rem] font-light leading-[normal] text-black">
                  <div className=" flex items-center mt-5">
                    <img src={heart} alt="" />
                    <p className="ml-4">a heart-to-heart with yourself,</p>
                  </div>
                  <div className=" flex items-center mt-1">
                    <img src={message} alt="" />
                    <p className="ml-4"> a comforting chat with a friend,</p>
                  </div>
                  <div className=" flex items-center mt-1">
                    <img src={door} alt="" />
                    <p className="ml-4"> or opening up to someone new.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end"></div>
          </div>

          <div className="bg-[#FFEDCC] justify-end h-64 w-full flex items-end pr-8 flex-col">
            <Link to="/commitment">
              <RetroRoundedCorner name={"Next"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
