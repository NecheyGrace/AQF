import { Link, useNavigate } from "react-router-dom";
import Icon from "./components/Icon";
import RetroRoundedCorner from "./components/RetroRoundedCorner";
import Hero from "../Pages/components/Hero";

function Experience() {
  return (
    <div className="w-full bg-black h-[100vh] flex">
      <Hero text={`Let’s dive into the experiences that matter to you`} />

      <div className="flex flex-col justify-center pl-28  bg-[#FFEDCC] w-[64%] ml-[2px] rounded-tl-3xl rounded-bl-3xl">
        <div className="flex justify-center items-center font-medium text-[28px] w-[60%]">
          We’ll use the following answers to provide curated guidance and
          thoughtful prompts to kickstart your storytelling.
        </div>

        <div className=" w-full flex items-end pr-8 flex-col ">
          <Link to="/topic">
            <RetroRoundedCorner name={"Next"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Experience;
