import React, { Suspense, useState } from 'react';
import { Canvas } from "react-three-fiber"
import { Html, Environment, PerformanceMonitor } from '@react-three/drei'
import Game from './Game';

const App = () => {
  const [dpr, setDpr] = useState(0.5)

  return (
    <Suspense fallback={null}>
      <Canvas shadows dpr={dpr}>
        {/* // TODO remove */}
        <PerformanceMonitor onIncline={() => setDpr(1)} onDecline={() => setDpr(0.25)}>
          <Environment files="./assets/rustig_koppie_puresky_1k.hdr" background />
          <Game />
        </PerformanceMonitor>
      </Canvas>
    </Suspense>
  );
}

export default App;