import React from "react";
import UnitValue from "../../../../common_components/unit_value";
import ChevronRightIcon from "../../../../icons/ChevronRightIcon";
import {
  margin,
  rowFlexAlignCenter,
  rowFlexCenterAll,
  rowFlexSpaceBetween,
  width,
} from "../../../../styles";
import { TTransaction } from "../../types/transaction";
import { date, heading, iconContainer, title, transactionRow } from "./styles";

type TProps = {
  transactions: TTransaction[];
};

const HistoryCard: React.FC<TProps> = (props) => {
  return (
    <div>
      <div className={`${margin("0 0 24px")} ${rowFlexSpaceBetween}`}>
        <div className={heading}> History</div>
        <ChevronRightIcon />
      </div>
      {props.transactions.map((transaction) => (
        <div
          key={transaction.id.toString()}
          className={`${transactionRow} ${rowFlexSpaceBetween}`}
        >
          <div className={rowFlexAlignCenter}>
            <div className={`${rowFlexCenterAll} ${iconContainer}`}>
              <img src={transaction.icon} alt="icon" className={width(20)} />
            </div>
            <div>
              <div className={title}>{transaction.title}</div>
              <div className={date}>{transaction.date}</div>
            </div>
          </div>
          <UnitValue
            showPlusMinus
            value={transaction.amount}
            showUnit
            overrideCss={{ fontSize: 22 }}
          />
        </div>
      ))}
    </div>
  );
};

export default HistoryCard;
