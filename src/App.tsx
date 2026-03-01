
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Home";
import DateCounter from "./assets/DateCounter";
import "./index.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
       <Route path="/DateCounter" element={<DateCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
