import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import plus from "../assets/bxs-plus-circle.svg";
import minus from "../assets/bxs-minus-square.svg";
import Recorder from "./components/Recorder";
import bookmark from "../assets/bookmark.png";
//import savedbookmark from "./assets/bookmarkS.png";

const PastChallenges = () => {
  const [state, setState] = useState(0);
  const [prompt, setPrompt] = useState(false);
  return (
    <div className="flex min-h-screen space-x-1 bg-black ">
      <div className="bg-[#FFD1AA] w-[36%] rounded-r-2xl">
        <div className="absolute p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M10 6C7.794 6 6 7.794 6 10V38C6 40.206 7.794 42 10 42H38C40.206 42 42 40.206 42 38V10C42 7.794 40.206 6 38 6H10ZM29.414 32.586L26.586 35.414L15.172 24L26.586 12.586L29.414 15.414L20.828 24L29.414 32.586Z"
              fill="#FFA355"
            />
          </svg>
        </div>
        <div
          className={
            state === 0
              ? `flex flex-col items-center h-[100vh] justify-center`
              : `flex flex-col items-center h-[100vh] justify-center mt-8 `
          }
        >
          {PastChallengeFlow.map((questions, key) => {
            if (key === state) {
              return (
                <>
                  <h3 className="text-4xl font-bold text-center w-[321px]">
                    {questions.title}
                  </h3>
                  {prompt && (
                    <div className="big h-[380px] mt-4 w-[300px] p-6   bg-white rounded-lg border-black border-[3px] font-[Readex Pro]">
                      <div className="flex justify-end w-full ">
                        <img src={bookmark} alt="" />
                      </div>
                      <div className="h-[70%] flex items-center pl-7">
                        Chosen Prompt text
                      </div>
                    </div>
                  )}
                  <button
                    className="mt-3 text-base underline"
                    onClick={() => setPrompt(!prompt)}
                  >
                    {!prompt ? questions?.button : <p>Change your prompt</p>}
                  </button>

                  {key > 0 && (
                    <>
                      <div className="big h-[380px] mt-4 w-[310px] flex  items-center justify-center  bg-white rounded-lg border-black border-[3px] font-[Readex Pro] text-xl ">
                        <ul className="bullet flex flex-col  list-disc justify-center h-full w-[210px]  space-y-4">
                          {questions?.prompt1 && (
                            <li className="flex gap-2">
                              {key > 2 ? null : <p>●</p>}
                              <div>{questions?.prompt1}</div>
                            </li>
                          )}
                          {questions?.prompt2 && (
                            <li className="flex gap-2">
                              ● <div>{questions?.prompt2}</div>
                            </li>
                          )}
                          {questions?.prompt3 && (
                            <li className="flex gap-2">
                              ● <div>{questions?.prompt3}</div>
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="flex mt-4">
                        <button
                          onClick={() => setState(state - 1)}
                          className={
                            key === 4
                              ? `flex items-center justify-center w-[300px] bg-white border border-gray-500 rounded-full h-9`
                              : `flex items-center bg-white border border-gray-500 rounded-l-full h-9`
                          }
                        >
                          {key === 4 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="20"
                              viewBox="0 0 17 28"
                              fill="none"
                            >
                              <path
                                d="M14.7924 26.7077C14.0113 27.4888 12.7449 27.4888 11.9639 26.7076L0.671986 15.4142C-0.108931 14.6331 -0.108932 13.367 0.671984 12.5859L11.9639 1.29247C12.7449 0.511324 14.0113 0.511278 14.7924 1.29237L16.2077 2.70769C16.9888 3.4888 16.9888 4.75524 16.2076 5.53626L9.15671 12.5857C8.37547 13.3668 8.37547 14.6333 9.15671 15.4144L16.2076 22.4638C16.9888 23.2449 16.9888 24.5113 16.2077 25.2924L14.7924 26.7077Z"
                                fill="#1A1A1A"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="142"
                              height="39"
                              viewBox="0 0 142 49"
                              fill="none"
                            >
                              <path
                                d="M30.2914 37.2077C29.5103 37.9888 28.2439 37.9888 27.4629 37.2076L16.171 25.9142C15.3901 25.1331 15.3901 23.867 16.171 23.0859L27.4629 11.7925C28.2439 11.0113 29.5103 11.0113 30.2914 11.7924L31.7067 13.2077C32.4878 13.9888 32.4878 15.2552 31.7066 16.0363L24.6557 23.0857C23.8745 23.8668 23.8745 25.1333 24.6557 25.9144L31.7066 32.9638C32.4878 33.7449 32.4878 35.0113 31.7067 35.7924L30.2914 37.2077Z"
                                fill="#1A1A1A"
                              />
                            </svg>
                          )}
                        </button>

                        <button
                          onClick={() => setState(state + 1)}
                          className={
                            key === 4
                              ? `hidden`
                              : `flex items-center bg-white border border-gray-500 rounded-r-full h-9`
                          }
                        >
                          <svg
                            className="rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            width="142"
                            height="39"
                            viewBox="0 0 142 49"
                            fill="none"
                          >
                            <path
                              d="M30.2914 37.2077C29.5103 37.9888 28.2439 37.9888 27.4629 37.2076L16.171 25.9142C15.3901 25.1331 15.3901 23.867 16.171 23.0859L27.4629 11.7925C28.2439 11.0113 29.5103 11.0113 30.2914 11.7924L31.7067 13.2077C32.4878 13.9888 32.4878 15.2552 31.7066 16.0363L24.6557 23.0857C23.8745 23.8668 23.8745 25.1333 24.6557 25.9144L31.7066 32.9638C32.4878 33.7449 32.4878 35.0113 31.7067 35.7924L30.2914 37.2077Z"
                              fill="#1A1A1A"
                            />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </>
              );
            }
          })}
        </div>
      </div>
      <div className="bg-[#FFEDCC] w-[64%] rounded-l-2xl pt-24 pl-16 flex flex-col pb-8">
        <div>
          <input
            type="text"
            name="story"
            id="story"
            placeholder="Title your story"
            className="bg-transparent border-b border-[#666666] w-[50%] text-2xl outline-none font-bold placeholder:text-[#666666]"
          />
          <div className="flex mt-2 space-x-2">
            <button className="flex gap-2 border border-[#1A1A1A] rounded-full xl px-4 py-1">
              Overcoming Adversity
              <img src={minus} />
            </button>
            <button className="flex gap-2 border border-[#1A1A1A] rounded-full xl px-4 py-1">
              Health Struggles
              <img src={minus} />
            </button>
            <button className="flex gap-2 border border-[#1A1A1A] rounded-full xl px-4 py-1">
              Social Isolation
              <img src={minus} />
            </button>
            <img src={plus} />
          </div>
        </div>
        <Recorder />

        <div className="flex justify-center w-full mt-6 mb-8">
          <button
            className="button h-12 flex w-[250px] items-center justify-center gap-2 font-bold text-sm"
            onClick={() => [setPrompt(false), setState(state + 1)]}
          >
            Help me break the story down
          </button>
        </div>
      </div>

      <button className="absolute top-0 right-0 w-[65px] mt-3 text-sm bg-[#FFD380] flex flex-col items-center justify-center rounded-l-lg h-[85px]">
        <img src={hamburger} className="mb-3" alt="" />
        Menu
      </button>
    </div>
  );
};

export default PastChallenges;

const PastChallengeFlow = [
  {
    key: 0,
    title: "This is your story",
    button: "Need a prompt to get started?",
  },
  {
    key: 1,
    title: "Describe the situation",
    prompt1: "What did I learn?",
    prompt2: "What actions did I take?",
    prompt3: "What was good and bad about the experience?",
  },
  {
    key: 2,
    title: "Evaluate the experience",
    prompt1: "What could I have done to improve the outcome?",
    prompt2: " What is my understanding of the situation now?",
  },
  {
    key: 3,
    title: "Focus on the future",
    prompt1: "What do I need to make things better next time?",
  },
  {
    key: 4,
    title: "Anything else you want to add?",
    prompt1: "Use this space to record anything else you want to get out.",
  },
];
