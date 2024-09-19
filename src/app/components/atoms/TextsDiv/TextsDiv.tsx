import React from "react";
import ContactItem from "../Contacts/Contacts";
import Image from "next/image";
import Emails from "../../../img/emails.svg";
import Facebook from "../../../img/facebook.svg";
import Linkedin from "../../../img/linkedin.svg";
import Instagram from "../../../img/instagram.svg";
import Phone from "../../../img/phone.svg";
import TikTok from "../../../img/tiktok.svg";
import HomeImg from "../../../img/home.svg";
import RobotIMG from "../../../img/robot.png";

export default function TextsDiv() {
  return (
    <div className="texts small:flex small:items-center small:justify-center small:flex-col lg:block">
      <h1
        className="text-[64px] font-normal leading-normal uppercase font-noto-georgian flex-col mb-10 small:hidden lg:flex"
        style={{
          fontFamily: "Noto Sans Georgian",
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#FFF",
        }}
      >
        #შენცშეგიძლია
      </h1>

      <h1 className="text-white font-semibold text-[26px] normal-case leading-normal uppercase mt-5 mb-[30px] lg:hidden">
        კონტაქტი
      </h1>

      <div className="contacts flex flex-col gap-6">
        <ContactItem
          photo={Emails}
          title="ელ.ფოსტა"
          details={
            <>
              <h3 className="text-white">contact@reeducate.space</h3>
            </>
          }
        />
        <ContactItem
          photo={Phone}
          title="ტელეფონი"
          details={
            <>
              <h3 className="text-white">+995 032 2 11 21 55</h3>
              <h3 className="text-white">+995 598 773 288</h3>
            </>
          }
        />
        <ContactItem
          photo={HomeImg}
          title="თბილისი"
          details={
            <>
              <h3 className="text-white flex flex-col">
                თბილისი ცენტრალი, მეორე სართული,
                <span>რე:ინვენთის ოფისი</span>
              </h3>
            </>
          }
        />
        <ContactItem
          photo={HomeImg}
          title="ქუთაისი"
          details={
            <h3 className="text-white">დავით აღმაშენებლის გამზირი N20</h3>
          }
        />
        <ContactItem
          photo={HomeImg}
          title="ბათუმი"
          details={<h3 className="text-white">ფარნავაზ მეფის ქუჩა N73</h3>}
        />
      </div>
      <div className="logos flex gap-6 mt-[22px] mb-[42px]">
        <Image src={Facebook} alt="facebook" />
        <Image src={Linkedin} alt="facebook" />
        <Image src={Instagram} alt="facebook" />
        <Image src={TikTok} alt="facebook" />
      </div>
      <Image className="small:hidden lg:block" src={RobotIMG} alt="Robot" />
    </div>
  );
}
