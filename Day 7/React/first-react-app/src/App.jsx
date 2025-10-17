import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Navbar from "./components/Navbar";
import  Welcome from "./pages/Welcome";
import  ThankYou from "./pages/ThankYou";
import  AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;