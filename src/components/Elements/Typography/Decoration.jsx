import React from "react";
import TypographyContainer from "./UI/TypographyContainar/TypographyContainer";

const Decoration = () => {
  return (
    <div className=" bg-[#FFFFFF] shadow-md w-full mx-auto h- p-4 rounded-lg ">
      <TypographyContainer
        title={"Basic Typography"}
        paragraph={
          "Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."
        }
      ></TypographyContainer>
      <div>
        <p class="text-lg underline">
          The quick brown fox jumps over the lazy dog.
        </p>
        <p class="text-lg overline">
          The quick brown fox jumps over the lazy dog.
        </p>
        <p class="text-lg line-through">
          The quick brown fox jumps over the lazy dog.
        </p>
        <p class="text-lg no-underline">
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </div>
  );
};

export default Decoration;
