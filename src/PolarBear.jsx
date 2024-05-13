import { useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

const FILES = [
  {
    path: '/assets/3d/Icecream.glb',
    markup: (nodes, materials) => (
      <>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iceCream_1.geometry}
          material={materials.purpleLight}
          scale={[6, 6, 6]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iceCream_1_1.geometry}
          material={materials.brownLight}
          scale={[6, 6, 6]}
        />
      </>
    )
  },
  {
    path: '/assets/3d/Iceberg.glb',
    markup: (nodes, materials) => (
      <group position-y={-4} scale={[10, 10, 10]} rotation-x={0} rotation-y={0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1826361683.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1876106406.geometry}
          material={materials.mat21}
        />
      </group>
    )
  },
];

export default function PolarBear({ id, position, colliders }) {
  const colliderRef = [useRef(), useRef()]
  // const { nodes, materials } = useGLTF('/assets/3d/PolarBear_LOD1.glb')
  const index = Math.floor(Math.random() * Object.entries(FILES).length);
  // const index = 1;
  const { nodes, materials } = useGLTF(FILES[index].path)

  useEffect(() => {
    colliders[colliderRef[0].current.name] = colliderRef[0].current
    colliders[colliderRef[1].current.name] = colliderRef[1].current
  })

  return (
    <group dispose={null} position={position}>
      {FILES[index].markup(nodes, materials)}

      {/* Bottom collider */}
      <mesh ref={colliderRef[0]} name={'collider0_' + id} position-y={-7.05} visible={true}>
        <planeGeometry args={[3, 9, 2, 5]} />
        <meshNormalMaterial wireframe />
      </mesh>
      {/* Top collider */}
      <mesh ref={colliderRef[1]} name={'collider1_' + id} position-y={7.05} visible={true}>
        <planeGeometry args={[3, 9, 2, 5]} />
        <meshNormalMaterial wireframe />
      </mesh>
    </group>
  )
}

// useGLTF.preload('/assets/3d/Iceberg.glb')

// trying to clone scene
// const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

// polar bear version
// return (
//   <group
//     dispose={null}
//     position={position}
//   >
//     <group
//       ref={colliderRef[0]}
//       name={'collider0_' + id}
//       // position-y={-7.05}
//       position={[-position[0] * 2, -13.13, 0]}
//     >
//       <skinnedMesh
//         geometry={nodes.Mesh.geometry}
//         material={materials.M_PolarBear}
//         skeleton={nodes.Mesh.skeleton}
//       />

//       <primitive
//         object={nodes.root}
//         scale={[1, 1, 1]}
//         rotation-z={-1}
//         name={'collider0_' + id}
//       />
//     </group>

//     {/* Bottom colliders */}
//     <mesh ref={colliderRef[0]} name={'collider0_' + id} position-y={-7.05} visible={true}>
//       <planeGeometry args={[3, 9, 2, 5]} />
//       <meshNormalMaterial wireframe />
//     </mesh>
//     {/* Top collider */}
//     {/* <mesh ref={colliderRef[1]} name={'collider1_' + id} position-y={7.05} visible={true}>
//       <planeGeometry args={[3, 9, 2, 5]} />
//       <meshNormalMaterial wireframe />
//     </mesh> */}
//   </group >
// )
//https://poly.pizza/m/oaDwxwtjij