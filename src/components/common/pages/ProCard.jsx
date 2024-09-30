import React, { useContext, useState } from 'react'

export default function ProCard({data}) {
  // const {cardItems} = useContext(cardItems);
  const addCard = () =>{

  }
  return (
    <div >
      {/* <CardContext.Provider value={{cardItems: card, basket}}> */}
        <img src={data.image} className='w-20'/>
        {data.title}<br/>{data.price}<br/>
        <button onClick={(data)=>addCard(data)}>add</button>
        {/* </CardContext.Provider> */}
    </div>
  )
}
