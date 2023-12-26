import React from 'react'
import MaskContainer from './UI/maskContainer/MaskContainer'
import photos from '../../../../public/images/avatar/avatar-12.jpg'
import  "./MaskCss.css"
const ReuleauxTriangleMask = () => {
  return (
    <div className=' bg-[#FFFFFF] shadow-md w-[900px] mx-auto h-[350px] p-4 rounded-lg'>
    <MaskContainer title={'Squircle Mask'} 
 paragraph={"Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."}>
 </MaskContainer>
<div className=' bg-red-200 p-8 inline-block trianguler'>
<img
  src={photos}
  className=' h-36 w-36 rounded-full'
  ></img>
</div>
</div>
  )
}

export default ReuleauxTriangleMask