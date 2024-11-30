import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skill';

function App() {
  return (
    <div className="bg-white text-off-black">
      <Navbar />
      <Hero />
      <Skills/>
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;