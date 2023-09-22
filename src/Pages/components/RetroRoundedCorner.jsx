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
    className={` bg-[#ff3c00] status_default inline-flex font-bold justify-center items-center  h-12 w-36 rounded-[0.625rem] border-2 border-black text-black text-base leading-[normal]`}
  >
    {name}
  </button>
);

RetroRoundedCorner.propTypes = {
  status: PropTypes.oneOf(["disabled", "alt-selected", "alt", "default"]),
};
export default RetroRoundedCorner;
