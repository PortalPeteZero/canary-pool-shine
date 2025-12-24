import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { FinishModal } from "@/components/shared/FinishModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import finishData from "@/data/finishes.json";

interface Finish {
  id: string;
  family: string;
  finishName: string;
  swatchColor: string;
  description: string;
  media: string[];
}

export default function ColourSelector() {
  const [selectedFinish, setSelectedFinish] = useState<Finish | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFinishClick = (finish: Finish) => {
    setSelectedFinish(finish);
    setModalOpen(true);
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

      {/* Hero - Dark */}
      <section className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Find Your Perfect Colour
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Water Colour Selector
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Choose from seven beautiful colour families to create your ideal pool 
              aesthetic. Each ECO Finish creates a unique water appearance that 
              transforms your pool into a stunning focal point.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer - Subtle */}
      <section className="py-4 bg-surface-light border-b border-border/50">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground font-medium">Please note:</strong> Water colour appearance 
            varies based on pool depth, lighting conditions, and surrounding environment.
          </p>
        </div>
      </section>

      {/* Colour Selector - Light */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue={finishData.families[0].id} className="w-full">
            <div className="mb-10 overflow-x-auto pb-2">
              <TabsList className="inline-flex h-auto p-1.5 bg-surface-light rounded-full border border-border/50">
                {finishData.families.map((family) => (
                  <TabsTrigger
                    key={family.id}
                    value={family.id}
                    className="px-5 py-2.5 text-sm font-medium rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background whitespace-nowrap transition-colors"
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
                      <button
                        key={finish.id}
                        onClick={() => handleFinishClick(finish)}
                        className="group text-left p-5 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
                        aria-label={`View ${finish.finishName} finish details`}
                      >
                        <div
                          className="aspect-square rounded-lg mb-5 shadow-soft group-hover:shadow-medium transition-shadow"
                          style={{ backgroundColor: finish.swatchColor }}
                          aria-hidden="true"
                        />
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {finish.finishName}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {finish.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <FinishModal
        finish={selectedFinish}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </Layout>
  );
}
