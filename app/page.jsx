import React from "react";
import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-4 mt-2">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
