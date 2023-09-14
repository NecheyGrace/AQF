import heart from '../assets/heart.png'
import door from '../assets/door.png'
import message from '../assets/message.png'
import cotton from '../assets/cotton.png'
import {Link } from "react-router-dom";
import White from './components/White';

import RetroRoundedCorner from './components/RetroRoundedCorner'

function Onboarding() {
  
  return (
    <>
    <style> {`
  .frame_104 {
gap: 20px;
}

.vector {
fill: #484848;
}

.vector {
fill: #484848;
}

.vector {
fill: #484848;
}`}
</style>
   

    <div className='flex flex-row h-[952px] family-sans bg-black'>
      <White  />
       <div className="w-[40%] h-[952px]  rounded-2xl">
       <img src={cotton} className='w-full h-[952px] rounded-r-3xl  object-cover '  />
       </div>
       <div className="flex flex-col flex-shrink-0 justify-center items-start w-[878px] h-[952px] rounded-tl-3xl rounded-bl-3xl bg-[#ffedcc]">
  <div className="flex flex-col items-start gap-10 py-0 px-20">
    <div className="Pro'] w-[609px] text-black font-['Readex text-[2.6875rem] font-light leading-[normal]">At AQF, we wholeheartedly believe in the power of conversation. </div>
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-start gap-2.5 Pro'] w-[609px] text-black font-['Readex text-[2.1875rem] leading-[normal]">
        We champion every dialogue:
      </div>
      <div className="flex items-center gap-2.5">
        <div className="frame_104 flex flex-col items-start">
          <div className="w-6 h-6">
            <img className='py-3' src={heart} alt="" />
            <p></p>
          </div>
          <div className="w-6 h-6">
          <img className='py-3' src={message} alt="" />
          </div>
          <div className="w-6 h-6">
          <img className='py-3' src={door} alt="" />
          </div>
        </div>
        <div className="Pro'] w-[609px] text-black font-['Readex text-[1.75rem] font-light leading-[normal]">a heart-to-heart with yourself,<br /> a comforting chat with a friend, <br /> or opening up to someone new.</div>
      </div>
    </div>
    <div className='flex flex-col justify-end'>
<Link to="/commitment">
<RetroRoundedCorner name={'Next'} />
</Link>
</div>
  </div>
</div>

     
    </div>
    </>
  )
}

export default Onboarding