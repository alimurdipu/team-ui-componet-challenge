import React from 'react'
import CardContainer from './UI/CardContainer/CardContainer'

const Outline2 = () => {
  return (
    <div className='w-[290px] h-[180px] rounded-lg bg-gradient-to-r from-green-400 to-fuchsia-400 p-1'>
        <div className=" p-3 bg-white rounded-md">
        <CardContainer title={" Rounded Card"}
         paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium adipisci iure doloribus accusamus animi quos."}>
        </CardContainer>
        </div>
    </div>
  )
}

export default Outline2