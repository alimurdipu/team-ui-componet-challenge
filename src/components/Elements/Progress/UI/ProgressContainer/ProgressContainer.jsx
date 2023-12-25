import React from 'react'
import ProgressTitle from '../ProgressTitle/ProgressTitle'
import ProgressParagraph from '../ProgressParagraph/ProgressParagraph'

const ProgressContainer = ({ title, paragraph, children }) => {
  return (
    <div className=' '>
        <ProgressTitle>{title}</ProgressTitle>
        <ProgressParagraph>{paragraph}</ProgressParagraph>
        {children}
    </div>
  )
}

export default ProgressContainer