import React, { useState } from 'react';


const App = () => {
  const [playing, setPlaying] = useState(false);
  const [jumping, setJumping] = useState(false);

  const handleBgClick = (e) => {
    setPlaying(prevState => !prevState);
  }

  const handleJumping = (e) => {
    setJumping(prevState => !prevState);
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className={`sliding-background ${playing ? 'slide' : ''}`}
      ></div>

      <div className="inner absolute w-screen top-0 left-0 p-4 border-2 border-pink-700 z-10 flex flex-col">
        {/* Game Controls */}
        <div className="flex  h-12 border-2 border-teal-500">
          <button type="button" onClick={handleBgClick}>
            Start/Stop
          </button>
        </div>

        {/* Scene */}
        <div className="border-2 h-full border-orange-700 flex">
          {/* Penguin  */}
          <button className="border-2 border-purple-500 w-1/3 self-end" type="button" onClick={handleJumping}>
            <img
              className="max-h-44 inline-block"
              src={`./assets/penguin-${jumping ? 'jump' : 'stand'}.png`}
              alt={`penguin ${jumping ? 'jumping' : 'standing'}`}
            />
          </button>

          {/* Polar Bear  */}
          <button className="border-2 border-purple-500 w-2/3 self-end" type="button">
            <img
              className="max-h-72 inline-block"
              src={`./assets/penguin-${jumping ? 'jump' : 'stand'}.png`}
              alt={`penguin ${jumping ? 'jumping' : 'standing'}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;