import React from 'react'
import TypographyContainer from './UI/TypographyContainar/TypographyContainer';

const DisplayHeading = () => {
  return (
    <div className='  bg-[#FFFFFF] shadow-md w-full mx-auto h- p-4 rounded-lg  '>
    <TypographyContainer title={'Basic Typography'} 
 paragraph={"Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."}>
 </TypographyContainer>
 <div className=" my-4 p-2 ">
<h1 className=' text-7xl text-color-pera mb-2 font-bold '>Display H1</h1>
<h1 className=' text-6xl text-color-pera mb-2 font-bold '>Display H1</h1>
<h1 className=' text-5xl text-color-pera mb-2 font-bold '>Display H1</h1>
<h1 className=' text-4xl text-color-pera mb-2 font-bold '>Display H1</h1>
<h1 className=' text-3xl text-color-pera mb-2 font-bold '>Display H1</h1>
<h1 className=' text-2xl text-color-pera mb-2 font-bold '>Display H1</h1>
 </div>
</div>
  )
}

export default DisplayHeading