
import { useEffect } from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";
import check from "../assets/check.png";
import play from "../assets/play.png";
import redo from "../assets/redo.png";
import record from "../assets/record.png";
import prettyMilliseconds from "pretty-ms";
import { useState } from "react";

const Audio = () => {
  const recorderControls = useVoiceVisualizer();
  const {
    // ... (Extracted controls and states, if necessary)
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
    <div className="bg-[#FFEDCC] h-[100vh] pt-10 px-16">
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
  );
};

export default Audio;
