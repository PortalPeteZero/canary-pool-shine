import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import finishData from "@/data/finishes.json";

export default function ColourDetail() {
  const { finishId } = useParams<{ finishId: string }>();
  
  const finish = finishData.finishes.find((f) => f.id === finishId);
  const family = finishData.families.find((f) => f.id === finish?.family);
  
  // Get related finishes from the same family
  const relatedFinishes = finishData.finishes.filter(
    (f) => f.family === finish?.family && f.id !== finishId
  );

  if (!finish) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Colour Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The colour you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/colour-selector">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Colour Selector
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{finish.finishName} | ECO Finish Pool Colour | Canary Detect</title>
        <meta 
          name="description" 
          content={`${finish.finishName} - ${finish.description} Discover this ECO Finish water colour for your Canary Islands pool.`} 
        />
      </Helmet>

      {/* Breadcrumb & Back */}
      <section className="bg-surface-light border-b border-border/30">
        <div className="container py-4">
          <Link 
            to="/colour-selector" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Colour Selector
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Large Swatch */}
            <div>
              <div 
                className="aspect-square rounded-2xl shadow-medium"
                style={{ backgroundColor: finish.swatchColor }}
                aria-label={`${finish.finishName} colour swatch`}
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              {family && (
                <span className="text-sm font-medium text-primary mb-2">
                  {family.name} Family
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {finish.finishName}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {finish.description}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Installations */}
      <section className="py-12 md:py-20 bg-surface-light">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Example Installations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-secondary flex items-center justify-center border border-border/30"
              >
                <span className="text-sm text-muted-foreground">Photo coming soon</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Water colour appearance varies based on pool depth, lighting conditions, and surrounding environment.
          </p>
        </div>
      </section>

      {/* Related Colours */}
      {relatedFinishes.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              More from {family?.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedFinishes.map((related) => (
                <Link
                  key={related.id}
                  to={`/colour-selector/${related.id}`}
                  className="group p-4 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div
                    className="aspect-square rounded-lg mb-4 shadow-soft group-hover:shadow-medium transition-shadow"
                    style={{ backgroundColor: related.swatchColor }}
                  />
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {related.finishName}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
