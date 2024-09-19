import React from "react";
import Image from "next/image";
import Logo from "../../../img/reedulogo.svg";

export default function Header() {
  return (
    <div className="flex justify-end items-center w-full mt-5 px-4 small:justify-between lg:justify-end">
      <div className="flex items-center">
        <Image
          className="small:w-[60px] small:h-[60px] lg:w-[100px] lg:h-[100px]"
          src={Logo}
          alt="ReEduLogo"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white w-22 flex px-3.5 py-2 justify-center items-center gap-[10px] bg-orange-500 border-orange-500 border-solid border-[1px] rounded-[12px] hover:bg-transparent small:hidden lg:flex">
          კურსები
        </button>
        <button className="text-white w-22 flex px-3.5 py-2 justify-center items-center gap-[10px] bg-darkBrown border-l-orange-500 border-solid border-[1px] rounded-[12px] hover:bg-transparent">
          რეგისტრაცია
        </button>
        <div
          id="burger-icon"
          className="w-12 h-12 bg-white rounded-full shadow-lg flex justify-center items-center cursor-pointer"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-black transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-black transition-all duration-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
