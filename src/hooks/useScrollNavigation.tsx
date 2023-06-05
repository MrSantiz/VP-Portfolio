import { useEffect } from "react";
import { debounce } from "throttle-debounce";

const useScrollNavigation = (
  sections: Array<HTMLElement> | NodeListOf<Element> | null,
  navigationWrapper: HTMLElement | null,
  className: string,
  offset = 0
) => {
  const setActive = debounce(20, () => {
    if (!navigationWrapper || !sections) return;
    const navigationItem = navigationWrapper.children;
    let activeSection: Element | undefined;
    const scrollYPosition = scrollY;

    sections.forEach((section, index) => {
      const sectionTopPosition = (section as HTMLElement).offsetTop;
      const sectionHeight = section.clientHeight;
      navigationItem[index].classList.remove(className);

      if (scrollYPosition >= sectionTopPosition - sectionHeight / 3 - offset) {
        activeSection = navigationItem[index];
      }
    });
    activeSection?.classList.add(className);
  });

  useEffect(() => {
    setActive();

    window.addEventListener("scroll", setActive, { passive: true });

    return () => {
      window.removeEventListener("scroll", setActive);
    };
  }, [navigationWrapper, sections?.length]);
};

export default useScrollNavigation;
