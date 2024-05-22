import React, { useState } from 'react'
import { Html, Hud, OrthographicCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Overlay({ model, crashed, started }) {
  const [score, setScore] = useState(0)

  useFrame(() => {
    let s = Math.floor((model.current.position.x - 2) / 10) + 26
    s < 0 && (s = 0)
    setScore(s)
  })

  return (
    <Hud>
      <OrthographicCamera makeDefault position={[0, 0, 0]} />
      <Html>
        <div className="font-mono text-5xl text-white w-72 mt-16 -ml-[46rem] [text-shadow:_-4px_-4px_0_rgb(0_0_0_/_100%),_4px_-4px_0_rgb(0_0_0_/_100%),_-4px_4px_0_rgb(0_0_0_/_100%),_4px_4px_0_rgb(0_0_0_/_100%)]">{started && !crashed ? `Score: ${score}` : null}</div>
      </Html>
      <Html>
        <div className="py-1 text-5xl font-mono text-white w-96 -ml-[46rem] mt-8" style={{ display: crashed ? 'block' : 'none' }}>
          Press <span className="border border-white rounded-sm bg-[#8c4ad7] p-1 my-1 inline-block">R</span> to re-start
        </div>
      </Html>
      <Html>
        <div className="py-1 text-5xl font-mono text-white w-1/4 -ml-[46rem] mt-24" style={{ display: started ? 'none' : 'block' }}>
          <span className="whitespace-nowrap">Keep jumping.</span>
          <br />
          <span className="whitespace-nowrap">Avoid obstacles.</span>
          <br />
          <span className="whitespace-nowrap">Don't die!</span>
        </div>
      </Html>
      <Html zIndexRange={[2, 19]}>
        <div className="py-1 text-5xl font-mono text-white w-72 mt-32">
          <button className="cursor-pointer border border-white rounded-sm bg-[#8c4ad7] p-1 my-1 inline-block">Jump</button>
        </div>
      </Html>
    </Hud>
  )
}