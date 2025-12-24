import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Finish {
  id: string;
  family: string;
  finishName: string;
  swatchColor: string;
  description: string;
  media: string[];
}

interface FinishModalProps {
  finish: Finish | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FinishModal({ finish, open, onOpenChange }: FinishModalProps) {
  if (!finish) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">{finish.finishName}</DialogTitle>
        </DialogHeader>
        
        <div className="p-6 pt-4">
          {/* Large Swatch */}
          <div 
            className="w-full h-48 rounded-xl shadow-card mb-6"
            style={{ backgroundColor: finish.swatchColor }}
            aria-label={`${finish.finishName} colour swatch`}
          />
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {finish.description}
          </p>

          {/* Example Gallery Placeholder */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Example Installations
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-lg bg-secondary flex items-center justify-center"
                >
                  <span className="text-xs text-muted-foreground">Photo {i}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Photos coming soon. Water colour varies by depth, lighting, and surroundings.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
