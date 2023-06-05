import { FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

type WebLineProps = {
  children: ReactNode;
  className?: string;
};

export const WebLine: FC<WebLineProps> = ({ children, className }) => {
  return (
    <div className={twJoin("px-56 mx-auto w-screen", className)}>{children}</div>
  );
};
