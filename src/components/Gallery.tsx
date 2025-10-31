import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  // Placeholder for Instagram gallery - in production, this would fetch from Instagram API
  const instagramPlaceholders = Array(8).fill(null);

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-4" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            See the transformations that speak for themselves
          </p>
        </div>

        {/* Instagram Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {instagramPlaceholders.map((_, index) => (
            <a
              key={index}
              href="https://www.instagram.com/abcdnelloresalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden hover-lift bg-card/50 border border-[hsl(var(--gold))]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-[hsl(var(--gold))]" />
              </div>
              
              {/* Placeholder shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 animate-pulse" />
              
              <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                <Instagram className="w-8 h-8" />
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <Button
            variant="gold"
            size="xl"
            onClick={() => window.open("https://www.instagram.com/abcdnelloresalon/", "_blank")}
            className="inline-flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            View More on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
