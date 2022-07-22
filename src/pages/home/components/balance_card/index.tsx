import React from "react";
import UnitValue from "../../../../common_components/unit_value";
import MoreHorizIcon from "../../../../icons/MoreHorizIcon";
import {
  addBtn,
  card,
  graphImg,
  heading,
  lastTransaction,
  moreIcon,
} from "./styles";

type TProps = {
  balance: number;
  lastTransaction: number;
};

const BalanceCard: React.FC<TProps> = (props) => {
  return (
    <div className={card}>
      <div className={heading}>Current Balance</div>
      <div className={lastTransaction}>{props.lastTransaction} USD</div>
      <div className={moreIcon}>
        <MoreHorizIcon />
      </div>
      <UnitValue value={props.balance} showUnit />
      <img
        src="https://www.pngall.com/wp-content/uploads/10/Line-Chart-Vector-PNG-Cutout.png"
        alt="graph"
        className={graphImg}
      />
      <button className={addBtn}>Add Credit</button>
    </div>
  );
};

export default BalanceCard;
