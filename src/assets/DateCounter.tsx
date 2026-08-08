import React, { useState, useEffect } from "react";

const START_DATE = new Date("2024-08-11T00:00:00");

const DateCounter: React.FC = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const updateDuration = () => {
      const now = new Date();
      const diffMs = now.getTime() - START_DATE.getTime();

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      setTime({ days, hours, minutes, seconds });

      // الشرط الجديد: عند الوصول لـ 724 يوم و 19 ساعة و 50 دقيقة (ولمدة دقيقتين: الدقيقة 50 و 51)
      if (days === 730 && hours === 0 && (minutes === 0|| minutes === 2 )) {
        setShowCelebration(true);
      } else {
        setShowCelebration(false);
      }
    };

    updateDuration();
    const interval = setInterval(updateDuration, 1000);
    return () => clearInterval(interval);
  }, []);

  const boxes = [
    { label: "أيام", value: time.days },
    { label: "ساعات", value: time.hours },
    { label: "دقائق", value: time.minutes },
    { label: "ثواني", value: time.seconds },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-b from-rose-50/50 to-pink-100/40 backdrop-blur-sm border border-pink-200/60 shadow-xl max-w-xl mx-auto overflow-hidden">
      
      {/* رسالة الاحتفال تظهر لمدة دقيقتين فقط عند تحقق الشرط */}
      {showCelebration && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md p-6 text-center animate-fade-in">
          <div className="text-5xl mb-3 animate-bounce">🎉 🥳 💖</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-rose-600 mb-2">
            مبروك وصلنا لسنتين مع بعض!
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-pink-500 animate-pulse">
            بحبك يا رحومتي ❤️✨
          </p>
          <br />
          <br />
          <p className="text-xl sm:text-2xl font-bold text-pink-500">انزلي لي اخر الصفحه</p>
        </div>
      )}

      {/* عنوان العداد الرئيسي */}
      <h3 className="text-xl md:text-2xl font-bold text-rose-600 mb-6 flex items-center gap-2 drop-shadow-sm">
        <span>معاً منذ</span>
        <span className="animate-pulse text-red-500">❤️</span>
      </h3>

      {/* كروت العداد */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-20 h-24 sm:w-24 sm:h-28 bg-white/80 rounded-2xl shadow-md border border-rose-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-pink-300"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              {String(box.value).padStart(2, "0")}
            </span>
            <span className="text-xs sm:text-sm font-medium text-rose-400 mt-1">
              {box.label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-pink-500/80 font-medium italic">
        وكل لحظة بتعدي بحبك فيها أكتر ✨
      </p>
    </div>
  );
};

export default DateCounter;