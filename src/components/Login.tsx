import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [password, setPassword] = useState<string>(""); // نوع القيمة string
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // كلمة المرور الثابتة
    const fixedPassword: string = "1182024";

    if (password === fixedPassword) {
      // التوجيه إلى صفحة أخرى
      navigate("/Home");
    } else {
      alert("كلمة المرور غير صحيحة 💔");
    }
  };

  return (
    
   <>
   

   <div className="flex  justify-center   bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
    

    <h1 className="text-4xl font-bold text-pink-600 p-2">✨ Welcome My Rahomty 💖 ✨</h1>
   </div>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
      
      <div className="bg-white bg-opacity-80 shadow-xl rounded-2xl p-8 w-96">



        <h2 className="text-xl font-bold text-pink-600 text-center mb-6">
          💖 Please Enter Your Password to Access the Surprise! 💖
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-pink-700 mb-2">كلمة المرور</label>
            <input
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
          >
            💖 تسجيل الدخول 💖
          </button>
        </form>
      </div>
    </div>
   </>
  );
};

export default Login;
