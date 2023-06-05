import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { WebLine } from "../components/WebLine";
import useGetDevice from "../hooks/useGetDevice";
import useScrollNavigation from "../hooks/useScrollNavigation";
import { scrollToSection } from "../utils/scrollToElement";
import Link from "next/link";
import { useRouter } from "next/router";

export const HEADER_HEIGHT = 88;

const Header: FC = () => {
  const { t } = useTranslation("common");
  const device = useGetDevice();
  const [navigationElement, setNavigationElement] =
    useState<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("");

  useScrollNavigation(
    typeof window !== "undefined"
      ? document.querySelectorAll("[data-section]")
      : null,
    navigationElement,
    "text-primary",
    HEADER_HEIGHT
  );

  return (
    <header
      className="sticky top-0 flex items-center bg-primary z-10"
      style={{ height: HEADER_HEIGHT }}
      ref={headerRef}
    >
      <WebLine className="flex items-center justify-between">
        <a href="#welcome" onClick={scrollToSection}>
          <div className="text-white text-4xl">VP</div>
        </a>
        <div className="flex gap-20 justify-between">
          <div className="flex text-white relative">
            <nav
              className="flex space-x-10"
              ref={(ref) => setNavigationElement(ref)}
            >
              <a
                className={`link ${activeItem === "welcome" ? "active" : ""}`}
                href="#welcome"
                onClick={scrollToSection}
              >
                {t("HOME")}
              </a>
              <a
                className={`link ${activeItem === "about-me" ? "active" : ""}`}
                href="#about-me"
                onClick={scrollToSection}
              >
                {t("ABOUT ME")}
              </a>
              <a
                className={`link ${activeItem === "start" ? "active" : ""}`}
                href="#start"
                onClick={scrollToSection}
              >
                {t("START")}
              </a>
              <a
                className={`link ${activeItem === "watch" ? "active" : ""}`}
                href="#watch"
                onClick={scrollToSection}
              >
                {t("WATCH")}
              </a>
              <a
                className={`link ${
                  activeItem === "generators" ? "active" : ""
                }`}
                href="#generators"
                onClick={scrollToSection}
              >
                {t("GENERATORS")}
              </a>
              <a
                className={`link ${activeItem === "lists" ? "active" : ""}`}
                href="#lists"
                onClick={scrollToSection}
              >
                {t("LISTS")}
              </a>
              <a
                className={`link ${
                  activeItem === "contact-me" ? "active" : ""
                }`}
                href="#contact-me"
                onClick={scrollToSection}
              >
                {t("CONTACT ME")}
              </a>
            </nav>
          </div>
          <div className="flex">
            <div className="flex gap-2 text-white items-center">
              <Link
                href="/"
                locale="cz"
                className={router.locale === "cz" ? "" : ""}
              >
                CZ
              </Link>
              <Link
                href="/"
                locale="en"
                className={router.locale === "en" ? "" : ""}
              >
                EN
              </Link>
              <Link
                href="/"
                locale="ru"
                className={router.locale === "ru" ? "" : ""}
              >
                RU
              </Link>
            </div>
          </div>
        </div>
      </WebLine>
    </header>
  );
};

export default Header;
