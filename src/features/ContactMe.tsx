import { FC } from "react";
import { WebLine } from "../components/WebLine";
import { useTranslation } from "react-i18next";

export const ContactMe: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className="flex flex-col h-1/2 justify-center"
      id="contact-me"
      data-section
    >
      <WebLine className="justify-center h-52 flex">
        
        
      </WebLine>
    </div>
  );
};

export default ContactMe;
