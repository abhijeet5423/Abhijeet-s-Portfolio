import React from "react"
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";

import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"; 
import Work from "./Components/Work/Work";
import "./App.css"




const App = () => {
  return (
       <div className="main-wrapper">

  <div className="background-grid-effect"></div>

  <div className="content-section">
    <Navbar />
    <About />
    <Skills />
    <Experience />
    <Education />
       <Work />
    <Contact />
    <Footer />
  </div>

</div>

  )
}

export default App;

