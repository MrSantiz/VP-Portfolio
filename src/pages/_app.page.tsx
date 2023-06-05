import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin-ext", "cyrillic"],
  weight: ["400", "500", "500", "700"],
  variable: "--font-open-sans",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
