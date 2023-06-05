import { FC } from "react";
import { WebLine } from "../components/WebLine";
import { useTranslation } from "react-i18next";

export const Generators: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className="flex flex-col h-1/2 justify-center"
      id="generators"
      data-section
    >
      <WebLine className="justify-center h-screen flex py-36">
        <div className="flex flex-row items-center ">
          <div className="flex flex-col gap-12 w-1/2">
            <h2 className="text-6xl">
              <strong>простой генератор цитат</strong>{" "}
            </h2>
            <span className="flex w-4/5">
              {" "}
              Этот проект можно создать разными способами. Но мне было интересно
              узнать, как это решить с применением объекта — структуры данных,
              которой незаслуженно нечасто пользуются. <br />
              <br /> Работая над этим проектом, я также изучил простой алгоритм,
              отвечающий за генерацию случайной цитаты при клике на кнопку.
            </span>
            <span className="text-red">
              - манипуляции с DOM, объекты, функции
            </span>
          </div>
          <div className="flex flex-col w-1/2 h-4/5 justify-center">
            <div className=" h-full w- py-6 pl-4 ml-32  flex rounded-tl-3xl bg-[#23213B]">
              <div className="h-full pb-5 pl-5 w-full  flex bg-[#353447]"></div>
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

export default Generators;
