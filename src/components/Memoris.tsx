import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, EffectFade } from "swiper/modules";





export default function Memoris() {
  const memories = [
    {
      img: "/photo/18.jpeg",
      text: "اول مرا نقعد ناكل مع بعض كان يوم حلو وانشاء الله يتكرر تاني يا كتكوتي بجبكككك",
    },
    {
      img: "/photo/19.jpeg",
      text: "تجميعه بسيطه للحجات الجوا محفظتي وبجد بقا معايا شويه حاجات تخصك كتير اوي وبجد انا بحب كداااا",
    },
    {
      img: "/photo/20.jpeg",
      text: "الورقه الكتكوتي عملاها عشان تثبتني ماشيييي اصلا مش بتثبت بس بصراحه مليش غيرك وبتصالح بسرعه للاسف",
    },
    {
      img: "/photo/21.jpeg",
      text: "اول مفاجأه لي كتكوتي العمري ما هنسي رده فعلها اليوم دا ومبسوط ان الفي بالي ضبط والله وربنا يخليكي ليا كدا وافضل افاجئك",
    },
    {
      img: "/photo/22.jpeg",
      text: "رحومتي وهي بتشارك المفاجأه وتقولي من افضل شخص",
    },
    {
      img: "/photo/24.jpeg",
      text: "بجد يعني بنبسط لما تشاركي حاجتي اسناب كدا بحبك اقسم بالله",
    },
    {
      img: "/photo/25.jpeg",
      text: "اول هديه ليا من رحومتي وبجد بعشق محفظتي ولحد دلوقت متعلق بي البرفان ربنا يخليكي يا كتكوتي",
    },
  ];

  return (
   <div className="min-h-screen from-pink-100 via-pink-200 to-pink-300 py-8 px-4">
  <h2 className="text-center text-3xl font-extrabold text-pink-700 mb-6 drop-shadow-lg">
    💖 Memories 💖
  </h2>

  <Swiper
    modules={[Autoplay, EffectFade]}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // ✅ يتوقف عند الـ hover
    }}
    loop={true}
    effect="fade"
    spaceBetween={30}
    slidesPerView={1}
    className="max-w-md mx-auto h-full rounded-3xl shadow-2xl"
  >
    {memories.map((memory, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500">
          <img
            src={memory.img}
            alt="Memory"
            className="w-full h-90 object-cover"
          />
          <div className="p-6 text-center h-40 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-pink-600 mb-3">
              💖 My Home 💖
            </h3>
            <p className="text-gray-700 italic">{memory.text}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    );
}