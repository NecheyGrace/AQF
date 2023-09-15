import React from 'react'
import {Link } from "react-router-dom";
import Icon from '../Pages/components/Icon'
import RetroRoundedCorner from './components/RetroRoundedCorner';

function Area() {
    const buttonTitles = [
        "Overcoming Adversity",
        "Career Transitions",
        "Financial Hardships",
        "Health Struggles",
        "Loss and Grief",
        "Mental Health Challenges",
        "Cultural Barriers",
        "Educational Obstacles",
        "Personal Relationships",
        "Work-Life Balance",
        "Social Isolation",
        "Discrimination and Prejudice",
        "Identity Crisis",
        "Language Barriers",
        "Addiction and Recovery",
        "Creative Blocks",
        "Environmental Challenges",
        "Parenting Challenges",
        "Technological Challenges",
        "Legal Battles",
      ];
  return (
   <div className='h-[952px] w-[1440px] bg-[#FFEDCC] flex flex-col justify-center  font-[Readex Pro] pl-[84px] pr-[90px]'>
   <Icon />
   <div className='py-12'>
      <h3 className='text-4xl font-bold'>What challenge areas have you overcome?</h3>
      <p className='py-2 font-semibold'>You can change your selection at any time in your profile.</p>
   </div>
   <div className="flex flex-wrap items-start content-start gap-4 w-[1266px]">
      {buttonTitles.map((title, index) => (
        <button
          key={index}
          className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0 Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]"
        >
          {title}
        </button>
      ))}
 <div className='bg-[#FFEDCC] w-full flex justify-end items-center pr-8 pt-32 flex-row space-x-16' >
   <span className='underline text-2xl '>Skip</span>
   <Link to='/facing'>
   <RetroRoundedCorner name={'Next'} />
   </Link></div>
</div>
</div>
  )
}

export default Area