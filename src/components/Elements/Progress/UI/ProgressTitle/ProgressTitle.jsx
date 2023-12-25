import React, { Children } from 'react'

const ProgressTitle = ({children}) => {
  return (
    <div className='text-color-heading p-2 lg:text-lg leading-normal'>
        {children}
    </div>
  )
}

export default ProgressTitle