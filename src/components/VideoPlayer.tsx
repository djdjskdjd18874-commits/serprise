import React from "react";

interface VideoPlayerProps {
  src: string;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100"> 
   
    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
    {title && <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>}
    <video 
      className="rounded-lg shadow-md w-full max-w-2xl " 
      controls
    >
      <source src={src} type="video/mp4" />
      متصفحك لا يدعم تشغيل الفيديو.
    </video>
  </div>
</div>

  );
};

export default VideoPlayer;

