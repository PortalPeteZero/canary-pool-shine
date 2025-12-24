import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SwatchImage } from "@/components/shared/SwatchImage";
import finishData from "@/data/finishes.json";

export default function ColourSelector() {
  // Separate Brillo Blanco finishes from other finishes
  const brilloBlancoFinishes = finishData.finishes.filter(
    (finish) => finish.productLine === "Brillo Blanco"
  );
  const otherFinishes = finishData.finishes.filter(
    (finish) => finish.productLine !== "Brillo Blanco"
  );

  const FinishCard = ({ finish }: { finish: typeof finishData.finishes[0] }) => (
    <Link
      key={finish.id}
      to={`/colour-selector/${finish.id}`}
      className="group text-left rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
      aria-label={`View ${finish.finishName} finish details`}
    >
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

  return (
    <Layout>
      <Helmet>
        <title>Water Colour Selector | ECO Finish Pool Colours | Canary Detect</title>
        <meta 
          name="description" 
          content="Explore ECO Finish water colours for your pool. From bright whites to deep charcoals, find the perfect finish for your Canary Islands pool." 
        />
      </Helmet>

      {/* Hero - Dark, compact */}
      <section className="bg-navy-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Water Colour Selector
            </h1>
            <p className="text-lg text-white/75">
              Explore our complete range of ECO Finish water colours for your pool.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer - Subtle */}
      <section className="py-4 border-b border-border/30">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center">
            Water colour appearance varies based on pool depth, lighting conditions, and surrounding environment.
          </p>
        </div>
      </section>

      {/* All Colours Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {otherFinishes.map((finish) => (
              <FinishCard key={finish.id} finish={finish} />
            ))}
          </div>
        </div>
      </section>

      {/* Brillo Blanco Section */}
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
    </Layout>
  );
}
