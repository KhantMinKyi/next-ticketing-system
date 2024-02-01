import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card_hover rounded-sm shadow-sm p-3 m-2 cursor-pointer">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className=" ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Card Title</h4>
      <hr className=" h-px border-0 bg-purple-950 my-2" />
      <p className=" whitespace-pre-wrap">
        This is a ticket Description . Please Notice this
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">01.01.2023 4:30PM</p>
          <ProgressDisplay />
        </div>
        <div className=" ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
