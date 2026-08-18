import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import TechMarquee from "./Components/TechMarquee/TechMarquee";
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
      <div className="background-noise"></div>
      <div className="content-section">
        <Navbar />
        <About />
        <TechMarquee />
        <Work />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
