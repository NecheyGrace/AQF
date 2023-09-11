import React from 'react'
import mikhail from '../assets/mikhail.jpg'
import {Link } from "react-router-dom";


function Finish() {
  return (
    <div className='flex flex-row h-[100vh]'>
        <div className='w-[40%]'>
            <img src={mikhail} className='w-full h-full object-cover' alt="" />
        </div>
        <div className='w-[60%] flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
            <h3  className='text-4xl  font-bold'>Nice work you are all set up from here</h3>
            <p className='text-4xl  font-medium'>Where will you like to go first</p>

            </div>
            <div className='flex flex-row justify-center items-center'>
           
        <div className="flex flex-wrap px-4 ">
    <a className="relative" >
        <span className="absolute top-0 left-0 mt-1 ml-1  w-44 h-20 rounded-lg bg-black"></span>
        <span className="flex justify-center items-center fold-bold relative  w-44 h-20  rounded-lg border-2 border-black bg-orange-700 px-3 py-1 text-xl text-center font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent ">Finish my profile</span>
    </a>
      </div>

      <div className="flex flex-wrap  px-4 ">
    <a className="relative" >
        <span className="absolute top-0 left-0 mt-1 ml-1  w-44 h-20 rounded-lg bg-black"></span>
        <span className="flex justify-center items-center fold-bold relative  w-44 h-20  rounded-lg border-2 border-black bg-orange-700 px-3 py-1 text-xl text-center font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent ">Record Your first story</span>
    </a>
      </div>

      <div className="flex flex-wrap px-4 ">
    <a className="relative" >
        <span className="absolute top-0 left-0 mt-1 ml-1  w-44 h-20 rounded-lg bg-black"></span>
        <span className="flex justify-center items-center fold-bold relative w-44 h-20 rounded-lg border-2 border-black bg-orange-700 px-3 py-1 text-xl text-center font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent ">Visit your story library</span>
    </a>
      </div>
       </div>
       </div>
    </div>
  )
}

export default Finish