import React, { Suspense, useState } from 'react';
import { Canvas } from "react-three-fiber"
import { Environment, OrbitControls } from '@react-three/drei'
import Game from './Game';

const App = () => {
  const [dpr, setDpr] = useState(0.5)

  return (
    <Suspense fallback={null}>
      <Canvas shadows dpr={dpr}>
        <Environment files="./assets/rustig_koppie_puresky_1k.hdr" background />
        <OrbitControls />
        <Game />
      </Canvas>
    </Suspense>
  );
}

export default App;