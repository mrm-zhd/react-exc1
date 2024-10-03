import React, { useState } from 'react'
import Header from '../../Header'
import PrdctShow from '../pages/PrdctShow'
import BasketLayout from './BasketLayout';


export default function MainLayout({children}) {
  return (
    <div className='min-h-full'>
        <Header  />
{children}
    </div>
  )
}
