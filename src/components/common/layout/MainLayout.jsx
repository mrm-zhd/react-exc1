import React, { useState } from 'react'
import InsForm from '../pages/InsForm'
import ListShow from '../pages/ListShow'

export default function MainLayout() {
  return (
    <div className='min-h-full grid grid-cols-2'>
        <InsForm  />
        <ListShow />
    </div>
  )
}
