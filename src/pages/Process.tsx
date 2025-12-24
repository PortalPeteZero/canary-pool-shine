import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Droplets, PaintBucket, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import applyThermal from "@/assets/apply-thermal.jpg";
import applyPrimer from "@/assets/apply-primer.jpg";
import applySteps from "@/assets/apply-steps.jpg";
import applyWall from "@/assets/apply-wall.jpg";
import beforeAfter1 from "@/assets/before-after-1.png";
import beforeAfter2 from "@/assets/before-after-2.png";

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

      {/* Hero - Dark with application image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={applyThermal}
            alt="ECO Finish thermal spray application in progress"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-transparent" />
        </div>
        <div className="container relative py-28 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              How ECO Finish Is Applied
            </h1>
            <p className="text-xl text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Our professional thermal spray process ensures a seamless, long-lasting finish 
              that bonds permanently to your pool surface.
            </p>
          </div>
        </div>
      </section>

      {/* Application Gallery */}
      <section className="py-16 md:py-20 bg-surface-light">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-medium group">
              <img 
                src={applyPrimer}
                alt="Applying primer coat to pool surface"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Primer Application</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium group">
              <img 
                src={applyWall}
                alt="Thermal spray application on pool wall"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Wall Coating</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium group">
              <img 
                src={applyThermal}
                alt="Thermal spray showing colour transformation"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Thermal Spray</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium group">
              <img 
                src={applySteps}
                alt="Finishing pool steps with ECO Finish"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Steps & Details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-28 md:py-36">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative flex flex-col md:flex-row gap-10 mb-24 last:mb-0 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[2.75rem] top-24 bottom-0 w-px bg-gradient-to-b from-border/60 to-transparent" />
                )}

                {/* Step Number */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-surface-light border border-border/40 flex items-center justify-center shadow-card">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">{step.number}</span>
                    <h2 className="text-xl font-semibold text-foreground">{step.title}</h2>
                  </div>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 md:py-32 bg-navy-900">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              The Transformation
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              See the dramatic difference ECO Finish makes on worn fibreglass pools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <img 
                src={beforeAfter1}
                alt="Before and after ECO Finish application on fibreglass pool"
                className="w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 text-foreground text-xs font-semibold rounded-full">Before & After</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-medium">
              <img 
                src={beforeAfter2}
                alt="Dramatic transformation of peeling pool surface with ECO Finish"
                className="w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 text-foreground text-xs font-semibold rounded-full">Before & After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 md:py-32">
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
                src={applyWall}
                alt="ECO Finish professional application to pool wall"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-medium"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface-light">
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
