import React from "react";

function Rectangle({ text }) {
  return (
    <>
      <div className="flex items-center flex-shrink-0 w-[75%] h-32 rounded-tr-3xl rounded-br-3xl bg-[#ffa355] -mt-5 ">
        <div
          className=" w-[1249px] text-black 
     text-4xl font-bold leading-[normal] pl-[107px] "
        >
          {text}
        </div>
      </div>
    </>
  );
}

export default Rectangle;
