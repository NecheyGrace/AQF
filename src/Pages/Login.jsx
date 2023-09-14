import React from 'react'
import {Link } from "react-router-dom";
import RetroRoundedCorner from './components/RetroRoundedCorner';
import Icon from '../Pages/components/Icon'
import '../index.css'

function Login() {
  return (
   
    <div className="w-[1440px] h-[1024px] bg-[#FFEDCC] flex justify-center items-center">
        <Icon />

        <div className='w-[982px] h-[563px] bg-[#FFD1AA] flex flex-col justify-center items-center rounded-3xl font-[Readex Pro] text-4xl font-light'>

            <h3  className="Pro'] w-[609px] text-black font-['Readex text-[2.6875rem] font-bold leading-[normal] text-center">Welcome back</h3>

            <div className='flex flex-col justify-center items-center'>
                <div className='space-y-8  flex'>
                    <p>Email address</p>
                    <div className=' w-[477px] h-[37px]'><input className='rounded-3xl border border-black '  type="email" name="" id="" /></div>

                  
                </div>
                <div className='flex'>
                <p>Password</p>
                    <div className=' w-[477px] h-[37px]'><input className='rounded-3xl border border-black' type="password" name="" id="" />
                   </div>
                </div>
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