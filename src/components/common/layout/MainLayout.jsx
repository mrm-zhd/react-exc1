import React, { useState } from 'react'
import Header from '../../Header'
import PrdctShow from '../pages/PrdctShow'
import BasketLayout from './BasketLayout';


export default function MainLayout() {
  const [ShowShop,setShowShop] = useState(true);
  return (
    <div className='min-h-full'>
        <Header setShow={setShowShop} />
        {ShowShop ? (<PrdctShow/>):(<BasketLayout/>)}
    </div>
  )
}
