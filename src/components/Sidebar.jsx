import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserListContext from '../Context/UserListContext'

export default function Sidebar() {
  // console.log(list);
  const {usersList} = useContext(UserListContext);
  return (
    <div>
        {usersList.map((user) => {
          return(
            <div key={user.id}>
                <Link to={`${user.id}`}>{user.name}</Link>
                <br />
            </div>)})}
    </div>
  )
}
