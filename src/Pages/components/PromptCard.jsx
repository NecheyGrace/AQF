import PropTypes from "prop-types";
import React, { useState } from "react";
// import { Bookmark } from "./Bookmark";
// import { BxsRightArrowCircle } from "../../assets/BxsRightArrowCircle.png";

// export const PromptCard = ({ initialStatus, initialDestination }) => {
//   const [status, setStatus] = useState(initialStatus || "default");
//   const [destination, setDestination] = useState(
//     initialDestination || "current"
//   );
const PromptCard = () => {
  return (
    // <div
    //   className={`border-4 border-solid border-black w-[373px] h-[456px] overflow-hidden rounded-[8px] relative ${
    //     status === "selected" ? "shadow-shadow-20" : "shadow-shadow-80"
    //   } ${
    //     status === "selected" ? "bg-variable-collection-brand-200" : "bg-white"
    //   }`}
    //   onClick={() => {
    //     // Toggle the status when the card is clicked
    //     setStatus(status === "default" ? "selected" : "default");
    //   }}
    // >
    //   <p className="font-body-llight w-[242px] left-[59px] tracking-[var(--body-llight-letter-spacing)] [font-style:var(--body-llight-font-style)] text-[length:var(--body-llight-font-size)] top-[118px] text-black absolute h-[230px] font-[number:var(--body-llight-font-weight)] leading-[var(--body-llight-line-height)]">
    //     Imagine you&#39;re talking to someone who knows nothing about the issue
    //     you’re facing. <br />
    //     <br />
    //     How would you begin that conversation, and what details would you
    //     emphasize to make them understand the situation?
    //   </p>
    //   <Bookmark
    //     className={
    //       status === "default" && destination === "past"
    //         ? "!absolute bg-[url(image.png)] !left-[18px] !top-[26px]"
    //         : destination === "current" && status === "selected"
    //         ? "!absolute bg-[url(image-10-2.png)] !left-[18px] !top-[26px]"
    //         : status === "selected" && destination === "past"
    //         ? "!absolute bg-[url(image-10-3.png)] !left-[18px] !top-[26px]"
    //         : "!absolute !left-[18px] !top-[26px]"
    //     }
    //     status="default"
    //   />
    //   {status === "selected" && (
    //     <BxsRightArrowCircle className="!absolute !w-[48px] !h-[48px] !top-[374px] !left-[291px]" />
    //   )}
    // </div>
    <div className="w-[373px] h-[456px]">
      <div className="fixed w-[373px] h-[456px] top-0 left-0 bg-white rounded-[8px] border-4 border-solid border-black" />
    </div>
  );
};
export default PromptCard;

{
  /* PromptCard.propTypes = {
  initialStatus: PropTypes.oneOf(["selected", "default"]),
  initialDestination: PropTypes.oneOf(["current", "past"]),
}; */
}
