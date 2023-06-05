import { FC } from "react";
import { WebLine } from "../components/WebLine";
import { useTranslation } from "react-i18next";
import Calculator from "../components/Сalculator";

export const Start: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col h-1/2 justify-center" id="start" data-section>
      <WebLine>
        <div className="flex flex-row h-screen gap-16 justify-center">
          <div className="flex flex-col justify-center w-1/4 gap-10 ">
            <span className="text-white ">
              узнал об извлечении данных из API, отправке данных в API,
              отображении данных и создании динамических страниц.
            </span>
            <span className="text-red">
              - React.js <br /> -Tailwind CSS <br /> -Axios
            </span>
          </div>
          <div className="flex w-4/5 justify-center pt-40 gap-12">
            <div className="bg-[#1C1B2D] h-4/5 w-1/2 p-1 rounded-[55px]">
              <div className="bg-[#23213B] h-full p-3 rounded-[50px]">
                <div className="bg-[#353447] h-full rounded-[41px]"></div>
              </div>
            </div>
            <div className="bg-[#1C1B2D] h-4/5 w-1/2 p-1 rounded-[55px]">
              <div className="bg-[#23213B] h-full p-3 rounded-[50px]">
                <div className="bg-[#353447] h-full rounded-[41px]">
                  <Calculator />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-1/4 gap-10">
            <span className="text-white ">
              Я просто поверить не мог, насколько просто было создать такое
              приложение. Я-то думал, что придется каждое выражение прописывать
              вручную, создавая сложные функции. Но оказалось, что в JavaScript
              есть функция eval. которая все это делает за нас.
            </span>
            <span className="text-red">
              - функции. <br /> - манипуляции с DOM
            </span>
          </div>
        </div>
      </WebLine>
    </div>
  );
};

export default Start;
