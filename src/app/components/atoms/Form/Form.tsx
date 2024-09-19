import React from "react";

export default function Form() {
  return (
    <div className="flex flex-col gap-3">
      <div className="title flex justify-center items-center">
        <h2 className="text-black font-noto-sans-georgian text-2xl font-semibold uppercase">
          მოგვწერეთ
        </h2>
      </div>
      <div>
        <h4 className="text-black font-notoSansGeorgian text-[12px] font-normal leading-normal uppercase lg:text-[16px]">
          სახელი და გვარი
        </h4>
        <input
          type="text"
          className="w-[454px] h-[48px] self-stretch rounded-[10px] border-solid border-black border-[1px] outline-none small:w-[306px] small:h-[32px] lg:w-[454px] lg:h-[48px]"
        />
      </div>
      <div>
        <h4 className="text-black font-notoSansGeorgian text-[12px] font-normal leading-normal uppercase lg:text-[16px]">
          ელ.ფოსტა
        </h4>
        <input
          type="text"
          className="w-[454px] h-[48px] self-stretch rounded-[10px] border-solid border-black border-[1px] outline-none small:w-[306px] small:h-[32px] lg:w-[454px] lg:h-[48px]"
        />
      </div>
      <div>
        <h4 className="text-black font-notoSansGeorgian text-[12px] font-normal leading-normal uppercase lg:text-[16px]">
          ტელეფონის ნომერი
        </h4>
        <input
          type="text"
          className="w-[454px] h-[48px] self-stretch rounded-[10px] border-solid border-black border-[1px] outline-none small:w-[306px] small:h-[32px] lg:w-[454px] lg:h-[48px]"
        />
      </div>
      <div>
        <h4 className="text-black font-notoSansGeorgian text-[12px] font-normal leading-normal uppercase lg:text-[16px]">
          რა მიმართულებით ხართ დაინტერესებული
        </h4>
        <input
          type="text"
          className="w-[454px] h-[246px] self-stretch rounded-[10px] border-solid border-black border-[1px] outline-none small:w-[306px] small:h-[166px] lg:w-[454px] lg:h-[246px]"
        />
      </div>

      <button className="flex px-4 py-2 justify-center items-center gap-2.5 self-stretch rounded-lg bg-[#91C6EA] text-black text-[44px] font-normal leading-normal uppercase font-noto-georgian hover:text-[20px] hover:w-22 hover:bg-transparent transition-all duration-100 small:h-[32px] small:text-[16px] lg:h-[76px] lg:text-[44px]">
        გაგზავნა
      </button>
    </div>
  );
}
