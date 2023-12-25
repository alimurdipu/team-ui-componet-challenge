import React from 'react'
import CardGradientContainer from './UI for Gradient/CardContainer/CardGradientContainer'

const GradientCard1 = () => {
  return (
    <div className='w-[290px] h-[180px] shadow-xl px-5 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-700'>
    <CardGradientContainer title={" Gradient Card"}
     paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium adipisci iure doloribus accusamus animi quos."}>
    </CardGradientContainer>
</div>
  )
}

export default GradientCard1