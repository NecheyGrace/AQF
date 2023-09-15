import React from 'react'
import Icon from '../Pages/components/Icon'
import RetroRoundedCorner from './components/RetroRoundedCorner';

import {Link } from "react-router-dom";

function Topic() {

   const categories = [
   'Personal Growth',
  'Career Advancement',
  'Travel Adventures',
  'Health and Fitness Journeys',
  'Creative Pursuits',
  'Academic Achievements',
  'Cultural Immersion',
  'Volunteer and Charity Work',
  'Family and Parenthood',
  'Entrepreneurial Ventures',
  'Relationship Milestones',
  'Spiritual Awakening',
  'Artistic Expressions',
  'Sporting Achievements',
  'Educational Milestones',
  'Technological Innovations',
  'Personal Achievements',
  'Cross-Cultural Experiences',
  'Outdoor Expeditions',
  'Scientific Discoveries',
];
  return (
   <div className='h-[952px] w-[1440px] bg-[#FFEDCC] flex flex-col justify-center  font-[Readex Pro] px-[84px]'>
      <Icon />
      <div className='py-12'>
         <h3 className='text-4xl font-bold'>What topics would you like to learn from and talk about?</h3>
         <p className='py-2 font-semibold'>You can change your selection at any time in your profile.</p>
      </div>
   <div className="flex flex-wrap items-start content-start gap-4 w-[1266px]">
   {categories.map((category, index) => (
     <button
       key={index}
       className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0 Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
       {category}
     </button>
   ))}
    <div className='bg-[#FFEDCC] w-full flex justify-end items-center pr-8 pt-32 flex-row space-x-16' >
      <span className='underline text-2xl '>Skip</span>
      <Link to='/area'>
      <RetroRoundedCorner name={'Next'} />
      </Link></div>
 </div>
 </div>
  )
}

export default Topic