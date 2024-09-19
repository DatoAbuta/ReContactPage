import Form from "./components/atoms/Form/Form";
import TextsDiv from "./components/atoms/TextsDiv/TextsDiv";
import Image from "next/image";
import Robot2 from "./img/robot2.png";

export default function Home() {
  return (
    <div className="container flex flex-col justify-center px-4 mx-auto h-full overflow-hidden transition-all duration-100">
      <div className="main flex justify-between items-start small:flex-col-reverse lg:flex-row small:mt-[34px] lg:mt-16">
        <TextsDiv />
        <div className="card flex flex-col w-[534px] p-10 justify-center items-center gap-[10px] flex-shrink-0 rounded-[20px] bg-white w-[454px] h-[730px] small:w-[361px] small:h-[540px] lg:w-[534px] lg:h-[730px]">
          <Form />
        </div>
        <Image className="flex self-end lg:hidden" src={Robot2} alt="robot2" />
      </div>
    </div>
  );
}
