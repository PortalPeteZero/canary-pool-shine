import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/canary-detect-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Why ECO Finish", href: "/why-eco-finish" },
  { name: "Colour Selection", href: "/colour-selector" },
  { name: "Gallery", href: "/gallery" },
  { name: "How It's Applied", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full bg-background border-b border-border transition-shadow duration-300",
      isScrolled && "shadow-medium"
    )}>
      {/* Top bar with contact info */}
      <div className="bg-navy-900 text-white py-2 hidden md:block">
        <div className="container flex items-center justify-end gap-6 text-sm">
          <a href="tel:+34646022695" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>+34 646 02 26 95</span>
          </a>
          <a href="mailto:info@canary-detect.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            <span>info@canary-detect.com</span>
          </a>
        </div>
      </div>

      <nav className="container flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Canary Detect - Locate, Detect, Repair" 
            className="h-10 lg:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors",
                "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:origin-left after:transition-transform after:duration-300",
                location.pathname === item.href
                  ? "text-primary after:scale-x-100"
                  : "text-foreground hover:text-primary after:scale-x-0 hover:after:scale-x-100"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button asChild size="default">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden rounded p-2 text-foreground hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-semibold uppercase tracking-wide transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a href="tel:+34646022695" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+34 646 02 26 95</span>
              </a>
              <Button asChild size="lg" className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}