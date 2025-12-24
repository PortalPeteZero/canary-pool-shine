import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SwatchImage } from "@/components/shared/SwatchImage";
import finishData from "@/data/finishes.json";

export default function ColourSelector() {
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
              Choose from seven beautiful colour families to create your ideal pool aesthetic.
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

      {/* Colour Selector - Light with generous spacing */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Tabs defaultValue={finishData.families[0].id} className="w-full">
            <div className="mb-12 overflow-x-auto pb-2">
              <TabsList className="inline-flex h-auto p-1 bg-surface-light rounded-full border border-border/40">
                {finishData.families.map((family) => (
                  <TabsTrigger
                    key={family.id}
                    value={family.id}
                    className="px-4 py-2 text-sm font-medium rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background whitespace-nowrap transition-colors"
                  >
                    {family.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {finishData.families.map((family) => {
              const familyFinishes = finishData.finishes.filter(
                (f) => f.family === family.id
              );

              return (
                <TabsContent key={family.id} value={family.id} className="mt-0">
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {family.name}
                    </h2>
                    <p className="text-muted-foreground">{family.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {familyFinishes.map((finish) => (
                      <Link
                        key={finish.id}
                        to={`/colour-selector/${finish.id}`}
                        className="group text-left p-5 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
                        aria-label={`View ${finish.finishName} finish details`}
                      >
                        <SwatchImage
                          finishId={finish.id}
                          fallbackColor={finish.swatchColor}
                          className="aspect-square rounded-lg mb-5 shadow-soft group-hover:shadow-medium transition-shadow"
                          alt={`${finish.finishName} texture swatch`}
                        />
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {finish.finishName}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                              {finish.description}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
