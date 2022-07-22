import React from "react";
import {
  margin,
  rowFlexCenterAll,
  rowFlexSpaceBetween,
} from "../../../../styles";
import { TStoreRecord } from "../../types/store-records";
import RecordCard from "../record_card";
import {
  cardWidth,
  header,
  heading,
  id,
  notificationBell,
  requests,
  subscriptionBtn,
} from "./styles";

type TProps = {
  noOfRequests: number;
  name: string;
  id: string;
  records: TStoreRecord[];
};

const Dashboard: React.FC<TProps> = (props) => {
  return (
    <div>
      <div className={header}>
        <div className={rowFlexCenterAll}>
          <button className={subscriptionBtn}>Subscription</button>
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/b0b0b0/appointment-reminders--v1.png"
            alt="notification"
            className={notificationBell}
          />
        </div>
        {props.noOfRequests > 0 && (
          <div className={requests}>
            Hi! <span>You have {props.noOfRequests} requests.</span>{" "}
            <a href="/visitors">Check</a>
          </div>
        )}
      </div>
      <div className={heading}>{props.name}'s Dashboard</div>
      <div className={id}>ID {props.id}</div>
      <div className={`${rowFlexSpaceBetween} ${margin("40px 0 0")}`}>
        {props.records.map((record, i) => (
          <div key={i} className={cardWidth(props.records.length)}>
            <RecordCard record={record} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
