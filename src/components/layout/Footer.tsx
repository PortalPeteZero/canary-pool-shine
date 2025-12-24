import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

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
    <footer className="bg-cyan-900 text-cyan-100">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-accent-foreground">CD</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-cyan-50">Canary Detect</span>
                <span className="text-xs text-cyan-300">ECO Finish Specialists</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-cyan-300 leading-relaxed">
              Premium ECO Finish pool coating installation across all Canary Islands. 
              Transform your pool with lasting beauty and durability.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-cyan-300 hover:text-cyan-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-50">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.islands.map((island) => (
                <li key={island} className="text-sm text-cyan-300">
                  {island}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-50">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-cyan-300">
                  Canary Islands, Spain
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+34600000000"
                  className="text-sm text-cyan-300 hover:text-cyan-50 transition-colors"
                >
                  +34 600 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@canarydetect.com"
                  className="text-sm text-cyan-300 hover:text-cyan-50 transition-colors"
                >
                  info@canarydetect.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cyan-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-cyan-400">
              © {new Date().getFullYear()} Canary Detect. All rights reserved.
            </p>
            <p className="text-xs text-cyan-500 max-w-xl">
              Water colour appearance varies based on pool depth, lighting conditions, 
              and surrounding environment. Images shown are representations only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
