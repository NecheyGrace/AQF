import {Link } from "react-router-dom";
import Icon from '../Pages/components/Icon'
import RetroRoundedCorner from './components/RetroRoundedCorner';


function Experience() {
  return (
    <div  className="h-[952px] font-sans bg-[#FFEDCC]">
        <Icon  />
        <div className="flex justify-center items-center h-[952px]">
            <div>
            <h3 className="text-5xl font-bold  pb-5">Now, let us dive into your experiences</h3>
            <p className="text-4xl font-medium">We are will use your answers to provide curated guidance and <br /> thoughtful prompts to kickstart your experience </p>
        </div>
        </div>
        <div className='bg-[#FFEDCC] w-full flex items-end pr-8 pt-40 flex-col'>
      <Link to='/topic'>
      <RetroRoundedCorner name={'Next'} />
      </Link></div>
    </div>
  )
}

export default Experience