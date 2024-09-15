import React,{useState, useEffect} from 'react';
// import Styles from './ListUsers.modules.css';

export default function ListUseers() {
    const [users, setUsers] = useState([]);
    const [newUsers,setNewUsers] = useState([]);

    useEffect (() => {
        const userFetch = async () => {
        const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await fetchUser.json();
        setUsers(userData);
        };
        userFetch();
    },[]);
    
    const handleSearch = (params) => {
        const newUsers = users.filter((user) => {
          return user.name.toLowerCase().includes(params.toLowerCase());
        });
      setUsers(newUsers);
    }
  return (
    <>
        {users.map((userInfo) => {
        return (
            <div className='hover:scale-110 transition-all bg-slate-300 flex justify-enter flex-col items-center' id={userInfo.id}>
               <img
                src={`http://robohash.org/${userInfo.id}`}
                width={128}
                height={128}
                />
               <p className='name'>{userInfo.name}</p>
               <p className='email'>{userInfo.email}</p>
            </div> 
        );
      })}
    </>
  )
}



  