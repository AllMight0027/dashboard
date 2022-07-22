import React from "react";
import UnitValue from "../../../../common_components/unit_value";
import { rowFlexCenterAll, width } from "../../../../styles";
import { addComma } from "../../../../utils/helpers";
import { TStoreRecord } from "../../types/store-records";
import { card, gainLoss, label, logoContainer } from "./styles";

type TProps = {
  record: TStoreRecord;
};

const RecordCard: React.FC<TProps> = ({ record }) => {
  return (
    <div className={card}>
      <div className={`${logoContainer} ${rowFlexCenterAll} `}>
        <img src={record.iconUrl} alt={record.label} className={width(18)} />
      </div>
      <div>
        <div className={label}>{record.label}</div>
        <UnitValue value={record.value} showUnit={record.showUnit} />
      </div>
      {!!record.gainLoss && (
        <div className={gainLoss(record.gainLoss < 0)}>
          {record.gainLoss < 0 ? "-" : "+"}{" "}
          {addComma(Math.abs(record.gainLoss))}
        </div>
      )}
    </div>
  );
};

export default RecordCard;
