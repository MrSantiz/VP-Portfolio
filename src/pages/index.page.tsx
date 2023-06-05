import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";
import { Welcome } from "../features/Welcome";
import Header from "../features/Header";
import { AboutMe } from "../features/AboutMe";
import { Start } from "../features/Start";
import { Watch } from "../features/Watch";
import { Generators } from "../features/Generators";
import { Lists } from "../features/Lists";
import { ContactMe } from "../features/ContactMe";

const Homepage: FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Welcome />
      <AboutMe />
      <Start />
      <Watch />
      <Generators />
      <Lists />
      <ContactMe />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Homepage;
