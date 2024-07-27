import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import dataArray from "./ProjectsData/ProjectArray";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';

function App() {
  const [toggleMode, setToggleMode] = useState(false);

  const bodyStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <div style={toggleMode ? bodyStyle : {}}>
        <Navbar toggleMode={toggleMode} setToggleMode={setToggleMode} />
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage toggleMode={toggleMode} />
              <About toggleMode={toggleMode} />
              <Skills />
              <Works toggleMode={toggleMode} data={dataArray} />
              <Contact toggleMode={toggleMode} />
              <Footer toggleMode={toggleMode} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works data={dataArray} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
