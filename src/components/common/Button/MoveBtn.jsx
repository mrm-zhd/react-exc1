import React from 'react'
import ShowBtn from './ShowBtn.jsx';

export default function MoveBtn() {
    let level = 1;
    const handlePrev = () => {
        level--;
        return level;
    }
    const handleNext = () => {
        level++;
        return level;
    }
  return (
    <>
        <div>
          <ShowBtn level={level} />
        </div>
        <div className='flex justify-center'>
            <button onClick={handlePrev} className={`text-white  p-2 m-4 rounded-md
            ${level === 1 ? 'bg-sky-300 cursor-not-allowed' : 'bg-sky-600'}`}>Prev</button>
            <button onClick={handleNext} className={`text-white  p-2 m-4 rounded-md
            ${level === 4 ? 'bg-sky-300 cursor-not-allowed' : 'bg-sky-600'}`}>Next</button>
        </div>
    </>
  )
}

