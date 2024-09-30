import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header({setShow}) {
  return (
    <header className='w-full bg-gray-300 h-20 grid grid-cols-2 content-between'>
      <Link to="/" onClick={()=>setShow(true)}>Home</Link>
      <Link to="/basket" onClick={()=>setShow(false)}> <FontAwesomeIcon icon={faCartShopping} />Basket</Link>
    </header>
  )
}
