import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Droplets, PaintBucket, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import processTeamImage from "@/assets/process-team.jpg";

const steps = [
  {
    number: "01",
    icon: Wrench,
    title: "Surface Preparation",
    description: "We thoroughly prepare your pool surface, repairing any damage and creating the ideal base for the ECO Finish application.",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Primer Application",
    description: "A specialized bonding primer is applied to ensure maximum adhesion between your pool surface and the ECO Finish coating.",
  },
  {
    number: "03",
    icon: PaintBucket,
    title: "ECO Finish Coating",
    description: "Your chosen ECO Finish is expertly applied in multiple layers, building up the durable, beautiful surface that will last for years.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Cure & Fill",
    description: "The finish cures naturally, then we carefully fill your pool and provide maintenance guidance for lasting results.",
  },
];

const expectations = [
  "Free on-site consultation and colour advice",
  "Detailed written quote with no hidden costs",
  "Minimal disruption to your property",
  "Complete clean-up after installation",
  "Full aftercare guidance and support",
  "Warranty on workmanship",
];

export default function Process() {
  return (
    <Layout>
      <Helmet>
        <title>How ECO Finish Is Applied | Installation Process | Canary Detect</title>
        <meta 
          name="description" 
          content="Learn how ECO Finish is professionally applied to your pool. Our 4-step process ensures lasting beauty and durability for your Canary Islands pool." 
        />
      </Helmet>

      {/* Hero - Dark */}
      <section className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Installation Process
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How ECO Finish Is Applied
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our professional installation process ensures your pool receives a 
              perfect ECO Finish that will provide years of beauty and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps - Light */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative flex flex-col md:flex-row gap-8 mb-20 last:mb-0 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[2.75rem] top-24 bottom-0 w-0.5 bg-gradient-to-b from-border to-transparent" />
                )}

                {/* Step Number */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-surface-light border border-border/50 flex items-center justify-center shadow-soft">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-primary">{step.number}</span>
                    <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect - Subtle light grey */}
      <section className="py-24 md:py-32 bg-surface-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                From your first enquiry to swimming in your transformed pool, 
                we make the entire process smooth and stress-free. Most residential 
                installations are completed within 2-3 days.
              </p>
              <ul className="space-y-5">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src={processTeamImage}
                alt="Canary Detect team at work on a pool installation"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-medium"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Light */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Contact us today for a free consultation. We'll assess your pool, 
              discuss colour options, and provide a detailed quote.
            </p>
            <Button asChild size="xl">
              <Link to="/contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
