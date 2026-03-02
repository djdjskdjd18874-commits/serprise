import React, { useEffect, useState } from "react";


const DateCounter: React.FC = () => {
  // تاريخ البداية (مثال: 11 أغسطس 2024)
  const startDate = new Date("2024-08-11T00:00:00");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateDuration = () => {
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    updateDuration();
    const interval = setInterval(updateDuration, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  const boxes = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (

     

    <div className=" flex flex-col items-center justify-center p-10">
       
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
        <span className="text-black">The</span>{" "}
        <span className="text-pink-600">period</span>{" "}
        <span className="text-black">we’ve</span>{" "}
        <span className="text-pink-600">been</span>{" "}
        <span className="text-black">together</span>{" "}
        <span className="text-pink-600 animate-pulse">💖</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center justify-center transform transition duration-500 hover:scale-110 hover:rotate-1"
          >
            <span className="text-5xl font-extrabold text-pink-600 drop-shadow-lg">
              {box.value}
            </span>
            <span className="text-lg font-semibold text-gray-700 mt-3 tracking-wide">
              {box.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateCounter;
