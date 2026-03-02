 
 import React, { useRef, useState } from "react";

const Song: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="flex flex-col items-center justify-center p-8 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-pink-200 w-96">
        <h2 className="text-xl font-extrabold text-pink-600 mb-6">
          🎶 شغلي الأغنية وخلي الجو رومانسي 🎶
        </h2>
        <button
          onClick={toggleMusic}
          className={`px-8 py-3 rounded-xl shadow-lg transition font-semibold text-lg ${
            isPlaying
              ? "bg-pink-600 text-white hover:bg-pink-700 animate-pulse"
              : "bg-pink-300 text-pink-700 hover:bg-pink-400"
          }`}
        >
          {isPlaying ? "⏸ إيقاف الأغنية" : "▶ تشغيل الأغنية"}
        </button>
        <audio ref={audioRef} src="/song/Song.mpeg" loop />
      </div>
    </div>
  );
};

export default Song;
