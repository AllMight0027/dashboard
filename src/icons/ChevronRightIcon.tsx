import React from "react";
import { width } from "../styles";

type TProps = {
  className?: string;
};

const ChevronRightIcon: React.FC<TProps> = (props) => {
  return (
    <img
      src="https://img.icons8.com/ios-glyphs/40/666666/chevron-right.png"
      alt="view"
      className={`${width(14)} ${props.className}`}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ChevronRightIcon;
