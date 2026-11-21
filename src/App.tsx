import { MotionConfig } from "framer-motion";
import { useActiveSection } from "./hooks/useActiveSection";
import { navLinks } from "./data/personal";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionIds = [...navLinks.map((l) => l.id), "languages"];

export default function App() {
  const current = useActiveSection(sectionIds);
  // The Languages section has no menu entry: keep "Certifications" highlighted while viewing it.
  const active = current === "languages" ? "certifications" : current;

  return (
    // reducedMotion="user": Framer Motion animations are skipped for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <a href="#about" className="sr-only z-[60] rounded-lg bg-white px-4 py-2 text-navy-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Background />
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
