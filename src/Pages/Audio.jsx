// import { useReactMediaRecorder } from "react-media-recorder";
// import React, { useEffect, useState } from "react";

// const RecordView = (props) => {
//   const [second, setSecond] = useState("00");
//   const [minute, setMinute] = useState("00");
//   const [isActive, setIsActive] = useState(false);
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     let intervalId;

//     if (isActive) {
//       intervalId = setInterval(() => {
//         const secondCounter = counter % 60;
//         const minuteCounter = Math.floor(counter / 60);

//         let computedSecond =
//           String(secondCounter).length === 1
//             ? `0${secondCounter}`
//             : secondCounter;
//         let computedMinute =
//           String(minuteCounter).length === 1
//             ? `0${minuteCounter}`
//             : minuteCounter;

//         setSecond(computedSecond);
//         setMinute(computedMinute);

//         setCounter((counter) => counter + 1);
//       }, 1000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isActive, counter]);

//   function stopTimer() {
//     setIsActive(false);
//     setCounter(0);
//     setSecond("00");
//     setMinute("00");
//   }
//   const {
//     status,
//     startRecording,
//     stopRecording,
//     pauseRecording,
//     mediaBlobUrl,
//   } = useReactMediaRecorder({
//     video: false,
//     audio: true,
//     echoCancellation: true,
//   });
//   console.log("url", mediaBlobUrl);

//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         backgroundColor: "black",
//         width: "700px",
//         height: "350px",
//       }}
//     >
//       <div
//         style={{
//           border: "1px solid #bd9f61",
//           height: "70px",
//           backgroundColor: "#bd9f61",
//           display: "flex",
//         }}
//       >
//         <h4
//           style={{
//             marginLeft: "10px",
//             textTransform: "capitalize",
//             fontFamily: "sans-serif",
//             fontSize: "18px",
//             color: "white",
//           }}
//         >
//           {status}
//         </h4>
//       </div>
//       <div style={{ height: "38px" }}>
//         {" "}
//         <video src={mediaBlobUrl} controls loop />
//       </div>

//       <div
//         className="col-md-6 col-md-offset-3"
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           marginLeft: "357px",
//         }}
//       >
//         <button
//           style={{
//             backgroundColor: "black",
//             borderRadius: "8px",
//             color: "white",
//           }}
//           onClick={stopTimer}
//         >
//           Clear
//         </button>
//         <div style={{ marginLeft: "70px", fontSize: "54px" }}>
//           <span className="minute">{minute}</span>
//           <span>:</span>
//           <span className="second">{second}</span>
//         </div>

//         <div style={{ marginLeft: "20px", display: "flex" }}>
//           <label
//             style={{
//               fontSize: "15px",
//               fontWeight: "Normal",
//               // marginTop: "20px"
//             }}
//             htmlFor="icon-button-file"
//           >
//             <h3 style={{ marginLeft: "15px", fontWeight: "normal" }}>
//               Press the Start to record
//             </h3>

//             <div>
//               <button
//                 style={{
//                   padding: "0.8rem 2rem",
//                   border: "none",
//                   marginLeft: "15px",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                   fontWeight: "bold",
//                   backgroundColor: "#42b72a",
//                   color: "white",
//                   transition: "all 300ms ease-in-out",
//                   transform: "translateY(0)",
//                 }}
//                 onClick={() => {
//                   if (!isActive) {
//                     startRecording();
//                   } else {
//                     pauseRecording();
//                   }

//                   setIsActive(!isActive);
//                 }}
//               >
//                 {isActive ? "Pause" : "Start"}
//               </button>
//               <button
//                 style={{
//                   padding: "0.8rem 2rem",
//                   border: "none",
//                   backgroundColor: "#df3636",
//                   marginLeft: "15px",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   color: "white",
//                   borderRadius: "5px",
//                   fontWeight: "bold",
//                   transition: "all 300ms ease-in-out",
//                   transform: "translateY(0)",
//                 }}
//                 onClick={() => {
//                   stopRecording();
//                   pauseRecording();
//                 }}
//               >
//                 Stop
//               </button>
//             </div>
//           </label>
//         </div>
//         <b></b>
//       </div>
//     </div>
//   );
// };
// export default RecordView;
import React, { useState, useRef } from "react";
import { MediaRecorder, useReactMediaRecorder } from "react-media-recorder";
import { FiPlay, FiPause, FiTrash, FiSave, FiDownload } from "react-icons/fi"; // Import icons

const Audio = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
  } = useReactMediaRecorder({
    audio: true,
    onStop: (blobUrl) => setAudioBlob(blobUrl),
  });
  const audioRef = useRef(null);

  const handleStartRecording = () => {
    if (!isRecording) {
      startRecording();
      setIsRecording(true);
      setIsPaused(false);
    }
  };

  const handleStopRecording = () => {
    if (isRecording) {
      stopRecording();
      setIsRecording(false);
    }
  };

  const handlePauseRecording = () => {
    if (isRecording && !isPaused) {
      pauseRecording();
      setIsPaused(true);
    } else if (isRecording && isPaused) {
      resumeRecording();
      setIsPaused(false);
    }
  };

  const handleDeleteRecording = () => {
    setAudioBlob(null);
  };

  const handleSaveRecording = async () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append("audio", audioBlob);

      try {
        const response = await fetch("YOUR_SERVER_ENDPOINT", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("Audio saved successfully.");
        } else {
          alert("Failed to save audio.");
        }
      } catch (error) {
        console.error("Error saving audio:", error);
        alert("Error saving audio. Please try again later.");
      }
    }
  };

  const handleDownloadRecording = () => {
    if (audioBlob) {
      const url = window.URL.createObjectURL(audioBlob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "recorded-audio.wav"; // You can change the filename and extension
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  return (
    <div>
      <div className="flex">
        <button
          onClick={handleStartRecording}
          disabled={isRecording}
          className="m-2 p-2 bg-blue-500 text-white rounded-full"
        >
          <FiPlay />
        </button>
        <button
          onClick={handleStopRecording}
          disabled={!isRecording}
          className="m-2 p-2 bg-red-500 text-white rounded-full"
        >
          <FiPause />
        </button>
        <button
          onClick={handlePauseRecording}
          disabled={!isRecording}
          className="m-2 p-2 bg-yellow-500 text-white rounded-full"
        >
          {isPaused ? <FiPlay /> : <FiPause />}
        </button>
        <button
          onClick={handleDeleteRecording}
          disabled={!audioBlob}
          className="m-2 p-2 bg-gray-500 text-white rounded-full"
        >
          <FiTrash />
        </button>
        <button
          onClick={handleSaveRecording}
          disabled={!audioBlob}
          className="m-2 p-2 bg-green-500 text-white rounded-full"
        >
          <FiSave />
        </button>
        <button
          onClick={handleDownloadRecording}
          disabled={!audioBlob}
          className="m-2 p-2 bg-indigo-500 text-white rounded-full"
        >
          <FiDownload />
        </button>
      </div>
      {audioBlob && (
        <audio ref={audioRef} controls>
          <source src={audioBlob} type="audio/wav" />
        </audio>
      )}
    </div>
  );
};

export default Audio;
