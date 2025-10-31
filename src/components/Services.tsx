import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Droplets, Heart, GraduationCap } from "lucide-react";
import hairImage from "@/assets/service-hair.jpg";
import makeupImage from "@/assets/service-makeup.jpg";
import spaImage from "@/assets/service-spa.jpg";

const Services = () => {
  const handleBookService = (service: string) => {
    window.open(
      `https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20book%20${service}%20at%20ABCD%20Salon`,
      "_blank"
    );
  };

  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Precision haircuts, coloring & treatments with professional finesse",
      image: hairImage,
      features: ["Haircuts & Styling", "Color & Highlights", "Treatments & Spa"]
    },
    {
      icon: Sparkles,
      title: "Makeup",
      description: "Flawless makeup artistry for every occasion and celebration",
      image: makeupImage,
      features: ["Bridal Makeup", "Party Makeup", "Professional Looks"]
    },
    {
      icon: Droplets,
      title: "Skin Care",
      description: "Rejuvenating facials and advanced skin treatments",
      image: null,
      features: ["Facials & Cleanup", "Anti-Aging", "Skin Treatments"]
    },
    {
      icon: Heart,
      title: "Spa Services",
      description: "Luxurious spa experiences for complete relaxation",
      image: spaImage,
      features: ["Body Massage", "Manicure & Pedicure", "Waxing Services"]
    },
    {
      icon: GraduationCap,
      title: "Beauty Institute",
      description: "Professional certification courses in beauty and styling",
      image: null,
      features: ["Hair Styling Course", "Makeup Artistry", "Complete Beauty"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-4" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of luxury beauty services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-dark border border-[hsl(var(--gold))]/20 rounded-3xl overflow-hidden hover-lift"
            >
              {/* Image Background */}
              {service.image && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                <div className="w-16 h-16 bg-[hsl(var(--gold))]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--gold))]/20 transition-colors">
                  <service.icon className="w-8 h-8 text-[hsl(var(--gold))]" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => handleBookService(service.title)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
