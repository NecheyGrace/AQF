import './index.css'
import { BrowserRouter as Router, Route, Routes, RouterProvider,createBrowserRouter, createRoutesFromElements, Link, Outlet} from "react-router-dom";
import Onboarding from './Pages/Onboarding'
  import Commitment from './Pages/Commitment' 
  import Name from './Pages/Name'
  import Email from './Pages/Email'
 import Experience from './Pages/Experience'
import Topic from './Pages/Topic'
 import Detail from './Pages/Detail'
 import Intro from './Pages/Intro'
 import Role from "./Pages/Role";
import Challenge from './Pages/Challenge';
import Area from './Pages/Area';
import Final from './Pages/Final';
import Finish from './Pages/Finish';
import Login from './Pages/Login';
import Overcoming from './Pages/Overcoming';
import Facing from './Pages/Facing';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(<Route>
  <Route index element={<Intro/>}/> 
         <Route path="/login" element={<Login/>} />
         <Route path="/onboarding" element={<Onboarding/>} />
         <Route path="/commitment" element={<Commitment/>} />
         <Route path="/name" element={<Name/>} />
         <Route path="/email" element={<Email/>} />
         <Route path="/detail" element={<Detail/>} />
         <Route path="/role" element={<Role/>} />
         <Route path="/experience" element={<Experience/>} />
         <Route path="/topic" element={<Topic/>} />
         <Route path="/challenge" element={<Challenge/>} />
         <Route path="/area" element={<Area/>} />
         <Route path="/overcoming" element={<Overcoming/>} />
         <Route path="/facing" element={<Facing/>} />
         <Route path="/final" element={<Final/>} />
         <Route path="/finish" element={<Finish/>} />



         </Route>
    ) );
  return <div className='App'><RouterProvider router={router}/></div>
 
  // return (
  //   <>
   
 
  //  <Router>
  //      <Routes>
  //       <Route exact path={'/'} element={<Intro/>}/>
  //       <Route path="/onboarding" element={<Onboarding/>} />
  //       <Route path="/email" element={<Email/>} />
  //       </Routes>
  //       </Router>
    
  //   </>
  // )
}


export default App