import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import MenuSection from "./components/MenuSection";
import PromoSection from "./components/PromoSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[var(--brand-cream)] text-[var(--brand-brown)]">
      <Navbar />
      <Hero />
      <TrustBar />
      <MenuSection />
      <PromoSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;