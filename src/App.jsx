import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { Hero } from "./pages/Hero";
import { Navigation } from "./pages/Navigation";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";

export default function App() {
  return (
     <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
