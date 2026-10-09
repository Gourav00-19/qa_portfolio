import About from "./components/About.jsx";
import Approach from "./components/Approach.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Approach />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
