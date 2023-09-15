import { useState } from 'react';
import header from '../assets/header.png'
import RetroRoundedCorner from './components/RetroRoundedCorner';
import {Link } from "react-router-dom";

function Name() {
  const [name, setName]  = useState('')
  return (
   <div className="h-[100vh] ">
      <div className="h-[200px] w-full">
        <img src={header} className="w-full h-full" />
      </div>
      <div className="bg-[#FFEDCC] items-center pt-20 flex flex-col h-[60%] ">
        <h3 className="text-[44px] font-bold">What's your name?</h3>
        <input className="mt-5 px-4 w-[720px] h-[38px] border border-black rounded-full" />
        <p className="mt-2 text-sm">
          While we encourage real names for storytelling, use whatever name you
          feel most comfortable with.
        </p>
      </div>
       <div className='bg-[#FFEDCC] w-full flex items-end pr-8 pb-8 flex-col'>
      <Link to='/email'>
      <RetroRoundedCorner name={'Next'} />
      </Link></div>
    </div>
  )
}

export default Name

