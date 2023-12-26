import React from "react";
import BasicHeading from "./BasicHeading";
import LightHeading from "./LightHeading";
import BoldHeading from "./BoldHeading";
import ColoredHeading from "./ColoredHeading.jsx";
import DisplayHeading from "./DisplayHeading.jsx";
import GradientText from "./GradientText";
import Decoration from "./Decoration";
import TextDecurationColor from "./TextDecurationColor";

const Typography = () => {
  return <div >
    <div className=" grid grid-cols-2 gap-4 p-4 w-[900px] mx-auto">
    <BasicHeading />
    <LightHeading />
    <BoldHeading />
    <ColoredHeading />
    </div>
    <div className="grid grid-cols-1 gap-4 p-4 w-[900px] mx-auto">
      <DisplayHeading />
    </div>
    
    <div className="grid grid-cols-2 gap-4 p-4 w-[900px] mx-auto" >
      <GradientText />
      <Decoration />
    </div>
    <div  className="grid grid-cols-2 gap-4 p-4 w-[900px] mx-auto">
      <TextDecurationColor/>
    </div>
  </div>;
};

export default Typography;
