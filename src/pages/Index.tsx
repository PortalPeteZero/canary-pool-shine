import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroPoolImage from "@/assets/hero-pool.jpg";
import galleryGreySteps from "@/assets/gallery-grey-steps.jpg";
import galleryBarbudaPool from "@/assets/gallery-barbuda-pool.jpg";
import gallerySandyBeach from "@/assets/gallery-sandy-beach.jpg";

const comparisons = [
  {
    title: "Break the Repainting Cycle",
    description: "Gel coat and painted fibreglass surfaces often need renewal every 1–2 years. ECO Finish is designed to last 10+ years, ending the constant resurfacing cycle.",
  },
  {
    title: "No More Pool Draining",
    description: "Traditional resurfacing means draining and refilling your pool — costly in the Canary Islands where water prices are high. ECO Finish minimises this disruption.",
  },
  {
    title: "Less Downtime for Rentals",
    description: "If your villa is a holiday rental, regular resurfacing means lost bookings. ECO Finish keeps your pool in service longer with fewer interruptions.",
  },
  {
    title: "Built for Island Conditions",
    description: "Intense sun, salt air, and year-round use take their toll on gel coats. ECO Finish is formulated to withstand Canary Islands conditions without fading or deteriorating.",
  },
];

const installations = [
  {
    image: galleryGreySteps,
    location: "Private Villa – Tenerife",
    finish: "French Grey",
  },
  {
    image: galleryBarbudaPool,
    location: "Holiday Home – Lanzarote",
    finish: "Barbuda",
  },
  {
    image: gallerySandyBeach,
    location: "Oceanview Property – Gran Canaria",
    finish: "Sandy Beach",
  },
];

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>ECO Finish Pool Coatings | Canary Detect - Canary Islands Specialists</title>
        <meta 
          name="description" 
          content="Transform your pool with ECO Finish coatings. Canary Detect are specialist installers across all Canary Islands. Beautiful colours, 10+ year durability." 
        />
      </Helmet>

      {/* Hero Section - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroPoolImage} 
            alt="Luxury pool in Canary Islands with crystal clear turquoise water"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-transparent" />
        </div>
        <div className="container relative py-28 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              ECO Finish Specialists • Canary Islands
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Stop Repainting Your Pool Every Year
            </h1>
            <p className="text-xl text-white/80 mb-4 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Tired of re-gel-coating or repainting your fibreglass pool? ECO Finish offers a 
              longer-lasting alternative — designed to perform for 10+ years.
            </p>
            <p className="text-base text-white/60 mb-10 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              Less draining. Less downtime. Less wasted water. Ideal for Canary Islands pools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="xl">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/colour-selector">
                  Explore Colour Range
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
            <path 
              d="M0 96V32C240 64 480 80 720 64C960 48 1200 32 1440 48V96H0Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Why ECO Finish Section - Light, comparison-led */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Why Pool Owners Are Switching to ECO Finish
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fibreglass pools with gel coat or painted surfaces often need resurfacing every 1–2 years. 
              ECO Finish breaks that cycle with a coating designed to last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {comparisons.map((item, index) => (
              <div 
                key={item.title}
                className="flex gap-5 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/12 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button asChild variant="outline" size="lg">
              <Link to="/why-eco-finish">
                Learn More About ECO Finish
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Installation Showcase - Light grey */}
      <section className="py-20 md:py-28 bg-surface-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Real Installations Across the Islands
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every pool is different. Here's a glimpse of our recent ECO Finish work 
              for private villas, resorts, and holiday homes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {installations.map((item, index) => (
              <div 
                key={item.location}
                className="group relative rounded-xl overflow-hidden shadow-soft animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="aspect-[4/3]">
                  <img 
                    src={item.image}
                    alt={`${item.finish} ECO Finish pool - ${item.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 via-navy-950/40 to-transparent p-6">
                  <p className="text-white font-medium">{item.location}</p>
                  <p className="text-white/70 text-sm">{item.finish}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Built for Canary Islands - Light */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Canary Islands Conditions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Island pools face unique challenges: intense year-round sun, salt-laden air, 
                and constant use. ECO Finish is specifically formulated to thrive in these conditions.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">UV-stable pigments that won't fade or discolour</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Resistant to salt air corrosion and chemical damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Reduces algae growth naturally — less maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Eco-friendly application with minimal environmental impact</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/process">
                  See How It's Applied
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img 
                src={galleryBarbudaPool}
                alt="Beautiful ECO Finish pool with crystal clear water"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-medium"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark accent card */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="rounded-xl bg-navy-900 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Ready to Transform Your Pool?
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Get a free, no-obligation quote for your ECO Finish installation. 
                We serve all seven Canary Islands.
              </p>
              <Button asChild size="xl">
                <Link to="/contact">
                  Request Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
