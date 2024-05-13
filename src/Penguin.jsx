import React from 'react'
import { useGLTF } from '@react-three/drei'

const PATH = '/dist/assets/3d/Penguin_LOD0.glb';

export default function Penguin({ crashed = false }) {
  const { nodes, materials } = useGLTF(PATH)

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


useGLTF.preload(PATH)
