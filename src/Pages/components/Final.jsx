import React, { useEffect, useState } from "react";
import cottons from "../../assets/cottons.png";
import White from "../components/White";
import { Link, useNavigate } from "react-router-dom";
import RetroRoundedCorner from "./RetroRoundedCorner";

function Final() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the current date every second

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);
  return (
    <div className="flex flex-col h-full bg-[#FFEDCC]">
      <div onClick={goBack}>
        <White />
      </div>
      <div className="w-full ">
        <img src={cottons} className="w-full h-[25%] object-cover" alt="" />
      </div>
      <div className="flex justify-center items-center pt-10 space-x-6">
        <div className="relative">
          <div className="w-[171px] h-[229px] relative">
            <div className="w-[172px] h-[230px] bg-[#551400] rounded-[4px_4px_4px_4px] border border-solid border-black rotate-180" />
          </div>
          <div className="w-[127.5px] h-[191.5px] absolute top-5 left-[22px] bottom-[22px] right-5">
            <div className="w-[127.5px] h-[191.5px] bg-[#421000] border border-solid border-[#FFA600] text-white">
              <div className="w-full justify-center items-center">
                <p className="font-semibold text-base">Your Story</p>
                <p className="font-medium text-base">
                  {currentDate.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[45%] h- ">
          <p className="font-bold text-2xl">
            You’ve just recorded your first story
          </p>
          <p className="font-medium text-lg">
            We hope that you feel a little lighter and a little more in control
            of your challenge.
          </p>
        </div>
      </div>
      <div className="bg-[#FFEDCC] w-full h-full flex items-end pt-16 p-8 flex-col">
        <Link to="/current">
          <RetroRoundedCorner name={"Next"} />
        </Link>
      </div>
    </div>
  );
}

export default Final;
