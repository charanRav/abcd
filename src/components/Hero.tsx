import { Button } from "@/components/ui/button";
import { Instagram, Phone } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import abcdLogo from "@/assets/abcd-logo.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = ["Salon", "Spa", "Academy"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20book%20an%20appointment%20at%20ABCD%20Salon",
      "_blank"
    );
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ABCD Luxury Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Gold Shimmer Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--gold))] rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <img
          src={abcdLogo}
          alt="ABCD - Ani's Beauty Care Design"
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 drop-shadow-2xl"
        />

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
          ABCD
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-2 font-light">
          Ani's Beauty Care Design
        </p>

        <div className="flex items-center justify-center gap-3 mb-8 h-8">
          <span className="text-[hsl(var(--gold))] text-xl md:text-2xl font-semibold transition-all duration-500">
            {rotatingTexts[currentText]}
          </span>
          <span className="text-foreground/60 text-xl">•</span>
          <span className="text-foreground/80 text-lg md:text-xl">
            Redefining Beauty & Care in Nellore
          </span>
        </div>

        <p className="text-base md:text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience luxury beauty services and professional training at Nellore's premier salon and institute
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="gold"
            size="xl"
            onClick={handleBookNow}
            className="w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Book Appointment
          </Button>
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToGallery}
            className="w-full sm:w-auto"
          >
            View Our Work
          </Button>
        </div>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/abcdnelloresalon/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground/80 hover:text-[hsl(var(--gold))] transition-smooth text-sm"
        >
          <Instagram className="w-4 h-4" />
          Follow us on Instagram
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[hsl(var(--gold))] rounded-full p-1">
          <div className="w-1 h-3 bg-[hsl(var(--gold))] rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
