import React from 'react'
import ProgressContainer from './UI/ProgressContainer/ProgressContainer'

const SoftProgress = () => {
  return (
    <div className=" bg-[#FFFFFF] shadow-md w-[900px] mx-auto h-[250px] p-4 rounded-lg  ">
    <ProgressContainer
      title={"Soft progress Progress"}
      paragraph={
        "Progress can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage"
      }
    >
    </ProgressContainer>
    <div className=" space-y-3">
              
      {/* Primery */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-primary-soft ">
        <div className="h-2 w-5/12 rounded-lg bg-primary"></div>
      </div>
      {/* Secundery */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-secondary-soft ">
        <div className="h-2 w-6/12 rounded-lg bg-secondary"></div>
      </div>
      {/* info */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-info-soft ">
        <div className="h-2 w-7/12 rounded-lg bg-info"></div>
      </div>
      {/* sucess */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-success-soft ">
        <div className="h-2 w-4/12 rounded-lg bg-success"></div>
      </div>
      {/* Error */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-error-soft ">
        <div className="h-2 w-5/12 rounded-lg bg-error"></div>
      </div>
      {/* Warning */}
      <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-warning-soft ">
        <div className="h-2 w-6/12 rounded-lg bg-warning"></div>
      </div>
    </div>
  </div>
  )
}

export default SoftProgress