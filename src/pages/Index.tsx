import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Institute from "@/components/Institute";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Institute />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Index;
