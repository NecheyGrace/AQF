import august from "../assets/august.png";
import { Link, useNavigate } from "react-router-dom";
import RetroRoundedCorner from "./components/RetroRoundedCorner";
import White from "./components/White";

function Commitment() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-row h-[952px] bg-black family-">
      <div onClick={goBack}>
        <White />
      </div>
      <div className="w-[40%] rounded-4xl">
        <img src={august} alt="" className="object-cover" />
      </div>
      <div className="w-[60%] h-[952px]  pt-72 px-16 rounded-2xl bg-[#FFEDCC] font-sans ">
        <div className="flex  justify-center flex-col">
          <h3 className="text-3xl font-bold pb-6">Our Commitment</h3>
        </div>
        <div className="py-2 text-xl ">
          <div className="">
            <li className="list-disc font-bold">Zero judgement Zone: </li>
            <p>
              It dosent matter if you are battling personal demons, facing
              relationship issues, or simply having a tough day - this is your
              judgement-free refuge
            </p>
          </div>
          <div className="">
            <li className="list-disc font-bold">Supportive Community:</li>
            <p>
              We are building AQF into a vibrant, empathetic community. Our
              members come from all walks of life, ready to hear you or share
              their own experiences. Together, we are a lifeline{" "}
            </p>
          </div>
          <div className="">
            <li className="list-disc font-bold">Safe and Secure</li>
            <p>
              {" "}
              Your privacy is our utmost concern. At AQF we ensure your data is
              protected, and only what you want to share is shared
            </p>
          </div>
        </div>
        <div className="bg-[#FFEDCC] w-full flex items-end pt-44 pl-44 p-8 flex-col">
          <Link to="/name">
            <RetroRoundedCorner name={"Next"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Commitment;
