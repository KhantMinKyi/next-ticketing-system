import React from "react";

const ProgressDisplay = () => {
  return (
    <div className=" w-full bg-white rounded-full h-2.5">
      <div
        className=" bg-purple-900 h-2.5 rounded-full"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
