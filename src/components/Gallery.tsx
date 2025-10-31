import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Reinitialize embeds when component mounts
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Video 1 */}
          <div className="flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink="https://www.instagram.com/reel/Czxz9NfO7kl/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14" 
              style={{ 
                background: '#FFF', 
                border: 0, 
                borderRadius: '3px', 
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: 0, 
                width: 'calc(100% - 2px)' 
              }}
            />
          </div>

          {/* Video 2 */}
          <div className="flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink="https://www.instagram.com/reel/CzRQf2-Sgut/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14" 
              style={{ 
                background: '#FFF', 
                border: 0, 
                borderRadius: '3px', 
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: 0, 
                width: 'calc(100% - 2px)' 
              }}
            />
          </div>

          {/* Video 3 */}
          <div className="flex justify-center">
            <blockquote 
              className="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink="https://www.instagram.com/reel/DEyxREdSzPI/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14" 
              style={{ 
                background: '#FFF', 
                border: 0, 
                borderRadius: '3px', 
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: 0, 
                width: 'calc(100% - 2px)' 
              }}
            />
          </div>
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
