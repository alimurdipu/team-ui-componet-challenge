import React from 'react'
import TypographyContainer from './UI/TypographyContainar/TypographyContainer'

const GradientText = () => {
  return (
    <div className='  bg-[#FFFFFF] shadow-md w-full mx-auto h- p-4 rounded-lg  '>
    <TypographyContainer title={'Basic Typography'} 
 paragraph={"Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."}>
 </TypographyContainer>
 <div className="my-4 p-2 ">

<h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-500 to-red-400 text-3xl mb-2 h-8 w-full '>The quick brown fox jumps over the lazy dog.</h1>
<h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-purple-500 to-red-400 text-3xl mb-2 h-8 w-full '>The quick brown fox jumps over the lazy dog.</h1>
<h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-500 to-red-200 text-3xl mb-2 h-8 w-full '>The quick brown fox jumps over the lazy dog.</h1>
<h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-300 to-red-200 text-3xl mb-2 h-8 w-full '>The quick brown fox jumps over the lazy dog.</h1>
<h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-500 to-orange-900 text-3xl mb-2 h-8 w-full '>The quick brown fox jumps over the lazy dog.</h1>

 </div>
</div>
  )
}

export default GradientText