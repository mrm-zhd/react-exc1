import React, { useEffect, useState } from 'react'
// import { Outlet } from 'react-router-dom';
// import UserLayout from '../layout/BasketLayout';
// import UserListContext from '../../../Context/UserListContext';
import ProCard from './ProCard';
import { CardContext } from '../../context/CardContext';


export default function PrdctShow() {
    const [prdcts,setPrdcts] = useState([]);
    const [card,setCard] = useState([]);
    let basket = 0;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setPrdcts(data);
        };
        fetchData();
});
console.log(card);

  return (
    <>
        {prdcts.map((prdct) => {
            return(
            <div className='grid grid-cols-3 gap-8' key={prdct.id}>
                <CardContext.Provider value={{cardItems: card, basket}}>
                    <ProCard data={prdct} />
                </CardContext.Provider>
                {/* <Link to={`/users/${user.id}`}>{prdct.name}</Link> */}
            </div>)
        })}
        {/* <UserListContext.Provider value={{usersList: users}}>
            <UserLayout userList={users}>
                <Outlet/>
            </UserLayout>
        </UserListContext.Provider> */}
    </>
  )
}
