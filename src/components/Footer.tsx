import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import abcdLogo from "@/assets/abcd-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-[hsl(var(--gold))]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img
              src={abcdLogo}
              alt="ABCD Logo"
              className="w-20 h-20 mb-4"
            />
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              ABCD Salon & Institute
            </h3>
            <p className="text-foreground/70 text-sm mb-4">
              Ani's Beauty Care Design - Redefining beauty and care in Nellore with luxury services and professional training.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/abcdnelloresalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center hover:bg-[hsl(var(--gold))]/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[hsl(var(--gold))]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center hover:bg-[hsl(var(--gold))]/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-[hsl(var(--gold))]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Services", "Gallery", "Institute", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-[hsl(var(--gold))] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone className="w-4 h-4 text-[hsl(var(--gold))]" />
                <a href="tel:+919966666719" className="hover:text-[hsl(var(--gold))] transition-colors">
                  +91 99666 66719
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="w-4 h-4 text-[hsl(var(--gold))]" />
                <span>info@abcdsalon.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[hsl(var(--gold))]/20 text-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} ABCD - Ani's Beauty Care Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
