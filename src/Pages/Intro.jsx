import pexels from '../assets/pexels.jpg'
import {Link } from "react-router-dom";


function Onboarding() {
  return (
    <div className='flex flex-row h-[100vh] family-'>
       <div className="w-[40%] bg-black rounded-2xl">
        <img src={pexels} alt="" /></div>
      <div className="w-[60%]  pt-28 px-16 rounded-2xl">
      <div className="flex  justify-center flex-col">
        <h3 className="text-5xl ">
            Humans have been telling stories for millenia to better
            understand the world and cultivate new perspectives 
            on old problems 

        </h3>
        <p className="text-5xl font-bold py-4">What is your story?</p>

    </div>
    <Link to="/onboarding">
      <div className="flex flex-wrap pt-12 pb-6 ">
    <a className="relative" href="#">
        <span className="absolute top-0 left-0 mt-1 ml-1  w-48 h-12 rounded bg-black"></span>
        <span className="flex justify-center items-center fold-bold relative  w-48 h-12 rounded-lg border-2 border-black bg-orange-700 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent">Get Started</span>
    </a>
      </div>
      </Link>
      <div>
        <p className="text-lg font-medium">Already an AQF member <span className="underline">Sign in</span> </p>
      </div>

      </div>
     
     
    </div>
  )
}

export default Onboarding