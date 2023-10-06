import { Link, useLocation } from "react-router-dom";
import down from "../assets/down.png";
import RetroRoundedCorner from "./components/RetroRoundedCorner";
import Hero from "../Pages/components/Hero";
import White from "./components/White";
import { useState } from "react";

const TextInput = ({ text, image }) => {
  return (
    <div className="flex items-center justify-between  w-[80%] -ml-5">
      <div className="flex my-1 items-center">
        <p className="text-[28px] mr-2">{text}</p>
        {image ? <img src={image} alt={text} /> : null}
      </div>
      <input className="px-4 w-[400px] h-[35px] border border-black rounded-full" />
    </div>
  );
};

function Name() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Select your country");
  const [selectedPronoun, setSelectedPronoun] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false); // Close the dropdown after selecting a country
  };

  const selectPronoun = (pronoun) => {
    setSelectedPronoun(pronoun);
  };

  const selectStatus = (status) => {
    setSelectedStatus(status);
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    // Check if the year is within the range 1991 to 2016
    if (year >= 1991 && year <= 2016) {
      setBirthYear(year);
    } else {
      setBirthYear(""); // Clear the birth year if it's not within the range
    }
  };

  return (
    <div className="w-full bg-black h-[100vh] flex">
      <Hero text={`Hey ${name}, let’s start with the basics`} />

      <div className="flex flex-col items-center justify-center   gap-3 bg-[#FFEDCC] w-[64%] ml-[2px] rounded-tl-3xl rounded-bl-3xl">
        <div className="">
          <div className="text-black text-[1.5rem]">
            What year were you born?
          </div>
          <div className="">
            <input
              className="gap-2 pt-[0.9375rem] pb-[0.9375rem] px-4 w-40 rounded-3xl border border-[#551400] bg-white text-[#868686]"
              placeholder="YYYY"
              type="number"
              value={birthYear}
              onChange={handleYearChange}
            />
          </div>
        </div>
        <div className="">
          <div className="text-black text-[1.5rem]">Where do you live?</div>
          <div className="relative">
            <div className="flex justify-between items-end pt-3 pb-3 px-4 w-80 rounded-lg border border-[#551400] bg-white">
              <div className="text-[#868686] text-lg ">{selectedCountry}</div>
              <img
                src={down}
                alt="Dropdown"
                className={`cursor-pointer ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                onClick={toggleDropdown}
              />
            </div>
            {isOpen && (
              <div className="absolute top-full left-0 z-10 w-80 mt-2 bg-white border border-black rounded-lg">
                <div className="flex justify-between items-start pt-3 pb-3 px-0 border-b border-b-[#000000]/[.30]">
                  <div className="text-[#868686] text-lg ">
                    Select your country
                  </div>
                  <img
                    src={down}
                    alt="Dropdown"
                    className={`cursor-pointer ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    onClick={toggleDropdown}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div
                    className={`flex items-center gap-2.5 py-2 px-0 bg-white text-black text-lg cursor-pointer ${
                      selectedCountry === "Canada" ? "text-green-600" : ""
                    }`}
                    onClick={() => selectCountry("Canada")}
                  >
                    Canada
                  </div>
                  <div
                    className={`flex items-center gap-2.5 py-2 px-0 bg-white text-black text-lg cursor-pointer ${
                      selectedCountry === "Nigeria" ? "text-green-600" : ""
                    }`}
                    onClick={() => selectCountry("Nigeria")}
                  >
                    Nigeria
                  </div>
                  <div
                    className={`flex items-center gap-2.5 py-2 px-0 bg-white text-black text-lg cursor-pointer ${
                      selectedCountry === "Other" ? "text-green-600" : ""
                    }`}
                    onClick={() => selectCountry("Other")}
                  >
                    Other
                  </div>
                  <div
                    className={`flex items-center gap-2.5 py-2 px-0 bg-white text-black text-lg cursor-pointer ${
                      selectedCountry === "United States of America"
                        ? "text-green-600"
                        : ""
                    }`}
                    onClick={() => selectCountry("United States of America")}
                  >
                    United States of America
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="text-black text-[1.5rem]">Pronoun</div>
          <div className="flex items-start gap-4">
            <div
              className={`flex justify-center items-center gap-2.5 py-2 px-6 rounded-full border-2 border-black bg-white/0 text-black text-center text-lg font-bold ${
                selectedPronoun === "he/him" ? "text-green-600" : ""
              }`}
              onClick={() => selectPronoun("he/him")}
            >
              he/him
            </div>
            <div
              className={`flex justify-center items-center gap-2.5 py-2 px-6 rounded-full border-2 border-black bg-white/0 text-black text-center text-lg font-bold ${
                selectedPronoun === "she/her" ? "text-green-600" : ""
              }`}
              onClick={() => selectPronoun("she/her")}
            >
              she/her
            </div>
            <div
              className={`flex justify-center items-center gap-2.5 py-2 px-6 rounded-full border-2 border-black bg-white/0 text-black text-center text-lg font-bold ${
                selectedPronoun === "they/them" ? "text-green-600" : ""
              }`}
              onClick={() => selectPronoun("they/them")}
            >
              they/them
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="text-black text-[1.5rem]">Relationship status</div>
          <div className="flex items-start gap-4">
            <div
              className={`flex justify-center items-center gap-2.5 py-2 px-6 rounded-full border-2 border-black bg-white/0 text-black text-center font-['Readex text-lg font-bold ${
                selectedStatus === "single" ? "text-green-600" : ""
              }`}
              onClick={() => selectStatus("single")}
            >
              single
            </div>
            <div
              className={`flex justify-center items-center gap-2.5 py-2 px-6 rounded-full border-2 border-black bg-white/0 text-black text-center font-['Readex text-lg font-bold ${
                selectedStatus === "in a relationship" ? "text-green-600" : ""
              }`}
              onClick={() => selectStatus("in a relationship")}
            >
              in a relationship
            </div>
            <div
              className={`flex justify-center items-center gap-2.5 py-2 px-6 rounded-full border-2 border-black bg-white/0 text-black text-center font-['Readex text-lg font-bold leading-[normal] ${
                selectedStatus === "other" ? "text-green-600" : ""
              }`}
              onClick={() => selectStatus("other")}
            >
              other
            </div>
          </div>
        </div>
        <div className="w-[80%] h-[80%] flex justify-end items-end p-8 flex-col">
          <Link
            to={
              selectedStatus && selectedPronoun && selectedCountry
                ? `/experience?name=${name}`
                : "#"
            }
          >
            <button
              className={`status_default ${
                selectedStatus && selectedPronoun && selectedCountry
                  ? "bg-[#8BC965]"
                  : "bg-gray-400 cursor-not-allowed"
              } inline-flex font-bold justify-center items-center h-12 w-36 rounded-[0.625rem] border-2 border-black text-black font-['Inter'] text-md leading-[normal]`}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Name;
