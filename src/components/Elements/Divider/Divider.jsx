import React from "react";
import DividerVirtical from "./DividerVirtical";
import DividerWithoutText from "./DividerWithoutText";
import DividerHorizontal from "./DividerHorizontal";
import DividerWithoutHorizontal from "./DividerWithoutHorizontal";

const Divider = () => {
  return (
    <div className="  flex flex-col gap-4">
     <DividerVirtical />
     <DividerWithoutText />
     <DividerHorizontal />
     <DividerWithoutHorizontal />
    </div>
  );
};

export default Divider;
