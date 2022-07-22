import React from "react";
import { width } from "../styles";

type TProps = {
  className?: string;
};

const OutlinkIcon: React.FC<TProps> = (props) => {
  return (
    <img
      src="https://img.icons8.com/small/96/b0b0b0/external-link-squared.png"
      alt="view"
      className={`${width(20)} ${props.className}`}
    />
  );
};

export default OutlinkIcon;
