import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import Player from './Player'
import PolarBears from './PolarBears'
import Scenery from './Scenery'

const Game = () => {
  const colliders = {}
  const lightRef = useRef()

  useFrame((state) => {
    lightRef.current.position.x = state.camera.position.x
    lightRef.current.target.position.x = state.camera.position.x
    lightRef.current.target.updateMatrixWorld()
  })

  return (
    <>
      <Scenery />
      <PolarBears colliders={colliders} />
      <Player colliders={colliders} />
      <directionalLight
        ref={lightRef}
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-20}
        shadow-camera-right={40}
        shadow-camera-top={30}
      />
    </>
  )
}

export default Game;

// jumping sheep: https://codesandbox.io/p/sandbox/floral-pine-ux3v1?file=%2Fsrc%2FSheep.js%3A46%2C11
// https://sketchfab.com/heatherandersoncreative/invoices/d1011eb8c7134daab7690cd4988bf503
// https://polyhaven.com/hdris/outdoor/nature
// https://sbcode.net/react-three-fiber/environment/
// flappy bird clone: https://birdmmo.sbcode.net/
// flappy bird code: https://github.com/Sean-Bradley/BirdMMO/blob/main/src/client/Scenery.jsx
// generate mesh: https://gltf.pmnd.rs/