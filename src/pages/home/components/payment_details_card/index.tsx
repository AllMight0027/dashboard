import React from "react";
import UnitValue from "../../../../common_components/unit_value";
import MoreHorizIcon from "../../../../icons/MoreHorizIcon";
import { card, date, graphImg, heading, infoHeading, moreIcon } from "./styles";

type TProps = {
  balance: number;
  nextTransaction: number;
  paymentDate: string;
};

const PaymentDetailsCard: React.FC<TProps> = (props) => {
  return (
    <div className={card}>
      <div className={heading}>Payment Details</div>
      <div className={moreIcon}>
        <MoreHorizIcon />
      </div>
      <div>
        <div className={infoHeading}>
          Next payment {props.nextTransaction} USD
        </div>
        <div className={date}>{props.paymentDate}</div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Kbdtm0l0dCMR19zgUwIuwihkugSjs9ejLQ&usqp=CAU"
        alt="graph"
        className={graphImg}
      />
      <div>
        <div className={infoHeading} style={{ textAlign: "right" }}>
          Total to pay
        </div>
        <UnitValue value={props.balance} />
      </div>
    </div>
  );
};

export default PaymentDetailsCard;
