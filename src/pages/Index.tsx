import CustomCursor from "@/components/portfolio/CustomCursor";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import ProductWork from "@/components/portfolio/ProductWork";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Footer from "@/components/portfolio/Footer";
import ScrollReveal from "@/components/portfolio/ScrollReveal";

const SectionDivider = () => <div className="section-divider max-w-7xl mx-auto" />;

const Index = () => (
  <>
    <CustomCursor />
    <div className="noise-overlay" />
    <Navbar />
    <ScrollReveal />
    <Hero />
    <SectionDivider />
    <About />
    <SectionDivider />
    <Experience />
    <SectionDivider />
    <ProductWork />
    <SectionDivider />
    <Projects />
    <SectionDivider />
    <Skills />
    <SectionDivider />
    <Education />
    <SectionDivider />
    <Certifications />
    <SectionDivider />
    <Footer />
  </>
);

export default Index;
