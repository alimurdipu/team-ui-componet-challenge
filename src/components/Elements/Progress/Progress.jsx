import React from 'react'
import BasicProgress from './BasicProgress'
import SoftProgress from './SoftProgress'
import ProgressSize from './ProgressSize'
import ActiveProgress from './ActiveProgress'

const Progress = () => {
  return (
    <div className=' p-2'>
      <BasicProgress />
      <SoftProgress />
      <ProgressSize />
      <ActiveProgress />
    </div>
  )
}

export default Progress