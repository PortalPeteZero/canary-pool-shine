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
    finish: "Mediterranean",
    family: "classic-blue",
    description: "A stunning infinity pool overlooking the Atlantic Ocean. The Mediterranean finish creates a perfect blend of vibrant blue water that complements the volcanic landscape.",
    image: poolBlueImage,
  },
  {
    id: "2",
    title: "Resort Pool",
    location: "Gran Canaria",
    finish: "Pearl White",
    family: "bright-white",
    description: "Crystal-clear waters in a boutique hotel setting. The Pearl White finish maximizes the sparkle and clarity of the pool under the Canarian sun.",
    image: poolWhiteImage,
  },
  {
    id: "3",
    title: "Private Residence",
    location: "Lanzarote",
    finish: "Obsidian",
    family: "charcoal",
    description: "A dramatic charcoal pool that creates mirror-like reflections. The Obsidian finish pairs beautifully with the volcanic stone surrounds.",
    image: poolDarkImage,
  },
  {
    id: "4",
    title: "Beachfront Villa",
    location: "Fuerteventura",
    finish: "Aquamarine",
    family: "soft-aqua",
    description: "Tropical turquoise waters reminiscent of the nearby beaches. The Aquamarine finish brings Caribbean vibes to this stunning property.",
    image: poolAquaImage,
  },
  {
    id: "5",
    title: "Contemporary Home",
    location: "Tenerife",
    finish: "Slate",
    family: "graphite",
    description: "A sleek graphite pool that reflects the sky beautifully. The Slate finish adds modern sophistication to this architectural home.",
    image: poolSlateImage,
  },
  {
    id: "6",
    title: "Luxury Estate",
    location: "La Palma",
    finish: "Aegean",
    family: "classic-blue",
    description: "Classic blue waters set against a backdrop of lush gardens. The Aegean finish provides rich, inviting tones perfect for relaxation.",
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

      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Work
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Explore our portfolio of ECO Finish installations across the Canary Islands. 
              Each pool showcases the transformative power of our premium finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All
            </button>
            {finishData.families.map((family) => (
              <button
                key={family.id}
                onClick={() => setActiveFilter(family.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === family.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {family.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          {filteredItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="group text-left rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-up"
                  style={{ animationDelay: `${0.05 * (index + 1)}s` }}
                  aria-label={`View ${item.title} details`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image}
                      alt={`${item.finish} finish pool in ${item.location}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.location} • {item.finish}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No installations found for this colour family yet.
              </p>
            </div>
          )}

          <p className="mt-12 text-center text-sm text-muted-foreground">
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
