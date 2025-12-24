import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { GalleryModal } from "@/components/shared/GalleryModal";
import finishData from "@/data/finishes.json";

// Import gallery images
import poolWhiteImage from "@/assets/pool-white.jpg";
import poolDarkImage from "@/assets/pool-dark.jpg";
import poolAquaImage from "@/assets/pool-aqua.jpg";
import poolBlueImage from "@/assets/pool-blue.jpg";
import poolSlateImage from "@/assets/pool-slate.jpg";
import heroPoolImage from "@/assets/hero-pool.jpg";

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  finish: string;
  family: string;
  description: string;
  image: string;
}

// Sample gallery data - to be replaced with real installations
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Modern Villa Pool",
    location: "Tenerife",
    finish: "Mediterranean Blue",
    family: "aquaBRIGHT",
    description: "A stunning infinity pool overlooking the Atlantic Ocean. The Mediterranean Blue finish creates a perfect blend of vibrant blue water that complements the volcanic landscape.",
    image: poolBlueImage,
  },
  {
    id: "2",
    title: "Resort Pool",
    location: "Gran Canaria",
    finish: "California White",
    family: "Commercial",
    description: "Crystal-clear waters in a boutique hotel setting. The California White finish maximizes the sparkle and clarity of the pool under the Canarian sun.",
    image: poolWhiteImage,
  },
  {
    id: "3",
    title: "Private Residence",
    location: "Lanzarote",
    finish: "Perle Noire",
    family: "aquaBRIGHT",
    description: "A dramatic charcoal pool that creates mirror-like reflections. The Perle Noire finish pairs beautifully with the volcanic stone surrounds.",
    image: poolDarkImage,
  },
  {
    id: "4",
    title: "Beachfront Villa",
    location: "Fuerteventura",
    finish: "Cabo Verde",
    family: "polyFIBRO",
    description: "Tropical turquoise waters reminiscent of the nearby beaches. The Cabo Verde finish brings Caribbean vibes to this stunning property.",
    image: poolAquaImage,
  },
  {
    id: "5",
    title: "Contemporary Home",
    location: "Tenerife",
    finish: "Grey Reef",
    family: "aquaBRIGHT",
    description: "A sleek graphite pool that reflects the sky beautifully. The Grey Reef finish adds modern sophistication to this architectural home.",
    image: poolSlateImage,
  },
  {
    id: "6",
    title: "Luxury Estate",
    location: "La Palma",
    finish: "Blue Lagoon",
    family: "aquaBRIGHT",
    description: "Classic blue waters set against a backdrop of lush gardens. The Blue Lagoon finish provides rich, inviting tones perfect for relaxation.",
    image: heroPoolImage,
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.family === activeFilter);

  return (
    <Layout>
      <Helmet>
        <title>Gallery | ECO Finish Pool Installations | Canary Detect</title>
        <meta 
          name="description" 
          content="Browse our gallery of ECO Finish pool installations across the Canary Islands. See real results from Tenerife, Gran Canaria, Lanzarote and more." 
        />
      </Helmet>

      {/* Hero with image background */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={poolBlueImage}
            alt="ECO Finish pool installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/70" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3 animate-fade-up">
              Real Results
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Our Work
            </h1>
            <p className="text-lg text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Browse ECO Finish installations across the Canary Islands. See the stunning transformations we've delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Filters - Minimal, understated */}
      <section className="py-5 border-b border-border/30">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {["aquaBRIGHT", "polyFIBRO", "Commercial"].map((productLine) => (
              <button
                key={productLine}
                onClick={() => setActiveFilter(productLine)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeFilter === productLine
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {productLine}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Image-dominant, generous spacing */}
      <section className="py-16 md:py-24">
        <div className="container">
          {filteredItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="group text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 animate-fade-up"
                  style={{ animationDelay: `${0.05 * (index + 1)}s` }}
                  aria-label={`View ${item.title} details`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5">
                    <img 
                      src={item.image}
                      alt={`${item.finish} finish pool in ${item.location}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.location} · {item.finish}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-muted-foreground">
                No installations found for this colour family yet.
              </p>
            </div>
          )}

          <p className="mt-20 text-center text-xs text-muted-foreground">
            Water colour appearance varies based on pool depth, lighting conditions, and surrounding environment.
          </p>
        </div>
      </section>

      <GalleryModal
        item={selectedItem}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </Layout>
  );
}
