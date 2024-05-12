import React, { useState, useRef, useEffect } from 'react';
import { useFrame, useLoader } from "react-three-fiber"
import { Html, Environment, OrbitControls, useTexture, useGLTF } from "@react-three/drei"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const GameCanvas = ({ position, rotation, factor, ...props }) => {
  const group = useRef()
  // const textureProps = useTexture({
  //   map: 'assets/PavingStones092_1K_Color.jpg',
  //   displacementMap: 'assets/PavingStones092_1K_Displacement.jpg',
  //   normalMap: 'assets/PavingStones092_1K_Normal.jpg',
  //   roughnessMap: 'assets/PavingStones092_1K_Roughness.jpg',
  //   aoMap: 'assets/PavingStones092_1K_AmbientOcclusion.jpg',
  // })
  const penguin = useLoader(GLTFLoader, '/assets/3d/Penguin_LOD0.glb')
  const bear = useLoader(GLTFLoader, '/assets/3d/PolarBear_LOD1.glb')

  // const [state] = useState(() => ({
  //   positionY: 0.0,
  //   velocityY: 0.0,
  //   gravity: 0.5,
  //   onGround: false,
  // }))

  // useEffect(() => {
  //   const startJump = () => state.onGround && ((state.velocityY = -12.0), (state.onGround = false))
  //   const endJump = () => state.velocityY < -6.0 && (state.velocityY = -6.0)
  //   window.addEventListener("mousedown", startJump, false)
  //   window.addEventListener("mouseup", endJump, false)
  //   return () => {
  //     document.body.removeEventListener("mousedown", startJump)
  //     document.body.removeEventListener("mouseup", endJump)
  //   }
  // }, [])


  // useFrame((_, delta) => {
  //   // group.current.rotation.z -= Math.sin((delta * factor) / 2) * 1.93
  //   // group.current.rotation.y = 0.68
  //   // group.current.rotation.x = 0.2
  //   // https://gamedev.stackexchange.com/questions/29617/how-to-make-a-character-jump
  //   state.velocityY += state.gravity
  //   state.positionY -= state.velocityY
  //   if (state.positionY < 0) {
  //     state.positionY = 0
  //     state.velocityY = 0.0
  //     state.onGround = true
  //   }
  //   // group.current.position.y = state.positionY / 20
  //   group.current.position.y = state.positionY / 5
  // })

  // return (
  //   <group ref={group} {...props} dispose={null}>
  //     {/* <group position={[0, -20, 0]} rotation={[0, 0, 1.5]} scale={[9, 9, 9]}> */}
  //     <group>
  //       <primitive object={penguin.scene} />
  //     </group>
  //   </group>
  // )

  return (
    <>
      <primitive object={penguin.scene} scale={70} />
      <primitive object={bear.scene} scale={70} />
      <Html as="div"
        style={{
          color: 'hotpink',
          transform: 'scale(2) translate(-200px, 20px)',
        }}
        center>
        <h1>hello</h1><p>world</p>
      </Html>
      <OrbitControls />
      <Environment files="./assets/rustig_koppie_puresky_1k.hdr" background />
    </>
  )
}

export default GameCanvas;

// death star
// <ambientLight intensity={0.8} />
// <directionalLight />
// <mesh>
//   <sphereGeometry args={[60, 32, 32]} />
//   <meshStandardMaterial
//     {...textureProps}
//   />
// </mesh>

// jumping sheep: https://codesandbox.io/p/sandbox/floral-pine-ux3v1?file=%2Fsrc%2FSheep.js%3A46%2C11
// https://sketchfab.com/heatherandersoncreative/invoices/d1011eb8c7134daab7690cd4988bf503
// https://polyhaven.com/hdris/outdoor/nature
// https://sbcode.net/react-three-fiber/environment/
// flappy bird clone: https://birdmmo.sbcode.net/
// flappy bird code: https://github.com/Sean-Bradley/BirdMMO/blob/main/src/client/Scenery.jsx