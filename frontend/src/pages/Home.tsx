import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import Method from "../components/Method";
import Results from "../components/Results";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Method />
        <Results />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
