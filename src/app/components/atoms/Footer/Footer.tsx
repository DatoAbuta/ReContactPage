import React from "react";
import Image from "next/image";
import Logo from "../../../img/logo2.png";
import Emails from "../../../img/emails.svg";
import Facebook from "../../../img/facebook.svg";
import Linkedin from "../../../img/linkedin.svg";
import Instagram from "../../../img/instagram.svg";
import Phone from "../../../img/phone.svg";
import TikTok from "../../../img/tiktok.svg";
import HomeImg from "../../../img/home.svg";
import ContactItem from "../Contacts/Contacts";
import CopyIMG from "../../../img/copy-alt.svg";
import c from "../../../img/c.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full py-[40px] border-t border-[rgba(255,255,255,0.40)] bg-black">
      <div className="flex justify-between items-start w-full max-w-screen-xl mx-auto px-4 gap-[50px] small:flex-col small:justify-center small:items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="flex items-start">
          <Image src={Logo} alt="Logo" width={122} />
        </div>

        <div className="flex flex-grow gap-[50px] flex-col lg:flex-row small:hidden lg:flex">
          <div className="info flex flex-col gap-4">
            <h1 className="text-white uppercase text-[22px] font-normal leading-normal">
              საკონტაქტო ინფორმაცია
            </h1>
            <ContactItem
              photo={Emails}
              title="ელ.ფოსტა"
              details={
                <h3 className="text-white text-[14px] font-normal">
                  contact@reeducate.space
                </h3>
              }
            />
            <ContactItem
              photo={Phone}
              title="ტელეფონი"
              details={
                <>
                  <h3 className="text-white text-[14px] font-normal">
                    +995 032 2 11 21 55
                  </h3>
                  <h3 className="text-white text-[14px] font-normal">
                    +995 598 773 288
                  </h3>
                </>
              }
            />
          </div>

          <div className="address flex flex-col gap-4">
            <h1 className="text-white uppercase text-[22px] font-normal leading-normal">
              მისამართი
            </h1>
            <ContactItem
              photo={HomeImg}
              title="თბილისი"
              details={
                <h3 className="text-white text-[14px] font-normal leading-normal flex flex-col">
                  თბილისი ცენტრალი, მეორე სართული,
                  <span>რე:ინვენთის ოფისი</span>
                </h3>
              }
            />
            <ContactItem
              photo={HomeImg}
              title="ქუთაისი"
              details={
                <h3 className="text-white text-[14px] font-normal leading-normal">
                  დავით აღმაშენებლის გამზირი N20
                </h3>
              }
            />
            <ContactItem
              photo={HomeImg}
              title="ბათუმი"
              details={
                <h3 className="text-white text-[14px] font-normal leading-normal">
                  ფარნავაზ მეფის ქუჩა N73
                </h3>
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="logos flex gap-4">
            <Image src={Facebook} alt="facebook" width={24} height={24} />
            <Image src={Linkedin} alt="linkedin" width={24} height={24} />
            <Image src={Instagram} alt="instagram" width={24} height={24} />
            <Image src={TikTok} alt="tiktok" width={24} height={24} />
          </div>
          <div className="rules flex gap-4 items-center">
            <Image src={CopyIMG} alt="copyimg" width={24} height={24} />
            <h5 className="text-white text-[18px] font-normal leading-normal">
              წესები და პირობები
            </h5>
          </div>
          <div className="end flex gap-4 items-center">
            <Image src={c} alt="copyimg" width={24} height={24} />
            <h5 className="text-white text-[18px] font-normal leading-normal">
              2023 - re:educate
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
