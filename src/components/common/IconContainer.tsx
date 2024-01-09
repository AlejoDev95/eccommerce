import React, { FC } from "react";
import { IconContext } from "react-icons";

type IconProps = {
  children: React.ReactNode;
  value: IconContext;
};

export const IconContainer: FC<IconProps> = ({ children, value }) => {
  return (
    <IconContext.Provider value={{ ...value }}>{children}</IconContext.Provider>
  );
};
