import React from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";
import Icon from "../components/Icon";
import MenuClose from "../components/MenuClose";
import Rectangle from "../components/Rectangle";
import { useNavigate } from "react-router-dom";
import check from "../../assets/check.png";
import play from "./../../assets/play.png";
import redo from "../../assets/redo.png";
import record from "../../assets/record.png";
import RetroRoundedCorner from "../components/RetroRoundedCorner";
import prettyMilliseconds from "pretty-ms";
import { useState } from "react";

function Record() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
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
      <div className="pt-6" onClick={goBack}>
        <Icon />
      </div>
      <div>
        <div className="flex justify-end">
          <MenuClose />
        </div>
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
      </div>

      {/*  Record */}
      <div className="bg-[#FFEDCC] h-[100vh] pt-10 px-16 pl-[107px] w-[80%]">
        <div className="bg-white h-[350px] pt-[70px] border rounded-lg border-[#FFA355]">
          <VoiceVisualizer
            isControlPanelShown={false}
            controls={recorderControls}
            ref={audioRef}
            height={200}
            width={"100%"}
            backgroundColor={"#FFBEAA"}
            recordedBlob={Blob}
            mainBarColor={"#000000"}
            secondaryBarColor={"#000000"}
          />
          <div className="flex flex-row mt-8 px-20 justify-between">
            <h2> {time}</h2>
            {time === "1:00" ? stopRecording() : null}
            <h2>8:00</h2>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-4">
          <button onClick={togglePauseResume}>
            <img src={play} alt="" />
          </button>
          <div onClick={() => Setclick(!click)}>
            {!click ? (
              <button onClick={startRecording}>
                <img src={record} alt="" />
              </button>
            ) : (
              <button onClick={stopRecording}>
                <div className="relative">
                  <img src={record} alt="" />
                  <div className="absolute top-0  justify-center items-center flex h-16 w-16">
                    <div className="rounded h-4 w-4 bg-white" />
                  </div>
                </div>
              </button>
            )}
          </div>
          <button onClick={clearCanvas}>
            <img src={redo} alt="" />
          </button>

          <button onClick={recordedBlob}>
            <img src={check} alt="" />
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col flex-shrink-0 justify-center -pt-64 h-[2.1875rem] text-black text-center font-['Readex text-sm leading-[normal] underline">
        Need a prompt to get started?
      </div>
    </div>
  );
}

export default Record;
