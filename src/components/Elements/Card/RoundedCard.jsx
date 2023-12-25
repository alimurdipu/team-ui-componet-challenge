import React from 'react'
import CardContainer from './UI/CardContainer/CardContainer'

const RoundedCard = () => {
  return (
    <div className='w-[290px] h-[180px] bg-white shadow-xl px-5 py-4 rounded-xl'>
        <CardContainer title={" Rounded Card"}
         paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium adipisci iure doloribus accusamus animi quos."}>
        </CardContainer>
    </div>
  )
}

export default RoundedCard