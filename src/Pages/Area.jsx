import React from 'react'
import {Link } from "react-router-dom";

function Area() {
  return (
    <div className='bg-amber-200 h-[100%] flex flex-col justify-center items-center'>
    <div className='py-16'>
        <h3 className='text-5xl font-bold pb-4'>What topics will you like to learn from and talk about</h3>
        <p className='text-lg font-medium'>You can change your Selection at any point on your Profile </p>
    </div>
    <div>
        <div className='flex justify-center'>
            
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold rounded-full'>Personal Growth</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Career Advancement</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Travel Adventures</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Health and fitness Journey</button></div>
         </div>

         <div className='flex justify-center'>
            
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Personal Growth</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold rounded-full'>Career Advancement</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Travel Adventures</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Health and fitness Journey</button></div>
         </div>

         <div className='flex justify-center'>
            
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Personal Growth</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Career Advancement</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Travel Adventures</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Health and fitness Journey</button></div>
         </div>

         <div className='flex justify-center'>
            
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Personal Growth</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Career Advancement</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Travel Adventures</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Health and fitness Journey</button></div>
         </div>

         <div className='flex justify-center'>
            
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Personal Growth</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Career Advancement</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Travel Adventures</button></div>
            <div className='py-2 px-2 '><button className='w-72 h-16 border-2 border-amber-950 text-black text-xl font-bold  rounded-full'>Health and fitness Journey</button></div>
         </div>
    </div>
    <div className='flex flex-row py-8 justify-end items-end'>
    <div>
<p className='underline text-lg'>Skip</p>
</div>
<Link to='/final'>

<div className="flex flex-wrap justify-end pt-4 mb-3 mr-3 ">
<a className="relative" href="#">
<span className="absolute top-0 left-0 mt-1 ml-1  w-52 h-12 rounded bg-black"></span>
<span className="flex justify-center items-center fold-bold relative  w-52 h-12 rounded border-2 border-black bg-orange-700 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent">Next</span>
</a>
</div>
</Link>
    </div>
</div>
  )
}

export default Area