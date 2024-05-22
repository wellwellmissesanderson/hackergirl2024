
import React, { useState } from 'react'

export default function Scrim() {
  const [value, setValue] = useState(0)

  return (
    <>
      <div className={`pointer-events-none bg-black z-20 fixed w-full h-full opacity-${value}`}>
        <button className="pointer-events-none text-white text-center text-lg bg-yellow-500 border-white border absolute w-1/2 h-1/2 flex flex-col justify-center align-center bottom-[15%] left-[25%] p-8">
          🙈
          Ruh roh!
          🙈
        </button>
      </div>

      <input
        onChange={(e) => setValue(e.target.value)}
        type="range"
        max="100"
        min="0"
        value={value}
        step="5"
        className="absolute z-20"
      />
    </>

  )
}