import React from 'react'
import ProgressContainer from './UI/ProgressContainer/ProgressContainer'

const ActiveProgress = () => {
  return (
    <div className=" bg-[#FFFFFF] shadow-md w-[900px] mx-auto h-[250px] p-4 rounded-lg  ">
    <ProgressContainer
      title={"Active progress Progress"}
      paragraph={
        "Progress can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage"
      }
    >
    </ProgressContainer>
    <div className=" space-y-3">
              
      {/* Primery */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-primary-soft ">
        <div className="h-2 w-2/12 rounded-lg bg-primary animate-pulse"></div>
      </div>
      {/* Secundery */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-secondary-soft ">
        <div className="h-2 w-6/12 rounded-lg bg-secondary animate-pulse"></div>
      </div>
      {/* info */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-info-soft ">
        <div className=" h-2 w-7/12 rounded-lg bg-info animate-pulse duration-700"></div>
      </div>
      {/* sucess */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-success-soft ">
        <div className="h-2 w-5/12 rounded-lg bg-success animate-pulse"></div>
      </div>
      {/* Error */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-error-soft ">
        <div className="h-2 w-4/12 rounded-lg bg-error animate-pulse delay-700"></div>
      </div>
      {/* Warning */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-warning-soft ">
        <div className="h-2 w-3/12 rounded-lg bg-warning animate-pulse delay-700"></div>
      </div>
    </div>
  </div>
  )
}

export default ActiveProgress