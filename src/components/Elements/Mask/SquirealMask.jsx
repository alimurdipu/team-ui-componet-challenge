import React from 'react'
import MaskContainer from './UI/maskContainer/MaskContainer'
import photos from '../../../../public/images/avatar/avatar-12.jpg'
const SquirealMask = () => {
  return (
    <div className=' bg-[#FFFFFF] shadow-md w-[900px] mx-auto h-[350px] p-4 rounded-lg'>
         <MaskContainer title={'Squircle Mask'} 
      paragraph={"Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."}>
      </MaskContainer>
      <img
       src={photos}
       className=' h-36 w-36 rounded-[40px]'
       ></img>
    </div>
  )
}

export default SquirealMask