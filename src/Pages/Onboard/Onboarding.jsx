import heart from "../../assets/heart.png";
import door from "../../assets/door.png";
import message from "../../assets/message.png";
import Lady from "../../assets/Lady.png";
import { Link } from "react-router-dom";
import White from "../components/White";
import { useNavigate } from "react-router-dom";
import closed from "../../assets/closed.png";
import RetroRoundedCorner from "../components/RetroRoundedCorner";

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

      <div className="flex flex-row w-full h-full family-sans bg-black">
        <div onClick={goBack}>
          <White />
        </div>
        <div className="w-[45%]   rounded-2xl">
          <img
            src={Lady}
            className="w-full h-full rounded-r-3xl  object-cover "
          />
        </div>
        <div className="flex flex-col ml-1 flex-shrink-0 justify-center w-[55%]  rounded-tl-3xl rounded-bl-3xl bg-[#ffedcc]">
          <div className="flex justify-end">
            <img src={closed} alt="" />
          </div>
          <div className="w-[630px] pt-[150.5px] flex flex-col items-center justify-center px-[50px]">
            <div className="self-stretch text-black font-['Readex text-[2.1rem] leading-[normal]">
              We know first-hand the challenge of finding the words to describe
              a personal struggle
            </div>
            <div className=" self-stretch text-black font-['Readex text-[1.3rem] leading-[normal] py-[40px]">
              <h4 className="font-bold">Where do we get stuck?</h4>
              <ul className="list-disc pl-8">
                <li> Emotions and thoughts overwhelm us</li>

                <li> We downplay our own experience and feelings </li>
                <li> We think of all the ways others will judge us</li>
              </ul>
            </div>
            <div className=" self-stretch text-black font-['Readex text-[1.6rem] font-bold leading-[normal]">
              Let’s boost your storytelling confidence
            </div>
          </div>
          <div className="bg-[#FFEDCC] w-full h-full flex items-end pt-72 p-8 flex-col">
            <Link to="/current">
              <RetroRoundedCorner name={"Next"} />
            </Link>
          </div>
        </div>
        {/* <div className=" w-full flex items-end  p-8 flex-col">
         <Link to={`${selectedCard===1?"/c/s":"/c/ns"}`}> 
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
      </div>
    </>
  );
}

export default Onboarding;
