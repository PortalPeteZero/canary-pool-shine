import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  finish: string;
  family: string;
  description: string;
  image?: string;
}

interface GalleryModalProps {
  item: GalleryItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GalleryModal({ item, open, onOpenChange }: GalleryModalProps) {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        {/* Image */}
        {item.image ? (
          <img 
            src={item.image}
            alt={`${item.finish} finish pool in ${item.location}`}
            className="aspect-video w-full object-cover"
          />
        ) : (
          <div className="aspect-video bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
            <span className="text-cyan-600 font-medium">Pool Photo Placeholder</span>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{item.title}</h2>
              <p className="text-muted-foreground">{item.location}</p>
            </div>
            <Badge variant="secondary" className="shrink-0">
              {item.finish}
            </Badge>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>

          <p className="mt-4 text-xs text-muted-foreground">
            Water colour appearance varies based on pool depth, lighting conditions, and surrounding environment.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
