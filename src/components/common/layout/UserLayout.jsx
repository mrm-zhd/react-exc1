import React from 'react'
import Sidebar from '../../Sidebar'

export default function UserLayout({UsersShow,Children}) {
  return (
    <main className='grid grid-colls-4'>
        <Sidebar list={UsersShow} className={"col-end-1"}/>
        <div className="col-start-2 col-end-5">
            {Children}
        </div>
    </main >
  )
}
