import React from "react";
import ham from "../../assets/ham.png";

function MenuClose() {
  return (
    <div className="flex flex-col items-end">
      <div className=" bg-[#FFD380] rounded-l-md w-[65px] h-[90px] flex flex-col justify-center items-center">
        <img src={ham} alt="" />
        <p className="text-sm pt-2">Menu</p>
      </div>
    </div>
  );
}

export default MenuClose;
