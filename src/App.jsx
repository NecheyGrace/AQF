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


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(<Route>
  <Route index element={<Intro/>}/>
         <Route path="/onboarding" element={<Onboarding/>} />
         <Route path="/email" element={<Email/>} />

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
