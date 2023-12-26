import React from 'react'
import TypographyContainer from './UI/TypographyContainar/TypographyContainer'

const ColoredHeading = () => {
  return (
    <div className='  bg-[#FFFFFF] shadow-md w-full mx-auto h- p-4 rounded-lg  '>
    <TypographyContainer title={'Basic Typography'} 
 paragraph={"Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."}>
 </TypographyContainer>
 <div className="my-4 p-2 ">
<h1 className=' text-3xl mb-2 font-light text-primary'>Heading H1</h1>
<h1 className=' text-2xl mb-2 font-light text-secondary'>Heading H1</h1>
<h1 className=' text-xl mb-2 font-light  text-info'>Heading H1</h1>
<h1 className=' text-lg mb-2 font-light text-success'>Heading H1</h1>
<h1 className=' text-md mb-2 font-light text-error'>Heading H1</h1>
<h1 className=' text-sm mb-2 font-light text-warning'>Heading H1</h1>
 </div>
</div>
  )
}

export default ColoredHeading