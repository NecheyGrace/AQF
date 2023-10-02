import React from "react";

function MenuClose() {
  return (
    <div className="">
      <div className="menu_closed flex justify-between items-center pr-[0.3125rem] px-3 w-[130px] h-[80px] rounded-tl-lg rounded-bl-lg bg-[#ffd380]">
        <div className="flex justify-center items-center flex-shrink-0 w-14 h-14 rounded-lg bg-[#ffc455]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM8 9C10.201 9 11 10.794 11 12H9C8.988 11.55 8.806 11 8 11C7.194 11 7.012 11.55 7 12.012L5 12C5 10.794 5.799 9 8 9ZM12 18C8 18 7 14 7 14H17C17 14 16 18 12 18ZM17 12C16.988 11.55 16.806 11 16 11C15.194 11 15.012 11.55 15 12.012L13 12C13 10.794 13.799 9 16 9C18.201 9 19 10.794 19 12H17Z"
              fill="#FF7D55"
            />
          </svg>
        </div>

        <svg
          width={45}
          height={45}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8H16V16H8V8ZM20 8H28V16H20V8ZM32 8H40V16H32V8ZM8 20H16V28H8V20ZM20 20H28V28H20V20ZM32 20H40V28H32V20ZM8 32H16V40H8V32ZM20 32H28V40H20V32ZM32 32H40V40H32V32Z"
            fill="#484848"
          />
        </svg>
      </div>
    </div>
  );
}

export default MenuClose;
