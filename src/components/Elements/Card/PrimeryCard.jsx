import React from 'react'
import CardContainer from './UI/CardContainer/CardContainer'
import CardGradientContainer from './UI for Gradient/CardContainer/CardGradientContainer'

const PrimeryCard = () => {
  return (
    <div className='w-[290px] h-[180px] shadow-xl px-5 py-4 rounded-xl bg-primary'>
        <CardGradientContainer title={" Primery Card"}
         paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium adipisci iure doloribus accusamus animi quos."}>
        </CardGradientContainer>
    </div>
  )
}

export default PrimeryCard