import { Home, Scissors, GraduationCap, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "services", icon: Scissors, label: "Services" },
    { id: "gallery", icon: GraduationCap, label: "Gallery" },
    { id: "contact", icon: Phone, label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-[hsl(var(--gold))]/20">
      <div className="flex justify-around items-center px-4 py-3">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? "scale-110" : ""
              }`}
            >
              <item.icon
                className={`w-6 h-6 transition-colors ${
                  isActive ? "text-[hsl(var(--gold))]" : "text-foreground/60"
                }`}
              />
              <span
                className={`text-xs transition-colors ${
                  isActive ? "text-[hsl(var(--gold))] font-semibold" : "text-foreground/60"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
