import React from 'react'
import TypographyContainer from './UI/TypographyContainar/TypographyContainer';

const BoldHeading = () => {
  return (
    <div className='  bg-[#FFFFFF] shadow-md w-full mx-auto h- p-4 rounded-lg  '>
    <TypographyContainer title={'Bold Heading'} 
 paragraph={"Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."}>
 </TypographyContainer>
 <div className="my-4 p-2 ">
<h1 className=' text-3xl text-color-pera mb-2 font-bold'>Heading H1</h1>
<h1 className=' text-2xl text-color-pera mb-2 font-bold'>Heading H1</h1>
<h1 className=' text-xl text-color-pera mb-2 font-bold'>Heading H1</h1>
<h1 className=' text-lg text-color-pera mb-2 font-bold'>Heading H1</h1>
<h1 className=' text-md text-color-pera mb-2 font-bold'>Heading H1</h1>
<h1 className=' text-sm text-color-pera mb-2 font-bold'>Heading H1</h1>
 </div>
</div>
  )
}

export default BoldHeading