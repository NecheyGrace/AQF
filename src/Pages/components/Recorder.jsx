import React from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";
//import Icon from "./assets/Icon";
//import MenuClose from "./assets/MenuClose";
//import Rectangle from "./assets/Rectangle";
//import { useNavigate } from "react-router-dom";

import play from "../../assets/play.png";
import redo from "../../assets/redo.png";
import record from "../../assets/record.png";
//import RetroRoundedCorner from "./assets/RetroRoundedCorner";
import prettyMilliseconds from "pretty-ms";
import { useState } from "react";
import { Link } from "react-router-dom";

function Recorder() {
  //   const navigate = useNavigate();
  //   const goBack = () => {
  //     navigate(-1);
  //   };
  const recorderControls = useVoiceVisualizer();
  const {
    recordedBlob,
    startRecording,
    togglePauseResume,
    saveAudioFile,
    error,
    duration,
    audioRef,
    isCleared,
    stopRecording,
    recordingTime,
    currentAudioTime,
    bufferFromRecordedBlob,
    clearCanvas,
    isRecordingInProgress,
  } = recorderControls;

  const time = String(
    prettyMilliseconds(recordingTime, { colonNotation: true })
  ).slice(0, 4);

  const stopTime = "8:00";

  const [click, Setclick] = useState(false);
  return (
    <div className="bg-[#FFEDCC] w-full h-full">
      {/* <div className="pt-6"><Icon /></div>
      <div>
        <div className="flex justify-end"><MenuClose /></div>
      </div>
      <Rectangle text={"The stories we tell shape our view of the world"} />
      <div className="flex justify-between  pt-[37px]">
        <div className="flex-shrink-0 w-[436px] h-[3.3125rem] pl-[107px]">
          <input
            type="text"
            placeholder=" Title your story"
            className="bg-[#FFEDCC] w-[401px] text-[#666] outline-none font-['Readex text-[1.375rem] leading-[normal] "
          />

          <div className="w-[435px] h-px bg-black" />
          <div className="Pro'] w-[401px] text-black font-['Readex text-lg leading-[normal]">
            [Challenge tags selected]
          </div>
        </div>
        <div className="pr-[300px]">
          <RetroRoundedCorner name={"Simplify for me"} />
        </div>
      </div> */}

      {/*  Record */}
      <div className="bg-[#FFEDCC] mt-7 pr-10 w-full">
        <div className="bg-white h-[350px] pt-[70px] border rounded-lg border-[#FFA355]">
          <VoiceVisualizer
            isControlPanelShown={false}
            controls={recorderControls}
            ref={audioRef}
            height={200}
            //width={800}
            backgroundColor={"#FFBEAA"}
            recordedBlob={Blob}
            mainBarColor={"#000000"}
            secondaryBarColor={"#000000"}
          />
          <div className="flex flex-row justify-between px-20 mt-8">
            <h2> {time}</h2>
            {time === "1:00" ? stopRecording() : null}
            <h2>8:00</h2>
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-6">
          <button
            onClick={togglePauseResume}
            className="flex flex-col items-center"
          >
            <img src={play} alt="" />
            <p>Play</p>
          </button>
          <div onClick={() => Setclick(!click)}>
            {!click ? (
              <button
                onClick={startRecording}
                className="flex flex-col items-center"
              >
                <img src={record} alt="" />
                <p>Record</p>
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  <img src={record} alt="" />
                  <div className="absolute top-0 flex items-center justify-center w-16 h-16">
                    <div className="w-4 h-4 bg-white rounded" />
                  </div>
                </div>
                <p>Stop</p>
              </button>
            )}
          </div>
          <button onClick={clearCanvas} className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M40 16H32V21.3334L40 21.3334C44.4106 21.3334 48 24.9227 48 29.3334C48 33.744 44.4106 37.3334 40 37.3334H24L24 29.3334L10.6666 40L24 50.6667V42.6667H40C47.352 42.6667 53.3333 36.6854 53.3333 29.3334C53.3333 21.9814 47.352 16 40 16Z"
                fill="#999999"
              />
            </svg>
            <p>Restart</p>
          </button>

          <button onClick={recordedBlob} className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M26.6667 41.5627L17.8854 32.7813L14.1147 36.552L26.6667 49.104L52.552 23.2187L48.7813 19.448L26.6667 41.5627Z"
                fill="#999999"
              />
            </svg>
            <Link to="/pause">
              <p>Finish</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recorder;
