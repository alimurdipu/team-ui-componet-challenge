import React from 'react'
import ProgressTitle from '../../../Progress/UI/ProgressTitle/ProgressTitle'
import ProgressParagraph from '../../../Progress/UI/ProgressParagraph/ProgressParagraph'

const MaskContainer = ({title, paragraph, children}) => {
  return (
    <div className=' '>
    <ProgressTitle>{title}</ProgressTitle>
    <ProgressParagraph>{paragraph}</ProgressParagraph>
    {children}
</div>
  )
}

export default MaskContainer