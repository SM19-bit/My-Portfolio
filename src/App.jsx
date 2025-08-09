import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact"; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="snap-container">
        <section className="snap-child"><Hero /></section>
        <section className="snap-child"><About /></section>
        <section className="snap-child"><Education /></section>

        {/* Disable snap for these tall sections */}
        <section className="snap-child"><Skills /></section>
        <section className="snap-child" id="projects"><Projects /></section>
        <section className="snap-child"><Certifications /></section>
        <section className="snap-child"><Contact /></section>

      </div>
    </div>
  );
}


export default App;
