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
        <section ><Hero /></section>
        <section ><About /></section>
        <section ><Education /></section>

        {/* Disable snap for these tall sections */}
        <section ><Skills /></section>
        <section  id="projects"><Projects /></section>
        <section ><Certifications /></section>
        <section ><Contact /></section>

      </div>
    </div>
  );
}


export default App;
