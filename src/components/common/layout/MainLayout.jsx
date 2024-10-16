import React, { useContext, useState } from 'react'
import InsForm from '../pages/InsForm'
import ListShow from '../pages/ListShow'
import ItemContext from '../../context/ItemContext.jsx'

export default function MainLayout() {
  const {list, setList} = useState([]);
  const itemsValue = {list, setList};

  // const items = useContext(ItemContext);
  return (
    <div className='min-h-full grid grid-cols-2'>
      <ItemContext.Provider value={itemsValue}>
        <InsForm />
        <ListShow />
      </ItemContext.Provider>
    </div>
  )
}
