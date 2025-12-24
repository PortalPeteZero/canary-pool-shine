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

      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Water Colour Selector
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Choose from seven beautiful colour families to create your ideal pool 
              aesthetic. Each ECO Finish creates a unique water appearance that 
              transforms your pool into a stunning focal point.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-accent/10 border-b border-accent/20">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">Please note:</strong> Water colour appearance 
            varies based on pool depth, lighting conditions, and surrounding environment. 
            Swatches and photos are representations only.
          </p>
        </div>
      </section>

      {/* Colour Selector */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue={finishData.families[0].id} className="w-full">
            <div className="mb-8 overflow-x-auto pb-2">
              <TabsList className="inline-flex h-auto p-1 bg-secondary/50 rounded-xl">
                {finishData.families.map((family) => (
                  <TabsTrigger
                    key={family.id}
                    value={family.id}
                    className="px-4 py-3 text-sm font-medium rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-card data-[state=active]:text-primary whitespace-nowrap"
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
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      {family.name}
                    </h2>
                    <p className="text-muted-foreground">{family.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {familyFinishes.map((finish) => (
                      <button
                        key={finish.id}
                        onClick={() => handleFinishClick(finish)}
                        className="group text-left p-4 rounded-2xl bg-card shadow-card hover:shadow-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label={`View ${finish.finishName} finish details`}
                      >
                        <div
                          className="aspect-square rounded-xl mb-4 shadow-soft group-hover:shadow-medium transition-shadow"
                          style={{ backgroundColor: finish.swatchColor }}
                          aria-hidden="true"
                        />
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {finish.finishName}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
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
