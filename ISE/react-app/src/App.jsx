import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import ThankYou from "./pages/ThankYou";
import AboutUs from "./pages/AboutUs";

function App(){
  return(
    <Router>
      <div>
        <Menubar />
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/thank-you" element={<ThankYou />}/>
          <Route path="/about-us" element={<AboutUs />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;