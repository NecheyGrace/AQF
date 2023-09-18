import React from 'react'

function Option() {
  return (
    <div>
    <div className="flex flex-col items-start py-1 px-4 w-[400px] rounded-lg border border-black bg-white">
      <div className="flex justify-between items-start self-stretch pt-[0.9375rem] pb-[0.9375rem] px-0 border-b border-b-[#000000]/[.30]">
        <div className=" text-[#868686] font-['Readex text-lg leading-[normal]">Select your country</div>
        <svg width={21} height={24} viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9386 7L5.06855 15L16.8086 15L10.9386 7Z" fill="#484848" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col items-start self-stretch">
      <div className="flex items-center gap-2.5 self-stretch py-2 px-0 bg-white Pro'] text-black font-['Readex text-lg leading-[normal]">
        Canada
      </div>
      <div className="flex items-center gap-2.5 self-stretch py-2 px-0 bg-white Pro'] text-black font-['Readex text-lg leading-[normal]">
        Nigeria
      </div>
      <div className="flex items-center gap-2.5 self-stretch py-2 px-0 bg-white Pro'] text-black font-['Readex text-lg leading-[normal]">
        Other
      </div>
      <div className="flex items-center gap-2.5 self-stretch py-2 px-0 bg-white Pro'] text-black font-['Readex text-lg leading-[normal]">
        United States of America
      </div>
    </div>
  </div>
  )
}

export default Option