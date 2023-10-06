import { useState } from "react";
import White from "./components/White";
import header from "../assets/header.png";
import RetroRoundedCorner from "./components/RetroRoundedCorner";
import { Link } from "react-router-dom";
import Hero from "../Pages/components/Hero";
import { useNavigate } from "react-router-dom";
import Status from "./components/Status";

function Name() {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setIsNameValid(newName.trim().length >= 4);
  };

  return (
    <div className=" w-full bg-black h-[100vh] flex">
      <Hero
        text={"We’re glad you’re taking the steps to own your narratives"}
      />

      <div className=" items-center justify-center pt-48 flex flex-col w-[64%] bg-[#FFEDCC] ml-[2px] rounded-tl-3xl rounded-bl-3xl ">
        <h3 className="text-4xl font-bold pb-4">What’s your preferred name?</h3>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="w-[70%] bg-white h-8 rounded-3xl px-4 outline-none ring-1 ring-black"
        />
        <div className=" w-[80%] h-[80%] flex justify-end items-end  p-8 flex-col">
          <Link to={isNameValid ? `/email?name=${name}` : "#"}>
            <button
              className={`status_default ${
                isNameValid ? "bg-[#8BC965]" : "bg-gray-400 cursor-not-allowed"
              } inline-flex font-bold justify-center items-center  h-12 w-36 rounded-[0.625rem] border-2 border-black   text-black  font-['Inter'] text-md leading-[normal]`}
            >
              Next
            </button>
          </Link>
        </div>{" "}
        {/* <div className=" py-16  w-full flex items-end pr-8 pb-8 flex-col">
          <Link to={isNameValid ? "/email" : "#"}>
            <RetroRoundedCorner
              name={"Next"}
              className={`${
                isNameValid ? "bg-[#8BC965]" : "bg-gray-400"
              } cursor-pointer`}
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Name;
