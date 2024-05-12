import React, { useState, useRef, useEffect } from 'react';
import { useFrame, useLoader } from "react-three-fiber"

const GameCanvas = ({ position, rotation, factor, ...props }) => {
  const group = useRef()

  const [state] = useState(() => ({
    positionY: 0.0,
    velocityY: 0.0,
    gravity: 0.5,
    onGround: false,
  }))

  useEffect(() => {
    const startJump = () => state.onGround && ((state.velocityY = -12.0), (state.onGround = false))
    const endJump = () => state.velocityY < -6.0 && (state.velocityY = -6.0)
    window.addEventListener("mousedown", startJump, false)
    window.addEventListener("mouseup", endJump, false)
    return () => {
      document.body.removeEventListener("mousedown", startJump)
      document.body.removeEventListener("mouseup", endJump)
    }
  }, [])


  useFrame((_, delta) => {
    // group.current.rotation.z -= Math.sin((delta * factor) / 2) * 1.93
    // group.current.rotation.y = 0.68
    // group.current.rotation.x = 0.2
    // https://gamedev.stackexchange.com/questions/29617/how-to-make-a-character-jump
    state.velocityY += state.gravity
    state.positionY -= state.velocityY
    if (state.positionY < 0) {
      state.positionY = 0
      state.velocityY = 0.0
      state.onGround = true
    }
    group.current.position.y = state.positionY / 5
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        {/* <group position={[0, -20, 0]} rotation={[0, 0, 1.5]} scale={[9, 9, 9]}> */}
        <mesh>
          <boxGeometry args={[50, 50, 50]} />
          <meshStandardMaterial />
        </mesh>
      </group>
    </group>
  )
}

export default GameCanvas;