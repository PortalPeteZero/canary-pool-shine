import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Droplets, PaintBucket, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import beforeAfter1 from "@/assets/before-after-1.png";
import beforeAfter2 from "@/assets/before-after-2.png";
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
    description: "Your chosen ECO Finish is expertly applied using a thermal spray process. The coating bonds instantly to the surface, creating a seamless, durable finish.",
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

      {/* Hero with image background */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={processTeamImage}
            alt="ECO Finish application team at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/70" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3 animate-fade-up">
              Professional Installation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              How ECO Finish Is Applied
            </h1>
            <p className="text-lg text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Our thermal spray process ensures a seamless, long-lasting finish that bonds permanently to your pool surface.
            </p>
          </div>
        </div>
      </section>

      {/* Application Videos */}
      <section className="py-10 md:py-16 lg:py-20 bg-surface-light">
        <div className="container">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3">
              Watch the Process
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">See ECO Finish application in action</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <video 
                src="/videos/apply-primer.mov"
                controls
                playsInline
                className="w-full aspect-video object-cover"
              />
              <div className="p-3 md:p-4 bg-background">
                <p className="text-sm md:text-base text-foreground font-medium">Primer Application</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <video 
                src="/videos/apply-wall.mov"
                controls
                playsInline
                className="w-full aspect-video object-cover"
              />
              <div className="p-3 md:p-4 bg-background">
                <p className="text-sm md:text-base text-foreground font-medium">Wall Coating</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <video 
                src="/videos/apply-thermal.mov"
                controls
                playsInline
                className="w-full aspect-video object-cover"
              />
              <div className="p-3 md:p-4 bg-background">
                <p className="text-sm md:text-base text-foreground font-medium">Thermal Spray</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <video 
                src="/videos/apply-steps.mov"
                controls
                playsInline
                className="w-full aspect-video object-cover"
              />
              <div className="p-3 md:p-4 bg-background">
                <p className="text-sm md:text-base text-foreground font-medium">Steps & Details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative flex flex-row gap-4 md:gap-8 lg:gap-10 mb-8 md:mb-16 lg:mb-24 last:mb-0 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[1.75rem] md:left-[2.5rem] top-16 md:top-20 bottom-0 w-px bg-gradient-to-b from-border/60 to-transparent" />
                )}

                {/* Step Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl bg-surface-light border border-border/40 flex items-center justify-center shadow-card">
                    <step.icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 md:pt-2">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="text-xs md:text-sm font-medium text-primary">{step.number}</span>
                    <h2 className="text-lg md:text-xl font-semibold text-foreground">{step.title}</h2>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-navy-900">
        <div className="container">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-5">
              The Transformation
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              See the dramatic difference ECO Finish makes on worn fibreglass pools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <img 
                src={beforeAfter1}
                alt="Before and after ECO Finish application on fibreglass pool"
                className="w-full object-cover"
              />
              <div className="absolute top-3 left-3 md:top-4 md:left-4">
                <span className="px-2 py-1 md:px-3 md:py-1 bg-white/90 text-foreground text-xs font-semibold rounded-full">Before & After</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <img 
                src={beforeAfter2}
                alt="Dramatic transformation of peeling pool surface with ECO Finish"
                className="w-full object-cover"
              />
              <div className="absolute top-3 left-3 md:top-4 md:left-4">
                <span className="px-2 py-1 md:px-3 md:py-1 bg-white/90 text-foreground text-xs font-semibold rounded-full">Before & After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                What to Expect
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10 leading-relaxed">
                From your first enquiry to swimming in your transformed pool, 
                we make the entire process smooth and stress-free. Most residential 
                installations are completed within 2-3 days.
              </p>
              <ul className="space-y-3 md:space-y-5">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3 md:gap-4">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium order-1 lg:order-2">
              <video 
                src="/videos/apply-wall.mov"
                controls
                playsInline
                className="w-full aspect-video lg:aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 lg:py-28 bg-surface-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10 leading-relaxed">
              Contact us today for a free consultation. We'll assess your pool, 
              discuss colour options, and provide a detailed quote.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
