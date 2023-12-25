import React from "react";
import ProgressContainer from "./UI/ProgressContainer/ProgressContainer";

const BasicProgress = () => {
  return (
    <div className=" bg-[#FFFFFF] shadow-md w-[900px] mx-auto h-[250px] p-4 rounded-lg  ">
      <ProgressContainer
        title={"Basic Progress"}
        paragraph={
          "The Progress component displays a colored loading bar. Check out code for detail of usage"
        }
      >
      </ProgressContainer>
      <div className=" space-y-3">
                {/* Default */}
                <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-2 w-4/12 rounded-lg bg-gray-500"></div>
        </div>
        {/* Primery */}
        <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className=" h-2 w-5/12 rounded-lg bg-primary"></div>
        </div>
        {/* Secundery */}
        <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-2 w-6/12 rounded-lg bg-secondary"></div>
        </div>
        {/* info */}
        <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-2 w-7/12 rounded-lg bg-info"></div>
        </div>
        {/* sucess */}
        <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-2 w-4/12 rounded-lg bg-success"></div>
        </div>
        {/* Error */}
        <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-2 w-5/12 rounded-lg bg-error"></div>
        </div>
        {/* Warning */}
        <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-2 w-6/12 rounded-lg bg-warning"></div>
        </div>
      </div>
    </div>
  );
};

export default BasicProgress;
