import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Penguin({ crashed = false, color = 'green' }) {
  const { nodes, materials } = useGLTF('/assets/3d/Penguin_LOD0.glb')

  let primary, secondary, tertiary
  switch (color) {
    case 'green':
      primary = 0x02f8a4
      secondary = 0x00fa4a
      tertiary = 0xa6ece4
      break
    case 'red':
      primary = 0xf80256
      secondary = 0xfa00b0
      tertiary = 0xeca6ae
      break
    case 'blue':
      primary = 0x02b0f8
      secondary = 0x00fae8
      tertiary = 0xa6c8ec
      break
    case 'yellow':
      primary = 0xf8d902
      secondary = 0xfa8100
      tertiary = 0xe5eca6
      break
  }

  const position = [
    -0.25,
    crashed ? 0 : -0.45,
    0
  ]

  return (
    <group>
      <skinnedMesh
        geometry={nodes.Mesh.geometry}
        material={materials.M_Penguin}
        skeleton={nodes.Mesh.skeleton}
      />
      <primitive object={nodes.root}
        position={position}
        rotation-z={crashed ? 0 : 1}
        rotation-y={crashed ? -2 : 0}
        scale={[0.7, 0.7, 0.7]}
      />
    </group>
  )
}

useGLTF.preload('/assets/3d/Penguin_LOD0.glb')
