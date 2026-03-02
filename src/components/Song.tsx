 
 import React, { useRef } from "react";

const Song: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    audioRef.current?.play();
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-lg font-bold text-pink-600 mb-4">
          🎶 شغليها قبل ما تبدئي 🎶
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={playMusic}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
          >
            ▶ Play
          </button>
          <button
            onClick={pauseMusic}
            className="bg-pink-300 text-pink-700 px-4 py-2 rounded-lg shadow hover:bg-pink-400 transition"
          >
            ⏸ Pause
          </button>
        </div>
        <audio
          ref={audioRef}
          src="/song/Song.mpeg"
          loop
        />
      </div>
    </div>
  );
};

export default Song;
