function MenuOpen() {
  return (
    <div className="inline-flex flex-col items-end sticky top-0 ">
      <div className="w-[18.75rem] flex justify-between items-center h-[6.5rem] rounded-tl-lg rounded-bl-lg bg-[#ffd380] pr-[12px] pl-[16px]">
        <div className="flex-shrink-0 w-20 h-20">
          <div className="flex justify-center items-center flex-shrink-0 w-20 h-20 rounded-lg bg-[#ffc455]">
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
        </div>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-20 w-12 h-12"
        >
          <path
            d="M8 8H16V16H8V8ZM20 8H28V16H20V8ZM32 8H40V16H32V8ZM8 20H16V28H8V20ZM20 20H28V28H20V20ZM32 20H40V28H32V20ZM8 32H16V40H8V32ZM20 32H28V40H20V32ZM32 32H40V40H32V32Z"
            fill="#484848"
          />
        </svg>
        <div className="Pro'] text-black font-['Readex text-[1.375rem] font-bold leading-[normal]">
          Menu
        </div>
      </div>
      <div className="flex flex-col items-start w-[17.25rem]">
        <div className="flex justify-end items-center gap-2.5 self-stretch py-2 px-4 border-b border-b-[#333] bg-[#ffe1aa]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.486 2 2 5.589 2 10C2 12.907 3.897 15.515 7 16.934V22L12.34 17.995C17.697 17.853 22 14.32 22 10C22 5.589 17.514 2 12 2ZM16 11H13V14H11V11H8V9H11V6H13V9H16V11Z"
              fill="#1A1A1A"
            />
          </svg>
          <div className="Pro'] text-black font-['Readex font-semibold text-lg leading-[normal]">
            Record a story
          </div>
        </div>
        <div className="flex justify-end items-center gap-2.5 self-stretch py-2 px-4 border-b border-b-[#333] bg-[#ffe1aa]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8V19.529C2 19.529 6.621 19.357 12 22C17.379 19.357 22 19.529 22 19.529V8C22 8 16.546 8 12 10.471C7.454 8 2 8 2 8Z"
              fill="#1A1A1A"
            />
            <path
              d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
              fill="#484848"
            />
          </svg>
          <div className="Pro'] text-black font-['Readex text-lg font-semibold leading-[normal]">
            Story library
          </div>
        </div>
        <div className="flex justify-end items-center gap-2.5 self-stretch py-2 px-4 border-b border-b-[#333] bg-[#ffe1aa]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 22H18H19C20.104 22 21 21.104 21 20V4C21 2.896 20.104 2 19 2H18H6H5C3.896 2 3 2.896 3 4V20C3 21.104 3.896 22 5 22H6ZM12 4.999C13.647 4.999 15 6.35 15 7.999C15 9.647 13.647 11 12 11C10.353 11 9 9.647 9 7.999C9 6.35 10.353 4.999 12 4.999ZM6 17.25C6 15.031 8.705 12.75 12 12.75C15.295 12.75 18 15.031 18 17.25V18H6V17.25Z"
              fill="#1A1A1A"
            />
          </svg>
          <div className="Pro'] text-black font-['Readex text-lg font-semibold leading-[normal]">
            View profile
          </div>
        </div>
        <div className="flex justify-end items-center gap-2.5 self-stretch py-2 px-4 rounded-bl-lg bg-[#ffe1aa]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.99968 14.0001H4.99968V21.0001C4.99968 21.5531 5.44768 22.0001 5.99968 22.0001H17.9997C18.5527 22.0001 18.9997 21.5531 18.9997 21.0001V14.0001H20.9997C21.3947 14.0001 21.7527 13.7681 21.9127 13.4071C22.0737 13.0461 22.0077 12.6241 21.7427 12.3311L12.7427 2.33115C12.3637 1.90915 11.6357 1.90915 11.2567 2.33115L2.25668 12.3311C1.99268 12.6241 1.92568 13.0461 2.08668 13.4071C2.24668 13.7681 2.60468 14.0001 2.99968 14.0001ZM8.65268 11.6411C9.52768 10.7861 10.9077 10.7861 11.7777 11.6411L12.0017 11.8611L12.2247 11.6411C13.0957 10.7861 14.4757 10.7861 15.3507 11.6411C16.2217 12.5011 16.2217 13.8561 15.3507 14.7111L12.0017 18.0001L8.65268 14.7111C7.78168 13.8561 7.78168 12.5011 8.65268 11.6411Z"
              fill="#999999"
            />
          </svg>
          <div className="Pro'] text-[#999] font-['Readex font-semibold text-lg leading-[normal]">
            Community stories
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOpen;
