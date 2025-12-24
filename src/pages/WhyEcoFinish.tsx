import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, Clock, Leaf, Palette, Shield, Sparkles, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const benefits = [
  {
    icon: Shield,
    title: "Exceptional Durability",
    description: "ECO Finish creates a permanent bond with your pool surface, lasting 15+ years without the need for replastering. It resists staining, chemical damage, and the harsh effects of UV exposure.",
  },
  {
    icon: Palette,
    title: "Stunning Water Colours",
    description: "Choose from seven distinct colour families to achieve your perfect water appearance. From bright whites to dramatic charcoals, ECO Finish offers unmatched aesthetic flexibility.",
  },
  {
    icon: Sparkles,
    title: "Smooth, Comfortable Surface",
    description: "Unlike traditional plaster finishes, ECO Finish provides a smooth, non-abrasive surface that's comfortable underfoot and gentle on swimwear.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Formula",
    description: "ECO Finish uses environmentally conscious materials and application processes. The durable finish also means fewer resources spent on repairs and replacements over time.",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Most residential pools can be completed in just 2-3 days, minimizing disruption to your home and getting you back in the water faster.",
  },
  {
    icon: ThumbsUp,
    title: "Low Maintenance",
    description: "The smooth, non-porous surface naturally resists algae growth and makes cleaning easier. Spend less time maintaining your pool and more time enjoying it.",
  },
];

const comparisons = [
  { feature: "Lifespan", eco: "15+ years", traditional: "5-7 years" },
  { feature: "Surface feel", eco: "Smooth & comfortable", traditional: "Can be rough/abrasive" },
  { feature: "Stain resistance", eco: "Excellent", traditional: "Poor to moderate" },
  { feature: "Colour consistency", eco: "Uniform & lasting", traditional: "Can mottle/fade" },
  { feature: "Algae resistance", eco: "High", traditional: "Low" },
  { feature: "Maintenance", eco: "Minimal", traditional: "Regular acid washing" },
];

export default function WhyEcoFinish() {
  return (
    <Layout>
      <Helmet>
        <title>Why ECO Finish? | Benefits of ECO Finish Pool Coating | Canary Detect</title>
        <meta 
          name="description" 
          content="Discover why ECO Finish is the superior pool coating choice. 15+ year durability, beautiful water colours, eco-friendly, and perfect for Canary Islands pools." 
        />
      </Helmet>

      {/* Hero - Dark */}
      <section className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              The ECO Finish Advantage
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose ECO Finish?
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              ECO Finish represents a breakthrough in pool surface technology. 
              Combining exceptional durability with stunning aesthetics, it's the 
              smart choice for Canary Islands pool owners who want lasting beauty 
              without constant maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Light */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              The ECO Finish Advantage
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every benefit designed to make pool ownership simpler and more enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="p-6 rounded-lg bg-card border border-border/50 shadow-soft animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - Subtle light grey */}
      <section className="py-24 md:py-32 bg-surface-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              ECO Finish vs Traditional Plaster
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See how ECO Finish compares to conventional pool finishes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-soft bg-card border border-border/50">
              <div className="grid grid-cols-3 gap-4 p-5 bg-navy-900 text-white font-semibold uppercase tracking-wide text-sm">
                <div>Feature</div>
                <div>ECO Finish</div>
                <div>Traditional Plaster</div>
              </div>
              {comparisons.map((row, index) => (
                <div 
                  key={row.feature}
                  className={`grid grid-cols-3 gap-4 p-5 ${index % 2 === 0 ? 'bg-card' : 'bg-surface-light/50'}`}
                >
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-primary font-medium flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0" />
                    {row.eco}
                  </div>
                  <div className="text-muted-foreground">{row.traditional}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Light */}
      <section className="py-24 md:py-32">
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
                  Explore Water Colours
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
