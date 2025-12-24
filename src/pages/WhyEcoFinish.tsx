import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import spaBeforeAfter from "@/assets/spa-before-after.png";
import beforeAfter2 from "@/assets/before-after-2.png";
import applyThermal from "@/assets/apply-thermal.jpg";

const comparisons = [
  { 
    feature: "Surface Lifespan", 
    eco: "10+ years", 
    traditional: "1–2 years before repainting" 
  },
  { 
    feature: "Fade & Chalk Resistance", 
    eco: "No mottling or chalking", 
    traditional: "Prone to fading and blistering" 
  },
  { 
    feature: "Chemical Resistance", 
    eco: "Highly resistant", 
    traditional: "Discolours with imbalanced chemistry" 
  },
  { 
    feature: "Pool Downtime", 
    eco: "2–3 days once", 
    traditional: "1–2 weeks every 1–2 years" 
  },
  { 
    feature: "Water Usage", 
    eco: "One drain at install", 
    traditional: "Drain & refill each resurface" 
  },
  { 
    feature: "Long-Term Cost", 
    eco: "Lower total investment", 
    traditional: "Recurring expense + lost income" 
  },
];

export default function WhyEcoFinish() {
  return (
    <Layout>
      <Helmet>
        <title>Why ECO Finish? | Benefits of ECO Finish Pool Coating | Canary Detect</title>
        <meta 
          name="description" 
          content="Discover why ECO Finish is the superior pool coating choice. 10+ year durability, beautiful water colours, eco-friendly, and perfect for Canary Islands pools." 
        />
      </Helmet>

      {/* Hero - Problem Statement */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={applyThermal}
            alt="ECO Finish thermal spray application"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-900/80" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Stop the Endless Resurfacing Cycle
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-6">
              Fibreglass pool owners in the Canaries know the pattern: gel coat fades, paint peels, 
              and every 1–2 years you're paying for another resurface.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70 text-sm">
              <span className="flex items-center gap-2"><X className="h-4 w-4 text-red-400" /> 1–2 weeks downtime</span>
              <span className="flex items-center gap-2"><X className="h-4 w-4 text-red-400" /> Expensive water refills</span>
              <span className="flex items-center gap-2"><X className="h-4 w-4 text-red-400" /> Lost rental bookings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution + Comparison Table */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                ECO Finish: A 10+ Year Solution
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                One application. No more annual repainting. See how it compares:
              </p>
            </div>

            {/* Comparison Table */}
            <div className="rounded-xl overflow-hidden shadow-card border border-border/40 mb-8">
              <div className="grid grid-cols-3 gap-2 p-4 bg-navy-900 text-white font-semibold text-sm">
                <div></div>
                <div className="text-center">ECO Finish</div>
                <div className="text-center text-white/70">Gel Coat / Paint</div>
              </div>
              {comparisons.map((row, index) => (
                <div 
                  key={row.feature}
                  className={`grid grid-cols-3 gap-2 p-4 text-sm ${index % 2 === 0 ? 'bg-card' : 'bg-surface-light/50'}`}
                >
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-center text-foreground flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>{row.eco}</span>
                  </div>
                  <div className="text-center text-muted-foreground text-xs">{row.traditional}</div>
                </div>
              ))}
            </div>

            {/* Key Benefits - Compact */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-surface-light border border-border/40">
                <h3 className="font-semibold text-foreground mb-1">Built for Island Conditions</h3>
                <p className="text-muted-foreground text-sm">Formulated to withstand intense UV, salt air, and year-round use.</p>
              </div>
              <div className="p-4 rounded-lg bg-surface-light border border-border/40">
                <h3 className="font-semibold text-foreground mb-1">Smooth & Comfortable</h3>
                <p className="text-muted-foreground text-sm">Non-porous surface that's gentle on skin and swimwear.</p>
              </div>
              <div className="p-4 rounded-lg bg-surface-light border border-border/40">
                <h3 className="font-semibold text-foreground mb-1">Beautiful Water Colours</h3>
                <p className="text-muted-foreground text-sm">Choose from 25+ finishes to achieve your perfect pool aesthetic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After - Compact */}
      <section className="py-10 md:py-14 bg-navy-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
              See the Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={spaBeforeAfter}
                  alt="Spa before and after ECO Finish restoration"
                  className="w-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 text-foreground text-xs font-semibold rounded">Before & After</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={beforeAfter2}
                  alt="Pool transformation with ECO Finish"
                  className="w-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 text-foreground text-xs font-semibold rounded">Before & After</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-surface-light">
        <div className="container">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Ready to End the Cycle?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free consultation and quote for your pool. We'll assess your surface and recommend the best ECO Finish colour.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/colour-selector">
                  Explore Colours
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}