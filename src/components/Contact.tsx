import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'd like to book an appointment at ABCD Salon.%0AName: ${formData.name}%0AService: ${formData.service}%0APreferred Date: ${formData.date}%0APhone: ${formData.phone}`;
    window.open(`https://wa.me/919966666719?text=${message}`, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with us shortly!",
    });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ready for a New Look?
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-4" />
          <p className="text-foreground/70 text-lg">
            Book your appointment today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <Card className="bg-gradient-dark border-[hsl(var(--gold))]/20 p-8 rounded-3xl">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Book Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-foreground/70 mb-2 block">Your Name</label>
                <Input
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-[hsl(var(--gold))]/20 text-foreground"
                />
              </div>
              
              <div>
                <label className="text-sm text-foreground/70 mb-2 block">Service</label>
                <Input
                  required
                  placeholder="e.g., Hair Styling, Makeup"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="bg-background/50 border-[hsl(var(--gold))]/20 text-foreground"
                />
              </div>
              
              <div>
                <label className="text-sm text-foreground/70 mb-2 block">Preferred Date</label>
                <Input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-background/50 border-[hsl(var(--gold))]/20 text-foreground"
                />
              </div>
              
              <div>
                <label className="text-sm text-foreground/70 mb-2 block">WhatsApp Number</label>
                <Input
                  type="tel"
                  required
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background/50 border-[hsl(var(--gold))]/20 text-foreground"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                Book via WhatsApp
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-dark border-[hsl(var(--gold))]/20 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-foreground/70 text-sm">
                    ABCD Salon & Institute<br />
                    Nellore, Andhra Pradesh
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-dark border-[hsl(var(--gold))]/20 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <a
                    href="tel:+919966666719"
                    className="text-[hsl(var(--gold))] hover:underline"
                  >
                    +91 99666 66719
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-dark border-[hsl(var(--gold))]/20 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Opening Hours</h4>
                  <p className="text-foreground/70 text-sm">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/abcdnelloresalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-dark border border-[hsl(var(--gold))]/20 rounded-2xl p-4 flex items-center justify-center gap-2 hover-lift"
              >
                <Instagram className="w-5 h-5 text-[hsl(var(--gold))]" />
                <span className="text-sm text-foreground">Instagram</span>
              </a>
              <a
                href="#"
                className="flex-1 bg-gradient-dark border border-[hsl(var(--gold))]/20 rounded-2xl p-4 flex items-center justify-center gap-2 hover-lift"
              >
                <Facebook className="w-5 h-5 text-[hsl(var(--gold))]" />
                <span className="text-sm text-foreground">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62072.99209711686!2d79.96213!3d14.44986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8e8c8d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ABCD Salon Location"
            className="grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
