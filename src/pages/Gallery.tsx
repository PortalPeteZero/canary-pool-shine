import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { GalleryModal } from "@/components/shared/GalleryModal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

// Get unique islands for filtering
const islands = [...new Set(galleryItems.map((item) => item.location))];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [islandFilter, setIslandFilter] = useState<string>("all");

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleLightboxOpen = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNav = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    } else {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }
  };

  const filteredItems = galleryItems.filter((item) => {
    const matchesFamily = activeFilter === "all" || item.family === activeFilter;
    const matchesIsland = islandFilter === "all" || item.location === islandFilter;
    return matchesFamily && matchesIsland;
  });

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

      {/* Filters - Mobile scrollable */}
      <section className="py-4 border-b border-border/30 overflow-x-auto">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Product line filter */}
            <div className="flex gap-2 min-w-max">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "all"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground bg-surface-light"
                }`}
              >
                All Products
              </button>
              {["aquaBRIGHT", "polyFIBRO", "Commercial"].map((productLine) => (
                <button
                  key={productLine}
                  onClick={() => setActiveFilter(productLine)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeFilter === productLine
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground bg-surface-light"
                  }`}
                >
                  {productLine}
                </button>
              ))}
            </div>
            
            {/* Island filter */}
            <div className="flex gap-2 min-w-max sm:border-l sm:border-border/30 sm:pl-3">
              <button
                onClick={() => setIslandFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  islandFilter === "all"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground bg-surface-light"
                }`}
              >
                All Islands
              </button>
              {islands.map((island) => (
                <button
                  key={island}
                  onClick={() => setIslandFilter(island)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    islandFilter === island
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground bg-surface-light"
                  }`}
                >
                  {island}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Responsive */}
      <section className="py-10 md:py-16 lg:py-24">
        <div className="container">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${0.05 * (index + 1)}s` }}
                >
                  <button
                    onClick={() => handleLightboxOpen(index)}
                    className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-4 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
                    aria-label={`View ${item.title} in lightbox`}
                  >
                    <img 
                      src={item.image}
                      alt={`${item.finish} finish pool in ${item.location}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </button>
                  <button
                    onClick={() => handleItemClick(item)}
                    className="text-left w-full focus:outline-none"
                    aria-label={`View ${item.title} details`}
                  >
                    <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.location} · {item.finish}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 md:py-24">
              <p className="text-muted-foreground">
                No installations found for this colour family yet.
              </p>
            </div>
          )}

          <p className="mt-12 md:mt-20 text-center text-xs text-muted-foreground">
            Water colour appearance varies based on pool depth, lighting conditions, and surrounding environment.
          </p>
        </div>
      </section>

      <GalleryModal
        item={selectedItem}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-6xl p-0 bg-black/95 border-none">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          {filteredItems[lightboxIndex] && (
            <div className="relative">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={`${filteredItems[lightboxIndex].finish} finish pool`}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              
              {/* Nav buttons */}
              <button
                onClick={() => handleLightboxNav("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => handleLightboxNav("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold">{filteredItems[lightboxIndex].title}</h3>
                <p className="text-white/70 text-sm">{filteredItems[lightboxIndex].location} · {filteredItems[lightboxIndex].finish}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
