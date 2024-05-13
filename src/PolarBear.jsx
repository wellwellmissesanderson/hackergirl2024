import { useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export default function PolarBear({ id, position, colliders }) {
  const colliderRef = [useRef(), useRef()]
  const { nodes, materials } = useGLTF('/assets/3d/PolarBear_LOD1.glb')

  useEffect(() => {
    colliders[colliderRef[0].current.name] = colliderRef[0].current
    colliders[colliderRef[1].current.name] = colliderRef[1].current
  })

  return (
    <group dispose={null} position={position}>
      <skinnedMesh
        geometry={nodes.Mesh.geometry}
        material={materials.M_PolarBear}
        skeleton={nodes.Mesh.skeleton}
        position={[1.35, -13.13, 0]}
        scale={[0.05, 9, 0.12]}
      />
      <primitive object={nodes.root} />

      <mesh ref={colliderRef[0]} name={'collider0_' + id} position-y={-7.05} visible={true}>
        <planeGeometry args={[3, 9, 2, 5]} />
        <meshNormalMaterial wireframe />
      </mesh>
      <mesh ref={colliderRef[1]} name={'collider1_' + id} position-y={7.05} visible={true}>
        <planeGeometry args={[3, 9, 2, 5]} />
        <meshNormalMaterial wireframe />
      </mesh>
    </group>
  )
}

useGLTF.preload('/assets/3d/PolarBear_LOD1.glb')
