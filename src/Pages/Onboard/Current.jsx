import React, { useState } from "react";
import Icon from ".././components/Icon";
import MenuClose from ".././components/MenuClose";
import MenuOpen from ".././components/MenuOpen";
import Card from ".././components/Card";
import Rectangle from ".././components/Rectangle";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Current() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleNextPageClick = () => {
    if (selectedCard) {
      // Perform navigation to the next page here
      // You can use React Router, window.location.href, or any other navigation method
    } else {
      alert("Please select a card before proceeding.");
    }
  };
  return (
    <div className="bg-[#FFEDCC] w-full ">
      <div className="pt-6" onClick={goBack}>
        <Icon />
        <div className="flex justify-end">
          <MenuClose />
        </div>
      </div>
      <Rectangle text={"Where are you right now?"} />
      <div className="flex ">
        <Card />
      </div>
    </div>
  );
}

export default Current;
