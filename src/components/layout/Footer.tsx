import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/canary-detect-logo.png";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Why ECO Finish", href: "/why-eco-finish" },
    { name: "Water Colours", href: "/colour-selector" },
    { name: "Gallery", href: "/gallery" },
    { name: "How It's Applied", href: "/process" },
    { name: "Contact", href: "/contact" },
  ],
  islands: [
    "Tenerife",
    "Gran Canaria",
    "Lanzarote",
    "Fuerteventura",
    "La Palma",
    "La Gomera",
    "El Hierro",
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="Canary Detect - Locate, Detect, Repair" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Premium ECO Finish pool coating installation across all Canary Islands. 
              Transform your pool with lasting beauty and durability.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Sites */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Our Sites
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="https://canary-detect.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors">
                  canary-detect.com
                </a>
              </li>
              <li>
                <a href="https://theleakyfinders.es" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors">
                  theleakyfinders.es
                </a>
              </li>
              <li>
                <a href="https://leak-detective.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors">
                  leak-detective.com
                </a>
              </li>
              <li>
                <a href="https://leakguardlanzarote.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors">
                  leakguardlanzarote.com
                </a>
              </li>
              <li>
                <a href="https://lanzarotewater.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors">
                  lanzarotewater.com
                </a>
              </li>
              <li>
                <a href="https://canary-detect-coatings.es" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors">
                  canary-detect-coatings.es
                </a>
              </li>
              <li>
                <a href="https://finchyfairytales.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors">
                  finchyfairytales.com
                </a>
              </li>
              <li>
                <a href="https://elatico.org" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors">
                  elatico.org
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">
                  Canary Islands, Spain
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+34711051071"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  +34 711 05 10 71
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@canary-detect.com"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  info@canary-detect.com
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} Canary Detect. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-white/40">
                <Link to="/privacy-policy" className="hover:text-white/70 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white/70 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <p className="text-xs text-white/40 max-w-xl">
              Water colour appearance varies based on pool depth, lighting conditions, 
              and surrounding environment. Images shown are representations only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}