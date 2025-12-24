import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, Clock, Leaf, Palette, Shield, Sparkles, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import spaBeforeAfter from "@/assets/spa-before-after.png";
import beforeAfter2 from "@/assets/before-after-2.png";
import applyThermal from "@/assets/apply-thermal.jpg";
import applyPrimer from "@/assets/apply-primer.jpg";
import applyWall from "@/assets/apply-wall.jpg";
import applySteps from "@/assets/apply-steps.jpg";

const benefits = [
  {
    icon: Shield,
    title: "End the Resurfacing Cycle",
    description: "Gel coat and painted fibreglass surfaces commonly need renewal every 1–2 years due to sun exposure and chemical wear. ECO Finish is designed to last 10+ years, breaking this costly cycle.",
  },
  {
    icon: Clock,
    title: "Less Downtime, Fewer Disruptions",
    description: "Traditional resurfacing often means 1–2 weeks of pool downtime. For villa rentals, that's lost bookings. ECO Finish minimises interruptions to your property and guests.",
  },
  {
    icon: Leaf,
    title: "Save Water and Money",
    description: "Each resurfacing requires draining and refilling your pool. In the Canary Islands, where water costs are high, ECO Finish reduces this expense significantly over time.",
  },
  {
    icon: Palette,
    title: "Stunning Water Colours",
    description: "Choose from seven distinct colour families to achieve your perfect water appearance. From bright whites to dramatic charcoals, ECO Finish offers unmatched aesthetic flexibility.",
  },
  {
    icon: Sparkles,
    title: "Smooth, Comfortable Surface",
    description: "ECO Finish provides a smooth, non-porous surface that's comfortable underfoot and gentle on swimwear — unlike rough or deteriorating gel coat surfaces.",
  },
  {
    icon: ThumbsUp,
    title: "Built for Island Conditions",
    description: "Intense UV, salt air, and year-round use take their toll on traditional finishes. ECO Finish is formulated specifically to withstand Canary Islands conditions.",
  },
];

const comparisons = [
  { 
    feature: "Expected Surface Lifespan", 
    eco: "10+ years with proper care", 
    traditional: "Gel coat / paint typically needs renewal every 1–2 years due to UV and chemical exposure" 
  },
  { 
    feature: "Fade & Chalk Resistance", 
    eco: "Highly resistant — no colour mottling or chalking", 
    traditional: "Prone to chalking, blistering, and uneven fading over time" 
  },
  { 
    feature: "Stain & Chemical Resistance", 
    eco: "Extremely resistant to staining and chemical damage", 
    traditional: "Moderate resistance — can discolour with imbalanced water chemistry" 
  },
  { 
    feature: "Surface Comfort & Safety", 
    eco: "Smooth, comfortable underfoot with good slip resistance", 
    traditional: "Can become slippery; surface degrades with wear" 
  },
  { 
    feature: "Repairability & Colour Matching", 
    eco: "Easily blended repairs; custom colours matched to swatch", 
    traditional: "Difficult to match colours; repairs often visible" 
  },
  { 
    feature: "Pool Draining Required", 
    eco: "Once at installation — then minimal intervention", 
    traditional: "Each resurfacing requires full drain and refill" 
  },
  { 
    feature: "Downtime During Resurfacing", 
    eco: "2–3 days for installation; no repeat cycles", 
    traditional: "1–2 weeks per resurface; repeated every 1–2 years" 
  },
  { 
    feature: "Long-Term Cost", 
    eco: "Lower — fewer interventions, less water use, less disruption", 
    traditional: "Higher — regular resurfacing, water costs, lost rental income" 
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

      {/* Hero - Dark with image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={applyThermal}
            alt="ECO Finish thermal spray application"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/70" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Why Choose ECO Finish?
            </h1>
            <p className="text-xl text-white/75">
              If you're tired of regularly repainting or re-gel-coating your fibreglass pool — 
              losing time, water, and money — ECO Finish offers a longer-lasting alternative.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Light with generous spacing */}
      <section className="py-28 md:py-36">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The ECO Finish Advantage
            </h2>
            <p className="text-muted-foreground">
              Every benefit designed to make pool ownership simpler and more enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="p-8 rounded-xl bg-card border border-border/40 shadow-card animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-6">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding the Difference - with images */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Understanding Pool Surface Systems
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Fibreglass pools are common across the Canary Islands. The fibreglass shell itself is durable, 
                  but the <strong className="text-foreground">gel coat or painted surface</strong> — the visible 
                  finish you swim in — is the wear layer that takes the brunt of UV exposure, chemicals, and daily use.
                </p>
                <p>
                  In island conditions, this surface layer typically requires <strong className="text-foreground">repainting 
                  or re-gel-coating every 1–2 years</strong>. Over time, full re-fibreglassing may also be needed. 
                  Each resurfacing means draining and refilling the pool — expensive in the Canaries where water 
                  costs are high — plus 1–2 weeks of downtime.
                </p>
                <p>
                  For rental properties, this means lost bookings. For homeowners, it means ongoing expense and disruption.
                </p>
                <p className="text-foreground font-medium">
                  ECO Finish offers an alternative: a long-life coating system designed to reduce the frequency 
                  of resurfacing, minimise water waste, and keep your pool in service longer.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={applyPrimer}
                alt="Primer application on pool surface"
                className="rounded-xl shadow-medium object-cover aspect-[3/4]"
              />
              <img 
                src={applySteps}
                alt="ECO Finish application on pool steps"
                className="rounded-xl shadow-medium object-cover aspect-[3/4] mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Subtle light grey */}
      <section className="py-24 md:py-32 bg-surface-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Long-Life Coating vs Traditional Gel Coat / Paint
            </h2>
            <p className="text-muted-foreground">
              A factual comparison of lifecycle performance, maintenance, and long-term cost.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-card bg-card border border-border/40">
              <div className="grid grid-cols-3 gap-4 p-5 bg-navy-900 text-white font-medium text-sm">
                <div>Comparison Point</div>
                <div>ECO Finish</div>
                <div>Gel Coat / Painted Fibreglass</div>
              </div>
              {comparisons.map((row, index) => (
                <div 
                  key={row.feature}
                  className={`grid grid-cols-3 gap-4 p-5 text-sm ${index % 2 === 0 ? 'bg-card' : 'bg-surface-light/50'}`}
                >
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-foreground flex items-start gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>{row.eco}</span>
                  </div>
                  <div className="text-muted-foreground">{row.traditional}</div>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-6">
              Comparison based on typical Canary Islands conditions. Individual results may vary based on pool usage, 
              water chemistry, and maintenance practices.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Transformations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the dramatic difference between worn fibreglass surfaces and beautifully restored ECO Finish pools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <img 
                src={spaBeforeAfter}
                alt="Spa before and after ECO Finish restoration"
                className="w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Before & After</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <img 
                src={beforeAfter2}
                alt="Pool transformation with ECO Finish"
                className="w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Before & After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              See ECO Finish in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Explore our gallery of completed installations across the Canary Islands, 
              or discover the stunning range of water colours available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/gallery">
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/colour-selector">
                  Explore Colour Range
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
