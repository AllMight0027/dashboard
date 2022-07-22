import React from "react";
import { rowFlex } from "../../styles";
import { addComma } from "../../utils/helpers";
import { unit, value } from "./styles";

type TProps = {
  value: number;
  showUnit?: boolean;
  showPlusMinus?: boolean;
  overrideCss?: React.CSSProperties;
};

const UnitValue: React.FC<TProps> = (props) => {
  return (
    <div className={rowFlex}>
      <div className={value} style={{ ...props.overrideCss }}>
        {props.showPlusMinus && <>{props.value < 0 ? "-" : "+"}</>}{" "}
        {addComma(Math.abs(props.value))}
      </div>
      {props.showUnit && <div className={unit}>USD</div>}
    </div>
  );
};

export default UnitValue;
