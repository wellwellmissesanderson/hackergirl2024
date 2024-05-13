import React, { Suspense, useState, useRef, useEffect, useReducer } from 'react';
import { useFrame, useLoader, Canvas } from "react-three-fiber"
import { Html, Environment, PerformanceMonitor, OrthographicCamera } from '@react-three/drei'

import Game from './Game';

const reducer = (state, action) => {
  console.log({ state, action })
  switch (action.type) {
    case 'TOGGLE_GAME':
      return {
        ...state,
        playing: !state.playing,
      }
    case 'PENGUIN_JUMP':
      return {
        ...state,
        penguinJumping: !state.penguinJumping,
      }
    default:
      return { ...state };
  }
}

const App = () => {
  const [dpr, setDpr] = useState(0.5)
  const [gameState, dispatch] = useReducer(reducer, {
    penguinJumping: false,
    playing: false,
  });

  // Game event Actions
  const handleBgClick = (e) => {
    dispatch({ type: 'TOGGLE_GAME' })
  }

  const handlePenguinJump = (e) => {
    if (!gameState.playing) {
      return;
    }

    dispatch({ type: 'PENGUIN_JUMP' })
  }

  return (
    <Suspense fallback={null}>
      <Canvas shadows dpr={dpr}>
        {/* // TODO remove */}
        <PerformanceMonitor onIncline={() => setDpr(1)} onDecline={() => setDpr(0.25)}>
          <Environment files="./assets/rustig_koppie_puresky_1k.hdr" background />
          <Game />
        </PerformanceMonitor>
      </Canvas>
    </Suspense >
  );

  // </div>
  // <div className="overflow-hidden relative">
  {/* <div
        className={`sliding-background ${gameState.playing ? 'slide' : ''}`}
      ></div> */}

  {/* <div className="inner absolute w-screen top-0 left-0 p-4 border-2 border-pink-700 z-10 flex flex-col"> */ }
  {/* Game Controls */ }
  {/* <div className="flex justify-center h-12 border-2 border-teal-500">
          <button type="button" onClick={handleBgClick} className="w-80 inline-block bg-yellow-400 border-2 border-purple-900">
            Start/Stop
          </button>
        </div> */}


  {/* Scene */ }
  {/* <div className="border-2 h-full border-green-700 flex"> */ }
  {/* Penguin  */ }
  {/* <button className="border-2 border-purple-500 w-1/3 self-end" type="button" onClick={handlePenguinJump}>
            <img
              className="max-h-44 inline-block"
              src={`./assets/penguin-${gameState.penguinJumping ? 'jump' : 'stand'}.png`}
              alt={`penguin ${gameState.penguinJumping ? 'jumping' : 'standing'}`}
            />
          </button> */}

  {/* Polar Bear  */ }
  {/* <button className="border-2 border-purple-500 w-2/3 self-end" type="button">
            <img
              className="h-56 inline-block"
              src={`./assets/polar_bear.png`}
              alt={`polar bear`}
            />
          </button>
        </div> */}
  {/* </div> */ }
  // </div>
}

export default App;