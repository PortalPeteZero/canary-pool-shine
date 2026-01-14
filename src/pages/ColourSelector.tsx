import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SwatchImage } from "@/components/shared/SwatchImage";
import finishData from "@/data/finishes.json";
import santoriniImage from "@/assets/installations/santorini/santorini-1.jpg";

// Popular finishes to show badges
const popularFinishes = ["blue-lagoon", "mediterranean-blue", "french-grey", "sandy-beach", "santorini"];

// Color family categorization
const colorFamilies = {
  blues: ["blue-lagoon", "mediterranean-blue", "commercial-blue", "midnight-blue", "blue-granite", "blue-mist", "pacific-blue", "marrakesh", "cabo-verde", "ice-ice-bay-bay", "bahia-glacial", "cala-macarella"],
  neutrals: ["california-white", "french-grey", "grey-reef", "santorini", "blanco-suave", "mykonos", "mer-cendree"],
  sands: ["sandy-beach", "sahara-sand", "kona-coast", "giallo-versilia", "barbuda", "tropea-sands", "baleares-sand", "mallorca-sand", "rivage-bronze"],
  darks: ["perle-noire", "black-absinthe"],
};

const filterOptions = [
  { value: "all", label: "All Colours" },
  { value: "blues", label: "Blues & Greens" },
  { value: "neutrals", label: "Whites & Greys" },
  { value: "sands", label: "Sands & Naturals" },
  { value: "darks", label: "Dark & Dramatic" },
];

export default function ColourSelector() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Filter finishes by color family
  const filterByFamily = (finishes: typeof finishData.finishes) => {
    if (activeFilter === "all") return finishes;
    const familyIds = colorFamilies[activeFilter as keyof typeof colorFamilies] || [];
    return finishes.filter((finish) => familyIds.includes(finish.id));
  };

  // Separate Brillo Blanco finishes from other finishes
  const brilloBlancoFinishes = filterByFamily(
    finishData.finishes.filter((finish) => finish.productLine === "Brillo Blanco")
  );
  const otherFinishes = filterByFamily(
    finishData.finishes.filter((finish) => finish.productLine !== "Brillo Blanco")
  );

  const FinishCard = ({ finish }: { finish: typeof finishData.finishes[0] }) => {
    const isPopular = popularFinishes.includes(finish.id);
    
    return (
      <Link
        key={finish.id}
        to={`/colour-selector/${finish.id}`}
        className="group text-left rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 relative"
        aria-label={`View ${finish.finishName} finish details`}
      >
        {isPopular && (
          <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        )}
        <SwatchImage
          finishId={finish.id}
          fallbackColor={finish.swatchColor}
          className="aspect-square"
          alt={`${finish.finishName} texture swatch`}
        />
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {finish.finishName}
            </h3>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Water Colour Selector | ECO Finish Pool Colours | Canary Detect</title>
        <meta 
          name="description" 
          content="Explore ECO Finish water colours for your pool. From bright whites to deep charcoals, find the perfect finish for your Canary Islands pool." 
        />
      </Helmet>

      {/* Hero with image background */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={santoriniImage}
            alt="Beautiful pool with ECO Finish coating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/70" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3 animate-fade-up">
              25+ Stunning Options
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Water Colour Selector
            </h1>
            <p className="text-lg text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Explore our complete range of ECO Finish water colours. From vibrant blues to natural sands, find the perfect finish for your pool.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer + Filters */}
      <section className="py-4 border-b border-border/30">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center mb-4">
            Water colour appearance varies based on pool depth, lighting conditions, and surrounding environment.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === option.value
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground bg-surface-light"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Colours Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          {otherFinishes.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {otherFinishes.map((finish) => (
                <FinishCard key={finish.id} finish={finish} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12">No finishes match this filter.</p>
          )}
        </div>
      </section>

      {/* Brillo Blanco Section */}
      {brilloBlancoFinishes.length > 0 && (
        <section className="py-20 md:py-28 bg-muted/30 border-t border-border/30">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Brillo Blanco Colours
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Inspired by the breathtaking landscapes of Europe, this exclusive palette offers nine stunning options, 
                each boasting a white base that reflects the brilliance of the sun and the serenity of the water.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {brilloBlancoFinishes.map((finish) => (
                <FinishCard key={finish.id} finish={finish} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
