import React from 'react'
import CardGradientContainer from './UI for Gradient/CardContainer/CardGradientContainer'

const GlowCardBlue = () => {
  return (
    <div className='w-[290px] h-[180px] shadow-xl px-5 py-4 rounded-xl bg-[#10A5E9] blur-0 shadow-[#10A5E9]'>
    <CardGradientContainer title={" Glow Card"}
     paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium adipisci iure doloribus accusamus animi quos."}>
    </CardGradientContainer>
</div>
  )
}

export default GlowCardBlue