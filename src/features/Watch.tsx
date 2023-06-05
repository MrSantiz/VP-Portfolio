import { FC } from "react";
import { WebLine } from "../components/WebLine";
import { useTranslation } from "react-i18next";

export const Watch: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col h-1/2 justify-center" id="watch" data-section>
      <WebLine className="justify-center h-52 flex">
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="flex justify-center text-6xl">Электронные часы</div>
          <span className="text-red">
            манипуляции с DOM, структуры данных, функции, объекты
          </span>
        </div>
      </WebLine>
    </div>
  );
};

export default Watch;
