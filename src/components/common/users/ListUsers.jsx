import React,{useState, useEffect} from 'react';
// import Styles from './ListUsers.modules.css';

export default function ListUseers() {
    const [users, setUsers] = useState([]);
    useEffect (() => {
        const userFetch = async () => {
        const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await fetchUser.json();
        setUsers(userData);
        };
        userFetch();
    },[]);

    
  return (
    <>
        {users.map((userInfo) => {
        return (
            <div className='userCard' id={userInfo.id}>
               <p className='name'>{userInfo.name}</p>
               <p className='email'>{userInfo.email}</p>
            </div> 
        );
      })}
    </>
  )
}



  