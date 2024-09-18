import React from 'react'

export default function ShowBtn({level}) {
  return (
    <div>
        <button id='1' className={`border-2 p-4 m-4 rounded-full pointer-events-none
            ${level === 1 ? ' border-blue-300' : 'border-gray-300'}`}>1</button>
            <button id='2' className={`border-2 p-4 m-4 rounded-full pointer-events-none
            ${level === 2 ? ' border-blue-300' : 'border-gray-300'}`}>2</button>
            <button id='3' className={`border-2 p-4 m-4 rounded-full pointer-events-none
            ${level === 3 ? ' border-blue-300' : 'border-gray-300'}`}>3</button>
            <button id='4' className={`border-2 p-4 m-4 rounded-full pointer-events-none
            ${level === 4 ? ' border-blue-300' : 'border-gray-300'}`}>4</button>
    </div>
  )
}
