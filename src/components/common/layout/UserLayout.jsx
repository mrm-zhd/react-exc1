import React from 'react'
import Sidebar from '../../Sidebar'

export default function UserLayout({userList,Children}) {
  return (
    <main className='grid grid-colls-4'>
        <Sidebar list={userList} className={"col-end-1"}/>
        <div className="col-start-2 col-end-5">
            {Children}
        </div>
    </main >
  )
}
