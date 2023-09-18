import React from "react";

function Status({ num, white }) {
  return (
    <div className="flex-shrink-0 w-[1440px] h-6">
      <div className={`flex-shrink-0  h-6 bg-[#552700]`} />
      <div className="Pro'] text-white font-['Readex text-sm font-bold leading-[normal]">
        {num}
      </div>
    </div>
  );
}
export default Status;
