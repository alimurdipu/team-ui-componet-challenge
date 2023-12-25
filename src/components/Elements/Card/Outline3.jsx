import React from 'react'
import CardContainer from './UI/CardContainer/CardContainer'

const Outline3 = () => {
  return (
    <div className='w-[290px] h-[180px] rounded-lg bg-gradient-to-r from-amber-400 to-orange-600 p-1'>
        <div className=" p-3 bg-white rounded-md">
        <CardContainer title={" Rounded Card"}
         paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium adipisci iure doloribus accusamus animi quos."}>
        </CardContainer>
        </div>
    </div>
  )
}

export default Outline3