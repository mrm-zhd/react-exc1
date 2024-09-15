import React from 'react'

export default function SearchUser(action) {
  return (
    <>
        <input 
            type='text' 
            placeholder='search..' 
            onChange={(e) => {
                action(e.target.value);
            }}/>
    </>
  )
}
