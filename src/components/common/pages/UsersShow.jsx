import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import UserLayout from '../layout/UserLayout';
import UserListContext from '../../../Context/UserListContext';

export default function UsersShow() {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/');
            const data = await res.json();
            setUsers(data);
        };
        fetchData();
});
  return (
    <>
        {/* {users.map((user) => {
            return(
            <div key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
                <br />
            </div>)
        })} */}
        <UserListContext.Provider value={{usersList: users}}>
            <UserLayout userList={users}>
                <Outlet/>
            </UserLayout>
        </UserListContext.Provider>
    </>
  )
}
