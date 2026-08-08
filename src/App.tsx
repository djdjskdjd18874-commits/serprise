
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Home";
import DateCounter from "./assets/DateCounter";
import "./index.css";

import Photo from "./components/photo";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
       <Route path="/DateCounter" element={<DateCounter />} />
       <Route path="/photo" element={<Photo />} />

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
