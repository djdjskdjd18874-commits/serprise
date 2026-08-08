export default function Photo() {
  return (
    <div className="bg-gradient-to-r from-pink-200 via-rose-300 to-pink-400 flex flex-col items-center py-10">
      {/* عنوان أول */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8 drop-shadow-lg text-center">
        💖 Alexandria Outing Memories 💖
      </h1>

      {/* صور أول مجموعة */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-full px-4">
        {[
          "alex1.jpeg","alex2.jpeg","alex3.jpeg","alex4.jpeg","alex5.jpeg",
          "alex6.jpeg","alex7.jpeg","alex8.jpeg","alex9.jpeg"
        ].map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={`/photo/${img}`}
              alt={`Alexandria memory ${index + 1}`}
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* عنوان ثاني */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-8 drop-shadow-lg text-center">
        💖 Memories of our first year-end outing 💖
      </h1>

      {/* صور ثاني مجموعة */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-full px-4">
        {["s1.jpeg","s2.jpeg","s3.jpeg","s4.jpeg","s5.jpeg","s6.jpeg","s7.jpeg","s8.jpeg"].map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={`/photo/${img}`}
              alt={`Year-end memory ${index + 1}`}
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* البرواز الرومانسي */}
      <div className="flex justify-center items-center mt-16 px-4">
        <div className="w-full sm:w-[500px] border-4 border-rose-400 rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-rose-50 to-pink-100">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-semibold text-center">
           دي حاجه بسيطه يا كتكوتي 
بصي انا مش عارف اقولك اي بجد من اول يوم شوفتك في وانا دايب في جمالك 
بحبك اوي سنتين مع بعض ولسه بعشقك لسه بضايق لو بتختفي لسه زي ما انا حب البدايات موجود 
طبعا أنا مجمع هنا خروجه اسكندريه وخروجه السنه 
كل حاجه فيهم ڤايبس مختلفه مثلا يوم اسكندريه عدينا بي مواقف وخوفت عليكي وقلقي عليكي وحبي ليكي غير انك كنتي مطمنه ونايمه علي كتفي. ودا كفايا والله طبعا مخدناش صور كتير كان بسبب التوتر بس فعلا في خروجه تانيه وهنعوض كل دا ومش مستني ردك في صور هتتضاف تاني بتاعت تاني خروجه في اسكندريه وتعمل ترندات وحجات كدا 
عندك بردوا ڤايبس خروجه لما كملنا اول سنه مع بعض لما كان أول يوم برمجه ليا كمان فاكره قعدت معاكي وبعدين سافرت وقعدت في اسكندريه لوحدي استنيت البرمجه وانتي كنتي مسافره لي مطروح 
انا بحبك يا رحمه والله بحب افتكر كل الڤايبس معاكي والله ربنا يخليكي ليا يا كتكوتي 
يلا يا ستي نفس اليوم دا كنت رايح اتعلم برمجه دلوقت بعملك موقع عشانك يكوتي موتي وتستهلي دا عشان انتي السبب يكوتي موتي 
ومن خلال الموقع بطلب منك أننا هنخرج يوم صد رد اسكندريه في الشتاء اتفقنا يكوتي
          </p>
        </div>
      </div>
    </div>
  );
}

