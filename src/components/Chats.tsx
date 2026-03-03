import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

export default function MemoriesSlider() {
  const photos = [
    "26.jpeg","27.jpeg","28.jpeg","29.jpeg","30.jpeg","31.jpeg","32.jpeg",
    "33.jpeg","34.jpeg","35.jpeg","36.jpeg","37.jpeg","38.jpeg","39.jpeg",
    "40.jpeg","41.jpeg"
  ];

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
        💖 the  Best chats 💖
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // ✅ يتوقف عند الـ hover
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="max-w-2xl rounded-3xl shadow-2xl"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div
              className=" rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 cursor-pointer"
              onClick={() => setSelectedPhoto(photo)} // ✅ عند الضغط يفتح الصورة كاملة
            >
              <img
                src={`/photo/${photo}`}
                alt={`Memory ${index + 1}`}
                className="w-full h-96 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Modal لعرض الصورة كاملة */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)} // إغلاق عند الضغط خارج الصورة
        >
          <img
            src={`/photo/${selectedPhoto}`}
            alt="Full Memory"
            className="max-h-[90%] max-w-[90%] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}


