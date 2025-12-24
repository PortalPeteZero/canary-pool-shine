import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, Sun, Droplets, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

// Gallery images for visual sections
import galleryGreySteps from "@/assets/gallery-grey-steps.jpg";
import galleryBarbudaPool from "@/assets/gallery-barbuda-pool.jpg";
import gallerySandyBeach from "@/assets/gallery-sandy-beach.jpg";

// Installation images for visual density
import blueLagoon1 from "@/assets/installations/blue-lagoon/blue-lagoon-1.jpg";
import mediterraneanBlue1 from "@/assets/installations/mediterranean-blue/mediterranean-blue-1.jpg";
import santorini1 from "@/assets/installations/santorini/santorini-1.jpg";
import konaCoast1 from "@/assets/installations/kona-coast/kona-coast-1.jpg";
import frenchGrey1 from "@/assets/installations/french-grey/french-grey-1.jpg";
import pacificBlue1 from "@/assets/installations/pacific-blue/pacific-blue-1.jpg";

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

const benefits = [
  { icon: Sun, text: "UV-stable pigments that won't fade" },
  { icon: Shield, text: "Resistant to salt air corrosion" },
  { icon: Droplets, text: "Reduces algae growth naturally" },
  { icon: Leaf, text: "Eco-friendly application" },
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

      {/* Hero Section - Video Background */}
      <section className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            poster={blueLagoon1}
          >
            <source src="/videos/apply-wall.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-navy-950/50" />
        </div>
        
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              ECO Finish Specialists • Canary Islands
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Stop Repainting Your Pool Every Year
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-3 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Tired of re-gel-coating or repainting your fibreglass pool? ECO Finish offers a 
              longer-lasting alternative — designed to perform for 10+ years.
            </p>
            <p className="text-sm text-white/60 mb-6 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              Less draining. Less downtime. Less wasted water. Ideal for Canary Islands pools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link to="/colour-selector">
                  Explore Colour Range
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why ECO Finish - Compact Image + Text Layout */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-3">
              <img 
                src={blueLagoon1} 
                alt="Blue Lagoon pool finish" 
                className="w-full aspect-[4/3] object-cover rounded-lg"
                loading="lazy"
              />
              <img 
                src={mediterraneanBlue1} 
                alt="Mediterranean Blue pool finish" 
                className="w-full aspect-[4/3] object-cover rounded-lg"
                loading="lazy"
              />
              <img 
                src={santorini1} 
                alt="Santorini pool finish" 
                className="w-full aspect-[4/3] object-cover rounded-lg"
                loading="lazy"
              />
              <img 
                src={konaCoast1} 
                alt="Kona Coast pool finish" 
                className="w-full aspect-[4/3] object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Pool Owners Are Switching to ECO Finish
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fibreglass pools with gel coat or painted surfaces often need resurfacing every 1–2 years. 
                ECO Finish breaks that cycle with a coating designed to last.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/12 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Break the Repainting Cycle</span>
                    <p className="text-sm text-muted-foreground">Lasts 10+ years vs 1-2 years for gel coat</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/12 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">No More Pool Draining</span>
                    <p className="text-sm text-muted-foreground">Save water costs in the Canary Islands</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/12 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Less Downtime for Rentals</span>
                    <p className="text-sm text-muted-foreground">Keep your villa pool in service longer</p>
                  </div>
                </div>
              </div>
              
              <Button asChild variant="outline" size="default">
                <Link to="/why-eco-finish">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Installations - Larger Images, Compact */}
      <section className="py-10 md:py-14 bg-surface-light">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Real Installations Across the Islands
              </h2>
              <p className="text-muted-foreground">
                Recent ECO Finish work for private villas, resorts, and holiday homes.
              </p>
            </div>
            <Button asChild variant="outline" size="default" className="shrink-0">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {installations.map((item) => (
              <div 
                key={item.location}
                className="group relative rounded-lg overflow-hidden shadow-soft"
              >
                <div className="aspect-[4/3]">
                  <img 
                    src={item.image}
                    alt={`${item.finish} ECO Finish pool - ${item.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 via-navy-950/40 to-transparent p-4">
                  <p className="text-white font-medium text-sm">{item.location}</p>
                  <p className="text-white/70 text-xs">{item.finish}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Canary Islands - Image-First Layout */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            {/* Large Hero Image */}
            <div className="lg:col-span-3 relative">
              <img 
                src={frenchGrey1}
                alt="Beautiful ECO Finish pool with crystal clear water"
                className="aspect-[16/10] w-full rounded-lg object-cover shadow-medium"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-soft">
                <p className="text-sm font-medium text-foreground">10+ Year Durability</p>
                <p className="text-xs text-muted-foreground">Built for island conditions</p>
              </div>
            </div>
            
            {/* Content + Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Built for Canary Islands Conditions
              </h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Island pools face unique challenges: intense year-round sun, salt-laden air, 
                and constant use. ECO Finish thrives in these conditions.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-5">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-2 bg-surface-light rounded-lg p-3">
                    <benefit.icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-medium text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild size="default">
                <Link to="/process">
                  See How It's Applied
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Colour Preview Strip */}
      <section className="py-8 bg-navy-900">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">21+ Colour Options</h3>
              <p className="text-white/70 text-sm">From vibrant blues to natural sands</p>
            </div>
            
            <div className="flex items-center gap-2 overflow-hidden">
              <img src={blueLagoon1} alt="Blue Lagoon" className="w-16 h-16 rounded-lg object-cover" />
              <img src={santorini1} alt="Santorini" className="w-16 h-16 rounded-lg object-cover" />
              <img src={konaCoast1} alt="Kona Coast" className="w-16 h-16 rounded-lg object-cover" />
              <img src={pacificBlue1} alt="Pacific Blue" className="w-16 h-16 rounded-lg object-cover" />
              <img src={frenchGrey1} alt="French Grey" className="w-16 h-16 rounded-lg object-cover hidden sm:block" />
            </div>
            
            <Button asChild variant="outline-light" size="default">
              <Link to="/colour-selector">
                Explore Colours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Ready to Transform Your Pool?
                </h2>
                <p className="text-muted-foreground">
                  Get a free, no-obligation quote. We serve all seven Canary Islands.
                </p>
              </div>
              <Button asChild size="lg" className="shrink-0">
                <Link to="/contact">
                  Request Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
