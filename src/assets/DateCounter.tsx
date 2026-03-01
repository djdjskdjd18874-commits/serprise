import React, { useEffect, useState } from "react";


const DateCounter: React.FC = () => {
  // Start date (example: August 11, 2024)
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
    <div className="p-8 text-center bg-gray-50  flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-6">
       <span className=" text-black">The</span>  <span className=" text-pink-600">period</span>  <span className=" text-black">we’ve</span>  <span className=" text-pink-600"> been</span>  <span className=" text-black">The</span>  <span className=" text-pink-600  animate-pulse">together</span>  
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105"
          >
            <span className="text-4xl font-extrabold text-gray-900">
              {box.value}
            </span>
            <span className="text-sm font-medium text-gray-600 mt-2">
              {box.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateCounter;
