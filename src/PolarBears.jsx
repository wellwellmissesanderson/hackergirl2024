import React, { useRef } from 'react'
import Bear from './PolarBear'

// a seedable RNG. https://gist.github.com/blixt/f17b47c62508be59987b
const LCG = (s) => (_) => (s = Math.imul(741103597, s) >>> 0) / 2 ** 32
const nextRandom = LCG(12345678)

const positions = [...Array(51)].map((_, i) => ({
  position: [i * 10 - 250, nextRandom(1) * (5 + i / 7.5) + 3, 0]
}))

export default function PolarBears({ colliders }) {
  const ref = useRef()

  return (
    <group ref={ref} name="pipes">
      {positions.map(({ position }, i) => (
        <Bear key={i} id={i} position={position} colliders={colliders} />
      ))}
    </group>
  )
}
