import React from 'react'
import ProgressContainer from './UI/ProgressContainer/ProgressContainer'

const ProgressSize = () => {
  return (
    
         <div className=" bg-[#FFFFFF] shadow-md w-[900px] mx-auto h-[250px] p-4 rounded-lg  ">
      <ProgressContainer
        title={"Basic Progress"}
        paragraph={
          "The Progress component displays a colored loading bar. Check out code for detail of usage"
        }
      >
      </ProgressContainer>
      <div className=' space-y-3'>
        {/* Primery */}
        <div className=" h-2 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-2 w-5/12 rounded-lg bg-primary"></div>
        </div>
        {/* bold */}
        <div className=" h-3 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-3 w-4/12 rounded-lg bg-primary"></div>
        </div>
        {/* Semi-bold */}
        <div className=" h-4 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-4 w-6/12 rounded-lg bg-primary"></div>
        </div>
        <div className=" h-5 md:w-[700px] w-[350px] rounded-lg bg-gray-300 ">
          <div className="h-5 w-8/12 rounded-lg bg-primary"></div>
        </div>
      </div>
      </div>
    
    
  )
}

export default ProgressSize