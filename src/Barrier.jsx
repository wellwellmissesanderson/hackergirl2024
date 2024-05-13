import { useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

const ICEBERG = {
  path: './assets/3d/Iceberg.glb',
  markup: (nodes, materials) => (
    <group
      position-y={9.5}
      scale={[.04, .08, .02]}
      rotation={[0, 0, -Math.PI / 1]}
    >
      <mesh castShadow receiveShadow geometry={nodes.Iceberg.geometry} material={materials.Mat} />
    </group >
  )
};

const GROUND_ITEMS = [
  {
    path: './assets/3d/Iceberg.glb',
    markup: (nodes, materials) => (
      <group
        position-y={-10.5}
        scale={[.04, .08, .02]}
      >
        <mesh castShadow receiveShadow geometry={nodes.Iceberg.geometry} material={materials.Mat} />
      </group >
    )
  },
  {
    path: './assets/3d/Icecream.glb',
    markup: (nodes, materials) => (
      <group
        position-y={-7.4}
        scale={[1, 1, .6]}
      >
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
      </group>
    )
  },
  {
    path: './assets/3d/Traffic_Cone.glb',
    markup: (nodes, materials) => (
      <group
        scale={[12, 12, 3]}
        position-y={-7}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh'].geometry}
          material={materials.mat13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_1'].geometry}
          material={materials.mat21}
        />
      </group>
    )
  },
  {
    path: './assets/3d/Pine_Tree.glb',
    markup: (nodes, materials) => (
      <group
        scale={[6, 6, 3]}
        position-y={-6}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group1839540034.geometry}
          material={materials.mat20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh116569604.geometry}
          material={materials.mat11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh116569604_1.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh1852343849.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh1852343849_1.geometry}
          material={materials.mat11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh558928348.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh558928348_1.geometry}
          material={materials.mat11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh302406045.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh302406045_1.geometry}
          material={materials.mat11}
        />
      </group>
    ),
  },
  {
    path: './assets/3d/Soda_Can.glb',
    markup: (nodes, materials) => (
      <group
        scale={[.3, .3, .1]}
        position-y={-6.65}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle001-Mesh'].geometry}
          material={materials['78909C']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle001-Mesh_1'].geometry}
          material={materials.F44336}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle001-Mesh_2'].geometry}
          material={materials.FFFFFF}
        />
      </group>
    )
  },
  {
    path: './assets/3d/Fridge.glb',
    markup: (nodes, materials) => (
      <group
        scale={[6, 6, 3]}
        position-y={-6}
      >
        <group
          rotation={[0, 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh378812705.geometry}
            material={materials.mat21}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh378812705_1.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh378812705_2.geometry}
            material={materials.mat15}
          />
        </group>
      </group>
    )
  },
  {
    path: './assets/3d/Hamburger.glb',
    markup: (nodes, materials) => (
      <group
        scale={[.2, .2, .07]}
        position-y={-6.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle003_Circle004-Mesh'].geometry}
          material={materials.F44336}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle003_Circle004-Mesh_1'].geometry}
          material={materials.FF5722}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle003_Circle004-Mesh_2'].geometry}
          material={materials['8BC34A']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle003_Circle004-Mesh_3'].geometry}
          material={materials.DD9944}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle003_Circle004-Mesh_4'].geometry}
          material={materials['795548']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle003_Circle004-Mesh_5'].geometry}
          material={materials.FF9800}
        />
      </group>
    )
  },
  {
    path: './assets/3d/Ladder.glb',
    markup: (nodes, materials) => (
      <group
        scale={[1, 1, .5]}
        position-y={-6.7}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh'].geometry}
          material={materials.mat14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_1'].geometry}
          material={materials.mat15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_2'].geometry}
          material={materials.mat23}
        />
      </group>
    )
  },
  {
    path: './assets/3d/Chicken.glb',
    markup: (nodes, materials) => (
      <group
        scale={[.015, .015, .01]}
        position-y={-7}
      >
        <group
          rotation-y={0}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cube035_Cube034-Mesh'].geometry}
            material={materials.FF9800}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cube035_Cube034-Mesh_1'].geometry}
            material={materials.FFFFFF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cube035_Cube034-Mesh_2'].geometry}
            material={materials['1A1A1A']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cube035_Cube034-Mesh_3'].geometry}
            material={materials.F44336}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cube035_Cube034-Mesh_4'].geometry}
            material={materials['455A64']}
          />
        </group>
      </group>
    )
  },
  {
    path: './assets/3d/Grater.glb',
    markup: (nodes, materials) => (
      <group
        scale={[.6, .6, .2]}
        position-y={-7}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cutensils_box_grater_Cube132.geometry}
          material={materials['Solid.100']}
        />
      </group>
    )
  },
];
const OFFSET = 7.05;

export default function Barrier({ id, position, colliders }) {
  const colliderRef = [useRef(), useRef()]
  const index = Math.floor(Math.random() * Object.entries(GROUND_ITEMS).length);
  // const index = 9;
  const { nodes, materials, ...rest } = useGLTF(ICEBERG.path)
  const { nodes: groundNodes, materials: groundMaterials } = useGLTF(GROUND_ITEMS[index].path)

  useEffect(() => {
    colliders[colliderRef[0].current.name] = colliderRef[0].current
    colliders[colliderRef[1].current.name] = colliderRef[1].current
  })

  return (
    <group dispose={null} position={position}>
      {/* Upper iceberg */}
      {ICEBERG.markup(nodes, materials)}
      {/* Top collider */}
      <mesh ref={colliderRef[1]} name={'collider1_' + id} position-y={OFFSET} visible={true}>
        <planeGeometry args={[3, 9, 2, 5]} />
        <meshNormalMaterial wireframe />
      </mesh>

      {/* Lower item */}
      {GROUND_ITEMS[index].markup(groundNodes, groundMaterials)}
      {/* Bottom collider */}
      <mesh ref={colliderRef[0]} name={'collider0_' + id} position-y={-OFFSET} visible={true}>
        {/* args = width, height, widthSegments, heightSegments */}
        {/* Lower items are shorter */}
        {/* <planeGeometry args={[2, 9, 2, 5]} /> */}
        <planeGeometry args={[2, 4, 2, 3]} />
        <meshNormalMaterial wireframe />
      </mesh>
    </group>
  )
}

// TODO calculate position from bottom barrier's top to ground, then scale
// so each item is completely visible