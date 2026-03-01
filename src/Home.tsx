import React, { useRef } from "react";
import DateCounter from "./assets/DateCounter";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    audioRef.current?.play();
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
  };

  return (
   <>

   
<DateCounter />




   <div className=" bg-pink-200">
    <div className="flex  justify-center  ">
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
      src="/song/WhatsApp Audio 2026-02-23 at 1.36.19 PM.mpeg"
      loop
    />
  </div>
</div>
<br />
<br />
<div className="">


   <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/2.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     اول خروجه مع بعض يا رحومتي بجد بجد كنت متوتر اليوم دا جامد والهو اليوم البحلم بي والهو عايز ابقي معاكي فجاة الاقي رحومتي قدامي رايح اقابلها متخيله الانسانه المعجب بيها بقت قدامي بجد يعني كنت بعشقك ولما عرفتك اكتر عشقتك اكتر واكتر لحد ما ادمنتك وبقيتي جزء من يومي بجد ربنا يخليكي ليا يا كتكوتي عشان انا بعشقك وبموت فيكي
    </p>
  </div>
</div>
<br/>


<div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/11.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     اول صوره في مرايا ها كنا نفسنا نتصور في مرايا لحد ما اتحقق الحلم يوم عيد ميلادك 
     عمتا يعني الخروجه دي اول عيد ميلاد ليكي واحنا مع بعض بصراحه كان يوم توتر عشان مش متعود اجيب هدايا لحد وطبعا عمال اخطط بقا وازاي ابسطك والحمدالله كان يوم مميز وانبسطي في ما علينا يعني ان اختك اغمي عليها اليوم دا ولا حصل حاجه وربنا يخليلك اختك يا كتكوتي بحبك اوي والله
    </p>
  </div>
  <br/>
</div>

<div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/13.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     اول عيد ميلاد ليا وانتي معايا يا كتكوتي بجد كان عيد ميلاد اسبشيال كدا كان احساس تحفهههه وجديد كدا ان شخصي المفضل معايا في عيد ميلادي وان بنت عموما بتحتفل في عيد ميلادي وكدا وكان احاسيس متلغبطه وتحفه طدا يلا ربنا يخليكي ليا يا كتكوتي بحبك يا رحومتييي
    </p>
  </div>
</div>
<br/>


    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/1.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     الصوره دي بعد الحوار وبعد ما كنا هنسيب بعض بس احنا بنحب بعض ومش بنقدر نستغني عن بعض يا كتكوتي وربنا يخليكي ليا كدا وتفضلي جمبي دايما يا حياتي
    </p>
  </div>
</div>
<br/>

 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/3.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     صوره رايقه بي مسكه ايد بحب امسكها والله ايد رحومتي العسل دييي بحبكككك
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/4.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     عيون رحومتي المدوباني عيون شكلها تحفه عيون بعشقها عمري ما انسي اول مرا عيني جات في عنيكي بجد كان احساس ميتوصفش وكنت دايب بطريقه وكنت معجب بيكي وبجمالك وحلاوتك ولما عرفت شخصيتك حبيتك اكتر والله بحسك شبهي كدا يا بت 
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/5.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     تاني عيد ميلاد ليا وانتي جمبي دا بجد يعني اكتر حد كان جمبي والله ربنا يخليكي ليا يا كتكوتي انا بحبك اوي والله دايما جمبي دايما بتفرحيني دايما بتعملي اي حاجه تبسطني اقسم بالله بعشقككككك
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/6.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     خروجه السنه يارب تبقي دايما معايا وننزل نخرك بمناسبه السنتين والتلاته والعشرين سنه كمان ونفضل مع بعض لاخر العمر يا كتكوتي بحبك يا رحومتيييي
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/7.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     الصوره البتحبيها عشان باصصلك في عنيكي وفي جمال وشك بصراحه شكلك جميل اوي اوي وعنيكي حلوه اوي وبحس ان معايا ملكه جمال العالم ولي احس انا معايا احلي واجمل رحومتي واحلي بنوته واحلي حد في حياتي يا كتكوتي
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/8.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     بحب صور خيالنا عموما بحسها ليها فايبس حلوه بجد يعني بحب اعمل كل حاجه معاكي يا كتكوتي بحبكككك
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/9.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     الصوره الرايقه المش محتاج اقول فيها حاجه بجد صوره تحفه في اول عيد ميلاد ليا وانتي معايا في بجد صوره بعشقها وتحفههههه اويييييي بجد نفسي امسك ايدك كل يوم بعشقككككككك
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/10.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     الصوره دي بحبها اوي ودي المحطوطه في شاتنا بجد كل الصور معاكي تحفه وبعشقها وكلها حلوه عشان انتي فيها يا كتكوتي
    </p>
  </div>
</div>
<br/>
 
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/12.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     رحومتي الاسترونج الفكست جيم هي كمان اتنين عينين بيشجعو في بعض انشا الله ننزل جيم تاني سواء انا او انتي لازم ننزلللل لازم يلا رحومتي الكدا كدا حلوه منغير جيم بعشقك والله
    </p>
  </div>
</div>
<br/>
 
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/14.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     اول مرا نمسك ايد بعض يا كتكوتي بجد كان احساس تحفه والله العظيم بحب امسك ايدك والله بحبك اوي وبحب امسك ايدك يا بتتتتت 
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/15.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     تاني عيد ميلاد لكتكوتي وانا معاها وببسطها واشوف ضحكتها كدا العايش عشانها ربنا يخليكي ليا يا مراتي
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/16.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     رحومتي البتاخد تلفوني وتتصور بي من ورايا ودي قله ادب بس بصراحه صور تحفهههه وقمررر وللاسف براحتك تعملي الانتي عايزاه مراتي بقا ورحومتي نعمل اي بقا بحبها كتكوتي
    </p>
  </div>
</div>
<br/>
 <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/photo/17.jpeg"
    alt="Card image"
    className="w-full h-100 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600 mb-2">💖My Home 💖</h3>
    <p className="text-gray-700">
     الترنداااات البنعملها ولازم نعملها ايام خروجات الكورنيش البقانا سنه مش بنروح 
    </p>
  </div>

  
</div>
<br/>
<div className="p-6 bg-gray-50 min-h-screen">
  <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
    💖Memories💖
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {["18.jpeg","19.jpeg","20.jpeg","21.jpeg","22.jpeg","24.jpeg","25.jpeg"].map((photo, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
      >
        <img
          src={`/photo/${photo}`}
          alt={`Home ${index + 1}`}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-pink-600 mb-2">💖 My Home 💖</h3>
          <p className="text-gray-700">
          
  بحب كل الميمريز معاكي واللحظات الحلوه اللي عشناها مع بعض يا كتكوتي بحبك اوي وبحب كل لحظه معاكي
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    

    <div className="flex items-center justify-center min-h-screen bg-pink-200">
  <div className="romantic-frame">
   <p className="text-center max-w-xl text-lg font-medium leading-relaxed font-[Cairo]">
        بصي يا رحومتي انتي السبب اني اعرف اعمل موقع وادخل في مجال البرمجه فاكيد مش هعمل موقع عادي كدا هعمل موقع تحفه زيك كدا يا كتكوتي بحبك اوي وبحب اعمل حاجه حلوه ليكي يا رحومتي ربنا يخليكي ليا يا كتكوتي بجد مليش غيرك يارب نفضل مع بعض يا كتكوتي وبطلي حوار نبعد عن بعض اقسم بالله مليش غيرك يلا بحبك يا بت الموقع بتاعك يارب يعجبك بس وبعد اذنك متزعلنيش وانا اسف لو زعلتك في اي حاجه قبل كدا او بعد كدا استحمليني ربنا يخليكي ليا دايما وتفضلي جمبي كدا ولزفالي ولزقلك بحبك بحبك بحبك اقسم بالله وبمناسبه انك السبب في حوار البرمجه انا بهديكي الموقع دا ودي حاجه بسيطه للبتعمليه معايا يارب تفضلي جمبي دايما وانشا الله تبقي مراتي يا كتكوتي بحبكككككككككك
      </p>
  </div>
</div>




</div>
  

 


    


</div>


   
   </>
  );
};

export default MusicPlayer;

