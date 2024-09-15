import React from 'react'

export default function UserCart(data) {
  return (
    <div className='hover:scale-110 transition-all bg-slate-300 flex justify-enter flex-col items-center' id={data.id}>
        <img
        src={`http://robohash.org/${data.id}`}
        width={128}
        height={128}
        />
        <p className='name'>{data.name}</p>
        <p className='email'>{data.email}</p>
    </div>
  )
}
