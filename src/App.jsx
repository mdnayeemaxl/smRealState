import "./App.css";
import About from "./components/About";
import Available from "./components/Available";
import Contract from "./components/Contract";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="m-0 leading-inherit font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Available />
      <About />
      <Cta />
      <Faq />
      <TeamSection />
      <Contract />
      <Footer />
    </div>
  );
}

export default App;
