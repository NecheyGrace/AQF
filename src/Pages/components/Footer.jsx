function Footer() {
  return (
    <div className="w-[1440px] h-[8.625rem] bg-[#ffc455]">
      <div className="flex flex-col flex-shrink-0 justify-center items-center gap-4 w-[1440px] h-[8.625rem]">
        <div className="Pro'] text-black font-['Readex text-lg font-bold leading-[normal]">
          AQF
        </div>
        <div className="flex flex-wrap justify-center items-center content-center gap-4 w-[477px]">
          <div className="Pro'] text-black font-['Readex text-lg leading-[normal]">
            Storyteller profile
          </div>
          <div className="Pro'] text-black font-['Readex text-lg leading-[normal]">
            Story library
          </div>
          <div className="Pro'] text-black font-['Readex text-lg leading-[normal]">
            Tell a story
          </div>
          <div className="Pro'] text-black font-['Readex text-lg leading-[normal]">
            Privacy Policy
          </div>
          <div className="Pro'] text-black font-['Readex text-lg font-light leading-[normal]">
            Acknowledgements
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col flex-shrink-0 items-start gap-2 w-[8.3125rem] h-11"></div>

      <footer className="absolute w-[1440px] h-[138px] top-[886px] left-0 bg-variable-collection-primary-400">
        <div className="flex flex-col w-[1440px] h-[138px] items-center justify-center gap-[16px] relative">
          <div className="relative w-fit [font-family:'Readex_Pro-Bold',Helvetica] font-bold text-black text-[18px] tracking-[0] leading-[normal]">
            AQF
          </div>
          <div className="flex flex-wrap w-[477px] items-center justify-center gap-[16px_16px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-black text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              Storyteller profile
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-black text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              Story library
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-black text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              Tell a story
            </div>
            <div className="relative w-fit font-body-regular font-[number:var(--body-regular-font-weight)] text-black text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              Privacy Policy
            </div>
            <div className="relative w-fit font-body-llight font-[number:var(--body-llight-font-weight)] text-black text-[length:var(--body-llight-font-size)] tracking-[var(--body-llight-letter-spacing)] leading-[var(--body-llight-line-height)] [font-style:var(--body-llight-font-style)]">
              Acknowledgements
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
