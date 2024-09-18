import React from 'react'

export default function Input({type='text' ,placeholder='',handleChange}) {
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} 
        className="p-3 border border-gray-600 rounded-md bg-white" />
    </div>
  )
}
