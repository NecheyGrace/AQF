import React from 'react'
import {Link } from "react-router-dom";
import RetroRoundedCorner from './components/RetroRoundedCorner';
import Icon from '../Pages/components/Icon'
import '../index.css'


const TextInput = ({ text }) => {
    return (
      <div className="flex items-center">
        <div className="flex my-1 items-center w-[200px]">
          <p className="text-[28px] mr-2">{text}</p>
        </div>
        <input className=" px-4 w-[400px] h-[35px] border border-black rounded-full" />
      </div>
    );
  };
function Login() {
  return (
   
    <div className="w-[1440px] h-[1024px] bg-[#FFEDCC] flex justify-center items-center">
        <Icon />

        <div className='w-[982px] h-[563px] bg-[#FFD1AA] flex flex-col justify-center items-center rounded-3xl font-[Readex Pro] text-4xl font-light'>

            <h3  className=" w-[609px] text-black font-['Readex text-[2.6875rem] font-bold leading-[normal] text-center">Welcome back</h3>

            <div className='flex flex-col justify-center items-center mt-5 pb-5'>
            <TextInput text={"Email address"} />
        <TextInput text={"Password"}  />
            </div>
            <div className='pt-5 space-y-4 '>
            <Link to='/login'>
  <RetroRoundedCorner
 name={'Login'
 } 
/>
</Link>
<p className='text-base text-[#000000] underline'>Forgot Your password</p>
</div>

        </div>
        

 </div>
 
        )
  
}

export default Login