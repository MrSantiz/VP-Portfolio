import { HEADER_HEIGHT } from "../features/Header";

export const scrollToElement = (
  element: Element | undefined | null,
  offset = 0
) => {
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: "smooth",
    });
  }
};

export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  offset = 0
) => {
  e.preventDefault();
  const hash = e.currentTarget.href.slice(e.currentTarget.href.indexOf("#"));
  scrollToElement(document.querySelector(hash), HEADER_HEIGHT + offset);
};
