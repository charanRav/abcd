import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Best salon in Nellore! The staff is professional and the ambience is absolutely stunning. My bridal makeup was perfect!",
      service: "Bridal Makeup"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Finally found a salon that understands men's grooming. The haircut was exactly what I wanted. Highly recommend!",
      service: "Hair Styling"
    },
    {
      name: "Lakshmi Reddy",
      rating: 5,
      text: "The training institute is excellent! I learned so much in 6 months. The instructors are experienced and supportive.",
      service: "Beauty Course"
    },
    {
      name: "Meera Patel",
      rating: 5,
      text: "Love the spa services here! The massage was so relaxing and the facial left my skin glowing. Will definitely come back.",
      service: "Spa Services"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-4" />
          <p className="text-foreground/70 text-lg">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-[hsl(var(--gold))]/20 p-6 rounded-2xl hover-lift relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[hsl(var(--gold))]/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
                  />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-[hsl(var(--gold))]/20 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-[hsl(var(--gold))]">{testimonial.service}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
