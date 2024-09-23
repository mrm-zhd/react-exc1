import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
        {users.map((user) => {
            return(
            <div key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
                <br />
            </div>)
        })}
    </>
  )
}
