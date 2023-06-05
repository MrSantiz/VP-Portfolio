import { FC } from "react";
import { WebLine } from "../components/WebLine";
import { useTranslation } from "react-i18next";

export const Lists: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col h-1/2 justify-center" id="lists" data-section>
      <WebLine className="justify-center h-screen py-32 flex">
        <div className="flex flex-col gap-16 items-center">
          <div className="flex flex-row items-center bg-secondary justify-center h-1/2 w-screen py-12 px-56 gap-16">
            <div className="bg-[#1C1B2D] h-full w-1/2 p-1 rounded-[55px]">
              <div className="bg-[#23213B] h-full p-3 rounded-[50px]">
                <div className="bg-[#353447] h-full rounded-[41px]"></div>
              </div>
            </div>
            <div className="flex w-1/2 flex-col gap-16">
              <span>
                Мы используем слушатель для добавления нового пункта в список
                покупок, когда пользователь нажимает на кнопку «Добавить», а
                также для вычеркивания элемента из списка при нажатии на него.{" "}
                <br /> <br />
                Мне было интересно узнать, как пишется функция, отвечающая за
                удаление всех элементов внутри div. В данном случае она удаляет
                все элементы из списка покупок.
              </span>
              <span className="text-red">
                - манипуляции с DOM <br /> - функции <br /> - управляющие
                структуры <br /> - слушатели событий.
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center bg-secondary justify-center h-1/2 w-screen py-12 px-56 gap-16">
            <div className="flex w-1/2 flex-col gap-16">
              <span>
                Решение для этого приложения было очень похожим на решение для
                списка покупок. Я постоянно заглядывал в тот код, когда писал
                этот. Но кое-что и отличалось: функция для смены цвета фона для
                каждого элемента в списке. Я подумал, что это будет отличным
                дополнением к проекту, поскольку делает его гораздо симпатичнее.{" "}
                <br /> <br />В целом, можно сказать, что это был проект-ревью,
                но все равно хорошая практика.
              </span>
              <span className="text-red">
                - манипуляции с DOM <br /> - функции <br /> - управляющие
                структуры <br /> - слушатели событий.
              </span>
            </div>
            <div className="bg-[#1C1B2D] h-full w-1/2 p-1 rounded-[55px]">
              <div className="bg-[#23213B] h-full p-3 rounded-[50px]">
                <div className="bg-[#353447] h-full rounded-[41px]"></div>
              </div>
            </div>
          </div>
        </div>
      </WebLine>
    </div>
  );
};

export default Lists;
