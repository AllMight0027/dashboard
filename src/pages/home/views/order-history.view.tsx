import React from "react";
import BalanceCard from "../components/balance_card";
import HistoryCard from "../components/histoy_card";
import OtherThingsCard from "../components/other_things_card";
import PaymentDetailsCard from "../components/payment_details_card";
import { grid } from "../styles/order-history.styles";
import { TTransaction } from "../types/transaction";

type TProps = {};

const OrderHistoryView: React.FC<TProps> = () => {
  return (
    <div className={grid}>
      <BalanceCard balance={5000} lastTransaction={-567.99} />
      <PaymentDetailsCard
        balance={5000}
        nextTransaction={67.9}
        paymentDate="August 9, 2022"
      />
      <HistoryCard transactions={transactions} />
      <OtherThingsCard totalTime="1h 27m" fromLastWeek={13} />
    </div>
  );
};

const transactions = [
  {
    title: "Balance top-up",
    amount: 5000,
    date: "12 July, 2022",
    icon: "https://img.icons8.com/small/96/000000/bank-card-back-side.png",
    id: Symbol(1),
  },
  {
    title: "Refund of order",
    amount: -5.42,
    date: "17 July, 2022",
    icon: "https://img.icons8.com/pastel-glyph/96/000000/exchange-money--v2.png",
    id: Symbol(2),
  },
  {
    title: "Office rent",
    amount: -159.99,
    date: "22 July, 2022",
    icon: "https://img.icons8.com/external-inkubators-detailed-outline-inkubators/96/000000/external-home-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png",
    id: Symbol(3),
  },
] as TTransaction[];

export default OrderHistoryView;
