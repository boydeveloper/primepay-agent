import React from "react";
import OverviewCard from "./components/overviewCard";
import WelcomeBanner from "./components/welcomeBanner";

function Overview() {
  const overviewdata = [
    {
      id: 1,
      title: "Sales Count",
      amount: "344",
      icon: "/assets/svgs/trending-up.svg",
    },
    {
      id: 2,
      title: "Transaction Value",
      amount: "95959",
      icon: "/assets/svgs/people.svg",
    },
    {
      id: 3,
      title: "Payout Balance",
      amount: 100.5,
      icon: "/assets/svgs/cardFill.svg",
    },
    {
      id: 4,
      title: "Customers",
      amount: 2,
      icon: "/assets/svgs/naira.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-[30px]">
      <WelcomeBanner />
      <div className="grid grid-cols-12 gap-6 relative">
        {overviewdata.map((data) => (
          <OverviewCard item={data} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
