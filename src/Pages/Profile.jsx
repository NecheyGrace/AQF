import React from "react";
import Icon from "./components/Icon";
import MenuClose from "./components/MenuClose";

function Profile() {
  return (
    <div className="bg-[#FFEDCC] w-[1440px] h-[952px]">
      <div className="pt-8">
        <Icon />
        <div className="flex justify-end ">
          <MenuClose />
        </div>
      </div>
      <div className="frame_141 flex flex-col items-start">
        <div className="flex justify-between items-center w-[600px]">
          <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
            Profile picture
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center w-40 h-40">
              <div className="lightgray -53.916px -57.126px / 148.75% 223.125% no-repeat] flex-shrink-0 w-40 h-40 rounded-lg bg-[url(<path-to-image>)," />
            </div>
            <div className="flex justify-center items-center gap-2">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.80467 13.1379L12 6.94254L9.05733 3.99987L2.862 10.1952C2.77667 10.2805 2.716 10.3879 2.68667 10.5045L2 13.9999L5.49467 13.3132C5.612 13.2839 5.71933 13.2232 5.80467 13.1379ZM14 4.94254C14.5207 4.42188 14.5207 3.57787 14 3.05721L12.9427 1.99987C12.422 1.47921 11.578 1.47921 11.0573 1.99987L10 3.05721L12.9427 5.99987L14 4.94254Z"
                  fill="#484848"
                />
              </svg>
              <div className="Pro'] text-black font-['Readex text-sm font-light leading-[normal]">
                Change photo
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-between items-center w-[600px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Name
            </div>
            <div className="flex justify-center items-center gap-2.5 Pro'] text-[#4d4d4d] font-['Readex text-lg font-light leading-[normal]">
              Jane Grul
            </div>
          </div>
          <div className="flex justify-between items-center w-[600px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Email
            </div>
            <div className="flex justify-center items-center gap-2.5 Pro'] text-[#4d4d4d] font-['Readex text-lg font-light leading-[normal]">
              testing@email.com
            </div>
          </div>
          <div className="flex justify-between items-center w-[600px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Birthdate
            </div>
            <div className="flex justify-center items-center gap-2.5 Pro'] text-[#4d4d4d] font-['Readex text-lg font-light leading-[normal]">
              12/12/1987
            </div>
          </div>
          <div className="flex justify-between items-center w-[600px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Pronouns
            </div>
            <div className="flex justify-center items-center gap-2.5 Pro'] text-[#4d4d4d] font-['Readex text-lg font-light leading-[normal]">
              she/her
            </div>
          </div>
          <div className="flex justify-between items-center w-[600px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Country
            </div>
            <div className="flex justify-center items-center gap-2.5 Pro'] text-[#4d4d4d] font-['Readex text-lg font-light leading-[normal]">
              Canada
            </div>
          </div>
          <div className="flex justify-between items-center w-[600px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Relationship status
            </div>
            <div className="flex justify-center items-center gap-2.5 Pro'] text-[#4d4d4d] font-['Readex text-lg font-light leading-[normal]">
              Single
            </div>
          </div>
        </div>
        <div className="w-[14.125rem] h-px bg-[#aa2800]" />
        <div className="flex justify-between items-center w-[600px]">
          <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
            Password
          </div>
          <div className="flex justify-center items-center gap-2.5 Pro'] text-[#4d4d4d] font-['Readex text-lg font-light leading-[normal]">
            ********
          </div>
        </div>
        <div className="w-[1100px] h-px bg-[#aa2800]" />
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4 w-[400px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Interests/topics
            </div>
            <div className="flex items-center gap-2">
              <div className="add_more_ Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Add more?
              </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                  fill="#FF3C00"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap items-center content-center gap-4 py-0 px-4 w-[1100px]">
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Personal growth
              </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3C3.896 3 3 3.896 3 5V19C3 20.104 3.896 21 5 21H19C20.104 21 21 20.104 21 19V5C21 3.896 20.104 3 19 3H5ZM17 13H7V11H17V13Z"
                  fill="#551400"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Career advancement
              </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3C3.896 3 3 3.896 3 5V19C3 20.104 3.896 21 5 21H19C20.104 21 21 20.104 21 19V5C21 3.896 20.104 3 19 3H5ZM17 13H7V11H17V13Z"
                  fill="#551400"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Travel adventures
              </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3C3.896 3 3 3.896 3 5V19C3 20.104 3.896 21 5 21H19C20.104 21 21 20.104 21 19V5C21 3.896 20.104 3 19 3H5ZM17 13H7V11H17V13Z"
                  fill="#551400"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Creative pursuits
              </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3C3.896 3 3 3.896 3 5V19C3 20.104 3.896 21 5 21H19C20.104 21 21 20.104 21 19V5C21 3.896 20.104 3 19 3H5ZM17 13H7V11H17V13Z"
                  fill="#551400"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4 w-[400px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Challenges overcome
            </div>
            <div className="flex items-center gap-2">
              <div className="add_more_-1 Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Add more?
              </div>
              <svg
                width={24}
                height={6}
                viewBox="0 0 24 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                  fill="#FF3C00"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap items-center content-center gap-4 py-0 px-4 w-[1100px]">
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Parenting challenges
              </div>
            </button>
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Tech challenges
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4 w-[400px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Current challenges
            </div>
            <div className="flex items-center gap-2">
              <div className="add_more_-2 Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Add more?
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center content-center gap-4 py-0 px-4 w-[1100px]">
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Cultural barriers
              </div>
            </button>
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Educational obstacles
              </div>
            </button>
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Discrimination/prejudice
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4 w-[400px]">
            <div className="Pro'] text-black font-['Readex text-[1.375rem] leading-[normal]">
              Do not show stories in the following areas
            </div>
            <div className="flex items-center gap-2">
              <div className="add_more_-3 Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Add more?
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 py-0 px-4 w-[1100px]">
            <button className="flex justify-center items-center gap-2.5 pt-[0.9375rem] pb-[0.9375rem] pl-[2.1875rem] pr-[2.1875rem] rounded-full border-2 border-[#551400] bg-white/0">
              <div className="Pro'] text-black text-center font-['Readex text-lg font-bold leading-[normal]">
                Addiction/recovery
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
