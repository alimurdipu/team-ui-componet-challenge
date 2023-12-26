import React from 'react'
import TypographyTitle from '../TypographyTitle/TypographyTitle'
import TypographyParagraph from '../TypographyTitle/TypographyParagraph/TypographyParagraph'

const TypographyContainer = ({title, paragraph, children}) => {
  return (
    <div>
        <TypographyTitle>{title}</TypographyTitle>
        <TypographyParagraph>{paragraph}</TypographyParagraph>
        {children}
    </div>
  )
}

export default TypographyContainer