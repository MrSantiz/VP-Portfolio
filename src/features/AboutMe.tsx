import { FC } from "react";
import { WebLine } from "../components/WebLine";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export const AboutMe: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className="flex flex-col h-1/2 justify-center"
      id="about-me"
      data-section
    >
      <WebLine>
        <div className="flex flex-col h-screen gap-16 justify-center ">
          <h2 className="text-5xl flex justify-center">
            {" "}
            <strong>About Me</strong>{" "}
          </h2>
          <div className="flex flex-row gap-7 justify-center ">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col bg-secondary w-[325px] p-7 gap-3 rounded-3xl h-[295px]">
                <h3 className="text-red">languages</h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </span>
              </div>
              <div className="flex bg-secondary flex-col rounded-3xl p-7 gap-3 w-[325px] h-[295px]">
                <h3 className="text-red">100% Secure Wallet</h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </span>
              </div>
            </div>
            <div className="flex bg-blue rounded-3xl flex-col pt-12 px-7 gap-12 w-[427px] h-[622px]">
              <span className="text-xl">
                Hi, my name is Fatma Sümer and I am novice front-end developer
                who is building a new career from the thing I really enjoy.{" "}
              </span>
              <div className="bg-[#1C1B2D] h-full px-1 pt-1 rounded-t-[55px]">
                <div className="bg-[#23213B] h-full px-3 pt-3 rounded-t-[50px]">
                  <div className="bg-[#353447] h-full rounded-t-[41px]">
                    <Image
                      src="/img/im.png"
                      alt="My Photo"
                      width="345"
                      height="390"
                      className="rounded-t-[41px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-secondary rounded-3xl flex-col p-7 gap-3 w-[325px] h-[622px]">
              <h3 className="text-red">SKILLS</h3>
            </div>
          </div>
        </div>
      </WebLine>
    </div>
  );
};

export default AboutMe;
