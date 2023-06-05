import { FC } from "react";
import { WebLine } from "../components/WebLine";
import { useTranslation } from "react-i18next";
import Typewriter from "../components/TypeWriter";
import TypingMachine from "../components/TypingMachine";

export const Welcome: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className="flex flex-col h-screen justify-center"
      id="welcome"
      data-section
    >
      <WebLine>
        <div className="flex flex-row h-screen  justify-between items-center">
          <div className="flex flex-col gap-12 justify-center">
            <div className="flex flex-col gap-4">
              <h3>Hi, my name is</h3>
              <h1 className="text-6xl">Vasyl Polianskyy</h1>
            </div>
            <h2>
              <Typewriter />
            </h2>
            <span className="flex w-1/2">
              Научиться создавать скрипт для эффекта пишущей машинки было круто.
              Я видел такой эффект в видеоиграх. Теперь я могу использовать его
              при создании собственных.
            </span>
            <span className="text-red">
              - манипуляции с DOM <br /> - слушатели событий <br /> -
              управляющие структуры <br /> - promises <br />- функции Fetch.
            </span>
          </div>
          <div className="flex flex-col h-1/2 ">
            <div className=" h-full py-6 pl-4 ml-32  flex rounded-tl-3xl bg-[#23213B]">
              <div className="h-full pb-5 pl-5 w-full flex bg-[#353447]">
                <TypingMachine />
                {/* <div className="flex bg-[#23213B] rounded-b-xl w-32 h-4"></div> */}
              </div>
            </div>
            <div className="flex bg-[#1C1B2D] rounded-bl-3xl w-full h-16 justify-center ">
              <div className="flex bg-[#353447] rounded-b-3xl w-64 h-5 ml-72"></div>
            </div>
            <div className="flex bg-[#23213B] rounded-b-3xl w-32 h-5 ml-20"></div>
          </div>
        </div>
      </WebLine>
    </div>
  );
};

export default Welcome;
