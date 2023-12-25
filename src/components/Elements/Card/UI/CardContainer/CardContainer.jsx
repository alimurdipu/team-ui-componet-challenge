import React from 'react'
import CardTitle from '../CardTitle/CardTitle'
import CardParagraph from '../CardParagaph/CardParagraph'

const CardContainer = ({title, paragraph, children}) => {
  return (
    <div>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{paragraph}</CardParagraph>
        {children}
    </div>
  )
}

export default CardContainer