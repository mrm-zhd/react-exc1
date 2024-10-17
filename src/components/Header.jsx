import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header({}) {
  return (
    <header className='w-full bg-gray-300 h-20 grid grid-cols-2 content-between'>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "text-gray-700" : isActive ? "text-blue-500" : ""
        }
      >Home</NavLink>
      <NavLink
        to="/basket"
        className={({ isActive, isPending }) =>
          isPending ? "text-gray-700" : isActive ? "text-blue-500" : ""
        }
      ><FontAwesomeIcon icon={faCartShopping} />Basket</NavLink>
    </header>
  )
}
