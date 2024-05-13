import React, { useRef } from 'react'
import Barrier from './Barrier'

// a seedable RNG. https://gist.github.com/blixt/f17b47c62508be59987b
const LCG = (s) => (_) => (s = Math.imul(741103597, s) >>> 0) / 2 ** 32
const nextRandom = LCG(123456789)

const positions = [...Array(51)].map((_, i) => ({
  // TODO make floor to ensure items never go below y plane.
  // X: i * 10 - 250 
  // for ex, i=0, -250. i=1, -240, -230, etc.
  // Y: nextRandom(1) * (5 + i / 7.5) + 3
  // ex: i=0, rand * (5 + 0) + 3, or rand * 8. i=1, rand * (5+1.3) + 3 or 9.3.
  position: [i * 10 - 250, nextRandom(1) * (5 + i / 7.5) + 6, 0]
  // position: [i * 10 - 250, nextRandom(1) * (5 + i / 7.5) + 3, 0]
}))

positions.forEach(e => {
  console.log(e.position[1])
});

export default function Barriers({ colliders }) {
  const ref = useRef()

  return (
    <group ref={ref} name="bears">
      {positions.map(({ position }, i) => (
        <Barrier key={i} id={i} position={position} colliders={colliders} />
      ))}
    </group>
  )
}
