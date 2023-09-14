import PropTypes from "prop-types";
import React from "react";
import '../../index.css'

//  const RetroRoundedCorner = ({ status, className }) => {
//   return (
//     <button className={`retro-rounded-corner ${status} ${className}`}>
//       <div className="text-wrapper">Button</div>
//     </button>
//   );
// };
 const RetroRoundedCorner = ({ name, weight, text }) => (
  <button className={`${weight} ${text} status_default inline-flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] min-w-[12.5rem] rounded-[0.625rem] border-2 border-black bg-[#ff3c00] button text-black text-center font-['Inter'] text-[1.5625rem] leading-[normal]`}>
    {name}
  </button>
  )

RetroRoundedCorner.propTypes = {
  status: PropTypes.oneOf(["disabled", "alt-selected", "alt", "default"]),
};
export default RetroRoundedCorner