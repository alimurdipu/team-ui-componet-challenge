import React from 'react'
import CardContainer from './UI/CardContainer/CardContainer'


const SimpleCard = () => {
  return (
    <div className=' w-[290px] h-[180px] bg-white shadow-md px-5 py-4'>
        <CardContainer title={"Simple Card"}
         paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium adipisci iure doloribus accusamus animi quos."}
         >
         </CardContainer>
    </div>
  )
}

export default SimpleCard