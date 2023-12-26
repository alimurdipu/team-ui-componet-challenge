import React from 'react'
import TypographyContainer from './UI/TypographyContainar/TypographyContainer'

const TextDecurationColor = () => {
  return (
    <div className=" bg-[#FFFFFF] shadow-md w-full mx-auto h- p-4 rounded-lg ">
    <TypographyContainer
      title={"Basic Typography"}
      paragraph={
        "Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."
      }
    ></TypographyContainer>
    <div>
    <p class="text-sm leading-6">
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a href="#" class="font-semibold underline decoration-info decoration-2"
      > My Company, Inc</a>. Outside of work, I like to
    <a
      href="#"
      class="font-semibold underline decoration-secondary decoration-2"
      >watch pod-racing</a>
    and have
    <a href="#" class="font-semibold underline decoration-primary decoration-2"
      >light-saber</a>
    fights.
  </p>
    </div>
  </div>
  )
}

export default TextDecurationColor