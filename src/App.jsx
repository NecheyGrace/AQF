import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Onboarding from "./Pages/Onboard/Onboarding";

import Name from "./Pages/Name";
import Email from "./Pages/Email";
import Experience from "./Pages/Experience";
import Topic from "./Pages/Topic";

import Intro from "./Pages/Landing/Intro";
import Role from "./Pages/Role";

import Area from "./Pages/Area";
import Finish from "./Pages/Finish";
import Login from "./Pages/Landing/Login";
import Overcoming from "./Pages/Overcoming";
import Facing from "./Pages/Facing";
import Audio from "./Pages/Audio";
import Current from "./Pages/Onboard/Current";
import MenuClose from "./Pages/components/MenuClose";
import MenuOpen from "./Pages/components/MenuOpen";
import Footer from "./Pages/components/Footer";
import Profile from "./Pages/Profile";
import StoryLibrary from "./Pages/StoryLibrary";
import Card from "./Pages/components/Card";
import Label from "./Pages/Onboard/Struggle/Label";
import Feel from "./Pages/Onboard/Struggle/Feel";
import Story from "./Pages/Onboard/Struggle/Story";
import Prompt from "./Pages/Onboard/Struggle/Prompt";
import Feeling from "./Pages/Onboard/Challenge/Feeling";
import Prompts from "./Pages/Onboard/Challenge/Prompts";
import Right from "./Pages/Onboard/Challenge/Right";
import Situation from "./Pages/Onboard/Challenge/Situation";
import Storytelling from "./Pages/Onboard/Challenge/Storytelling";
import Record from "./Pages/Onboard/Record";
import Currents from "./Pages/Currents";
import Past from "./Pages/Past";
import MobileMessage from "./Pages/MobileMessage";
import { useState } from "react";
import { useEffect } from "react";
import Setup from "./Pages/Setup";
import Otp from "./Pages/Otp";
import Pause from "./Pages/Pause";
import Final from "./Pages/components/Final";

function App() {
  // return (
  //   <>
  //     <Audio />
  //   </>
  // );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", checkScreenWidth);
    checkScreenWidth();

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1);
  // };
  // if (isMobile) {
  //   navigate("/mobile-message");
  //   return null;
  // }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/past" element={<Past />} />
        <Route path="/pause" element={<Pause />} />
        <Route path="/currents" element={<Currents />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/mobile-message" element={<MobileMessage />} />
        <Route path="/prompt" element={<Prompt />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/record" element={<Record />} />
        <Route path="/label" element={<Label />} />
        <Route path="/situation" element={<Situation />} />
        <Route path="/current" element={<Current />} />
        <Route path="/feel" element={<Feel />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/feeling" element={<Feeling />} />
        <Route path="/right" element={<Right />} />
        <Route path="/name" element={<Name />} />
        <Route path="/email" element={<Email />} />
        <Route path="/story" element={<Story />} />
        <Route path="/storytelling" element={<Storytelling />} />
        <Route path="/storylibrary" element={<StoryLibrary />} />
        <Route path="/role" element={<Role />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/area" element={<Area />} />
        <Route path="/overcoming" element={<Overcoming />} />
        <Route path="/facing" element={<Facing />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/final" element={<Final />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/otp" element={<Otp />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
