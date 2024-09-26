import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({list}) {
  // console.log(list);
  return (
    <div>
        {list.map((user) => {
          return(
            <div key={user.id}>
                <Link to={`${user.id}`}>{user.name}</Link>
                <br />
            </div>)})}
    </div>
  )
}
