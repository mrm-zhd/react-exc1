import React from 'react'

export default function ShowBtn({level}) {
  return (
    <div>
        <button id='1' className={`border-2 p-4 rounded-full pointer-events-none transition-all delay-300 duration-500 
            after:content-[''] after:w-5 after:h-2 after:bg-gray-300
            ${level === 1 ? ' border-blue-300' : 'border-gray-300'}`}>1</button>
            <span className='text-gray-300'>______</span>
            <button id='2' className={`border-2 p-4 rounded-full pointer-events-none transition-all delay-300 duration-500 
            ${level === 2 ? ' border-blue-300' : 'border-gray-300'}`}>2</button>
            <span className='text-gray-300'>______</span>
            <button id='3' className={`border-2 p-4 rounded-full pointer-events-none transition-all delay-300 duration-500 
            ${level === 3 ? ' border-blue-300' : 'border-gray-300'}`}>3</button>
            <span className='text-gray-300'>______</span>
            <button id='4' className={`border-2 p-4 rounded-full pointer-events-none transition-all delay-300 duration-500
            ${level === 4 ? ' border-blue-300' : 'border-gray-300'}`}>4</button>
    </div>
  )
}
