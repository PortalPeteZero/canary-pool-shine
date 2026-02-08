import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/canary-detect-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Why ECO Finish", href: "/why-eco-finish" },
  { name: "Water Colours", href: "/colour-selector" },
  { name: "Gallery", href: "/gallery" },
  { name: "How It's Applied", href: "/process" },
  { name: "Contact", href: "/contact" },
];

const usefulLinks = [
  { name: "Canary Detect", href: "https://canary-detect.com" },
  { name: "The Leaky Finders", href: "https://theleakyfinders.es" },
  { name: "Leak Detective", href: "https://leak-detective.com" },
  { name: "Leak Guard Lanzarote", href: "https://leakguardlanzarote.com" },
  { name: "Lanzarote Water", href: "https://lanzarotewater.com" },
  { name: "Canary Detect Coatings", href: "https://canary-detect-coatings.es" },
  { name: "Finchy Fairytales", href: "https://finchyfairytales.com" },
  { name: "El Atico", href: "https://elatico.org" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="Canary Detect" 
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Premium ECO Finish pool coating installation across all Canary Islands.
            </p>
            
            {/* Contact Details */}
            <div className="mt-6 space-y-2">
              <a
                href="tel:+34711051071"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                +34 711 05 10 71
              </a>
              <a
                href="mailto:info@canary-detect.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                info@canary-detect.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-primary" />
                Canary Islands, Spain
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links - Split into 2 columns on larger screens */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
              Useful Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/40">
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
        
        {/* Disclaimer */}
        <p className="mt-4 text-xs text-white/30 max-w-2xl">
          Water colour appearance varies based on pool depth, lighting conditions, and surrounding environment. Images shown are representations only.
        </p>
      </div>
    </footer>
  );
}
