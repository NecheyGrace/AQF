import {Link } from "react-router-dom";
import header1 from '../assets/header1.png'
import i from '../assets/bx-info-circle.svg'
import RetroRoundedCorner from './components/RetroRoundedCorner';

const TextInput = ({ text, image }) => {
  return (
    <div className="flex items-center justify-between  w-[750px] -ml-5">
      <div className="flex my-1 items-center">
        <p className="text-[28px] mr-2">{text}</p>
        {image ? <img src={image} /> : null}
      </div>
      <input className=" px-4 w-[400px] h-[35px] border border-black rounded-full" />
    </div>
  );
};

function Name() {
    return (
     <div className="h-[100vh]">
      <div className="h-[200px] w-full ">
        <img src={header1} className="w-full h-full" />
      </div>
      <div className="bg-[#FFEDCC] items-center pt-20 flex flex-col h-[60%] ">
        <h3 className="text-[44px] font-bold mb-8">
          Hey Amara, let’s start with the basics
        </h3>
        <TextInput text={"Email address"} />
        <TextInput text={"Password"} image={i} />
        <TextInput text={"Confirm Password"} />
      </div>
      <div className='bg-[#FFEDCC] w-full flex items-end pr-8 pb-8 flex-col'>
      <Link to='/detail'>
      <RetroRoundedCorner name={'Next'} />
      </Link></div>
    </div>
    )
  }
  
  export default Name