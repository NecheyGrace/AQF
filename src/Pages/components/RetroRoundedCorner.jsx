import PropTypes from "prop-types";
import React from "react";
import "../../index.css";

//  const RetroRoundedCorner = ({ status, className }) => {
//   return (
//     <button className={`retro-rounded-corner ${status} ${className}`}>
//       <div className="text-wrapper">Button</div>
//     </button>
//   );
// };
const RetroRoundedCorner = ({ name }) => (
  <button
    className={` hover:bg-[#8BC965] hover:border-2 hover:border-[#6FAA4E] active:bg-[#8BC965]  active:shadow-custom bg-[#8BC965] status_default flex flex-col font-bold justify-center items-center px-4 w-44  py-3 rounded-[0.625rem] border-2 border-black text-black text-base leading-[normal]`}
  >
    {name}
  </button>
);

RetroRoundedCorner.propTypes = {
  status: PropTypes.oneOf(["disabled", "alt-selected", "alt", "default"]),
};
export default RetroRoundedCorner;
