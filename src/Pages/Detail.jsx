import { Link, useNavigate } from "react-router-dom";
import header2 from "../assets/header2.png";
import RetroRoundedCorner from "./components/RetroRoundedCorner";
import White from "./components/White";

function Detail() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="[100vh]">
      <div onClick={goBack}>
        <White />
      </div>
      <div className="h-[200px] w-full ">
        <img src={header2} className="w-full h-full" />
      </div>
      <div className="bg-[#FFEDCC] items-center pt-20 flex flex-col h-[60%] ">
        <div>
          <h3 className="text-[44px] font-bold mb-8">A few more details</h3>

          <div className="flex items-center">
            <p className="mr-6 text-2xl ">What year were you born?</p>
            <input
              placeholder="YYYY"
              className="text-center px-4 w-[140px] h-[40px] border border-gray-500 rounded-2xl"
            />
          </div>
          <div className="flex items-center mt-6">
            <p className="mr-6 text-2xl ">Where do you live?</p>
            <select className="w-72 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200">
              <option value="" disabled>
                Select your country
              </option>
              <option value="USA">USA</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Canada">Canada</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="flex items-center mt-6">
            <p className="mr-6 text-2xl ">Pronoun</p>
            <div className="flex">
              <button className="px-6 py-[6px] font-semibold border border-black rounded-3xl">
                he/him
              </button>
              <button className="px-6 py-[6px] mx-4 font-semibold border border-black rounded-3xl">
                she/her
              </button>
              <button className="px-6 py-[6px] font-semibold border border-black rounded-3xl">
                they/them
              </button>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <p className="mr-6 text-2xl ">Relationship status</p>
            <div className="flex">
              <button className="px-6 py-[6px] font-semibold border border-black rounded-3xl">
                single
              </button>
              <button className="px-6 py-[6px] mx-4 font-semibold border border-black rounded-3xl">
                in a relationship
              </button>
              <button className="px-6 py-[6px] font-semibold border border-black rounded-3xl">
                other
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFEDCC] w-full flex items-end  p-8 flex-col">
        <Link to="/role">
          <RetroRoundedCorner name={"Next"} />
        </Link>
      </div>
    </div>
  );
}

export default Detail;
