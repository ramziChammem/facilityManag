import Navbar from "./components/navbar/Navbar";
import SignInUp from "./components/signInUp/SignInUp";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Maintenance from "./components/maintenance/Maintenance";
import Climat from "./components/climat/Climat";
import Parking from "./components/parking/Parking";
import AboutUs from "./components/aboutUs/AboutUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signInUp" element={<SignInUp />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/climat" element={<Climat />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
