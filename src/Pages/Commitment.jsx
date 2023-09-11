import august from '../assets/august.jpg'
import {Link } from "react-router-dom";

function Commitment() {
  return (
    <div className='flex flex-row h-[100vh] family-'>
       <div className="w-[40%] bg-black rounded-4xl">
        <img src={august} alt="" />
       </div>
      <div className="w-[60%]  pt-44 px-16 rounded-2xl font-sans">
      <div className="flex  justify-center flex-col">
        <h3 className="text-3xl font-bold pb-6">
         Our Commitment
         </h3>

    </div>
      <div className="py-2 text-xl ">

         <div className=''> 
          
          <li className="list-disc font-bold">Zero judgement Zone: </li>
          <p>It dosent matter if you are battling personal demons, facing relationship issues, or simply
            having a tough day - this is your judgement-free refuge
          </p>
          </div>
          <div className=''> 
          <li className="list-disc font-bold">Supportive Community:</li>
          <p>We are building AQF into a vibrant, empathetic community. Our members
            come from all walks of life, ready to hear you or share their own experiences. Together, we are a lifeline </p>
          </div>
           <div className=''> 
           <li className="list-disc font-bold">Safe and Secure</li>
          <p> Your privacy is our utmost concern. At AQF we ensure your data is protected, and only what you want to share is shared</p>
         </div>
        
      </div>
      <Link to="/name">
      <div className="flex flex-wrap justify-end pt-14 ">
    <a className="relative" href="#">
        <span className="absolute top-0 left-0 mt-1 ml-1  w-48 h-16 rounded bg-black"></span>
        <span className="flex justify-center items-center fold-bold relative  w-48 h-16 rounded border-2 border-black bg-orange-700 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent">Next</span>
    </a>
      </div>
      </Link>

      </div>
     
     
    </div>
  )
}

export default Commitment