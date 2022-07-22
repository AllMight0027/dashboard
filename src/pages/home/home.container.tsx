import React from "react";
import NavTabs from "../../common_components/nav_tabs";
import Dashboard from "./components/dashboard";
import {
  container,
  detailsContainer,
  summaryContainer,
  tabsContainer,
} from "./styles/home.styles";
import { TStoreRecord } from "./types/store-records";
import OrderHistoryView from "./views/order-history.view";

const Home = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <div className={container}>
      <div className={summaryContainer}>
        <Dashboard
          records={records}
          name="John"
          id="48993820"
          noOfRequests={3}
        />
      </div>
      <div className={tabsContainer}>
        <NavTabs
          index={index}
          setIndex={setIndex}
          list={tabs}
          customWidthList={tabsWidthList}
        />
      </div>
      <div className={detailsContainer}>
        {index === 0 && <OrderHistoryView />}
      </div>
    </div>
  );
};

export default Home;

const tabs = [
  "Orders history",
  "Personal information",
  "Passwords",
  "Payment details",
];

const tabsWidthList = ["24%", "30%", "22%", "24%"];

const records = [
  {
    label: "Unique users",
    value: 362,
    gainLoss: 112,
    iconUrl:
      "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/40/b0b0b0/external-user-user-tanah-basah-basic-outline-tanah-basah-6.png",
  },
  {
    label: "Registered members",
    value: 1056,
    gainLoss: 65,
    iconUrl:
      "https://img.icons8.com/external-becris-lineal-becris/40/b0b0b0/external-users-mintab-for-ios-becris-lineal-becris.png",
  },
  {
    label: "Resolved issues",
    value: 89,
    gainLoss: -3,
    iconUrl:
      "https://img.icons8.com/windows/40/b0b0b0/upload-link-document.png",
  },
  {
    label: "Expenses this week",
    value: 9496,
    iconUrl: "https://img.icons8.com/pastel-glyph/40/b0b0b0/briefcase--v2.png",
    showUnit: true,
  },
] as TStoreRecord[];
