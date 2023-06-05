import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { twJoin } from "tailwind-merge";
import { scrollToSection } from "../utils/scrollToElement";

const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation("common");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSectionExtended = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e, 200);
  };

  return (
    <>
      <button
        aria-label="burger menu button"
        className="flex flex-col gap-2 w-14 p-2 before:content-[''] before:w-full before:h-[2px] before:bg-white before:rounded-lg after:content-[''] after:w-full after:h-[2px] after:bg-white after:rounded-lg relative"
        onClick={handleClick}
      >
        <div className="w-full h-[2px] bg-white rounded-lg" />
      </button>
      <div
        className={twJoin(
          "flex-wrap gap-6 left-0 p-3 right-0 h-0 hidden absolute top-20 bg-secondary shadow-sm transition justify-between",
          isOpen && "!h-[50px] !flex"
        )}
      >
        <a href="#welcome" onClick={scrollToSectionExtended}>
          {t("Home")}
        </a>
        <a href="#prices" onClick={scrollToSectionExtended}>
          {t("Prices")}
        </a>
        <a href="#contacts" onClick={scrollToSectionExtended}>
          {t("Contacts")}
        </a>
        <a href="#gallery" onClick={scrollToSectionExtended}>
          {t("Gallery")}
        </a>
      </div>
    </>
  );
};

export default BurgerMenu;
