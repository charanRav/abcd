import { Button } from "@/components/ui/button";
import { Sparkles, Award, Users } from "lucide-react";

const About = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              Founded by Ani, <span className="text-[hsl(var(--gold))] font-semibold">ABCD</span> is Nellore's most trusted beauty destination for hair, makeup, and professional beauty training.
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              With modern styling techniques, certified experts, and premium care, we redefine self-confidence one transformation at a time. Our commitment to excellence has made us the go-to destination for those seeking luxury beauty services and comprehensive training programs.
            </p>
            <Button
              variant="gold"
              size="lg"
              onClick={scrollToServices}
              className="mt-6"
            >
              Explore Our Services
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Premium Services",
                description: "Luxury treatments with the finest products and techniques"
              },
              {
                icon: Award,
                title: "Certified Experts",
                description: "Highly trained professionals with years of experience"
              },
              {
                icon: Users,
                title: "Professional Training",
                description: "Comprehensive beauty education and certification programs"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-[hsl(var(--gold))]/20 rounded-2xl p-6 hover-lift"
              >
                <item.icon className="w-10 h-10 text-[hsl(var(--gold))] mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
