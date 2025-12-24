import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Droplets, Shield, Sparkles, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroPoolImage from "@/assets/hero-pool.jpg";
import poolWhiteImage from "@/assets/pool-white.jpg";
import poolBlueImage from "@/assets/pool-blue.jpg";

const features = [
  {
    icon: Droplets,
    title: "Beautiful Water Colours",
    description: "Choose from seven stunning colour families to create your perfect pool aesthetic.",
  },
  {
    icon: Shield,
    title: "15+ Year Durability",
    description: "ECO Finish bonds permanently to your pool surface, resisting stains and chemical damage.",
  },
  {
    icon: Sparkles,
    title: "Smooth Finish",
    description: "A comfortable, non-abrasive surface that's gentle on skin and easy to maintain.",
  },
  {
    icon: Sun,
    title: "UV Stable",
    description: "Specially formulated to resist fading under the intense Canary Islands sunshine.",
  },
];

const benefits = [
  "No more replastering every 5-7 years",
  "Resistant to chemical imbalances",
  "Reduces algae growth naturally",
  "Eco-friendly application process",
];

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>ECO Finish Pool Coatings | Canary Detect - Canary Islands Specialists</title>
        <meta 
          name="description" 
          content="Transform your pool with ECO Finish coatings. Canary Detect are specialist installers across all Canary Islands. Beautiful colours, 15+ year durability." 
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
              Transform Your Pool with Lasting Beauty
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              ECO Finish creates stunning, durable pool surfaces that last 15+ years. 
              Choose from seven beautiful water colour families and enjoy a finish 
              that's smooth, stain-resistant, and built for island living.
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
                  Explore Water Colours
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

      {/* Image Showcase - Light */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-soft aspect-[4/3]">
              <img 
                src={poolBlueImage}
                alt="Crystal blue ECO Finish pool in Tenerife"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/60 to-transparent p-6">
                <p className="text-white font-medium">Private Villa – Tenerife</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-soft aspect-[4/3]">
              <img 
                src={poolWhiteImage}
                alt="Pearl white ECO Finish pool in Gran Canaria"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/60 to-transparent p-6">
                <p className="text-white font-medium">Resort Pool – Gran Canaria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Light, more spacing */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ECO Finish?
            </h2>
            <p className="text-muted-foreground">
              A revolutionary pool finish that combines beauty with exceptional durability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group p-8 rounded-xl bg-card border border-border/40 shadow-card hover:shadow-soft transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Subtle light grey */}
      <section className="py-20 md:py-28 bg-surface-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for the Canary Islands Climate
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our ECO Finish installations are specifically optimized for the unique 
                conditions of island pools. From intense UV exposure to salt air, 
                we ensure your finish performs beautifully year after year.
              </p>
              <ul className="space-y-5 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg">
                <Link to="/why-eco-finish">
                  Learn More About ECO Finish
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={poolWhiteImage}
                alt="Beautiful white finish pool with crystal clear water"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-medium"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark accent */}
      <section className="py-24 md:py-32">
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
