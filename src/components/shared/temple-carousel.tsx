import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Temple {
  name: string;
  location: string;
  imageUrl: string;
}

interface TempleCarouselProps {
  temples: Temple[];
}

export function TempleCarousel({ temples }: TempleCarouselProps) {
  return (
    <div className="flex overflow-x-auto space-x-4 py-2 -mx-4 px-4 scrollbar-hide">
      {temples.map((temple) => (
        <div
          key={temple.name}
          className="flex-shrink-0 w-64 bg-card rounded-xl overflow-hidden shadow-sm border border-border-color"
        >
          <div
            className="w-full h-32 bg-cover bg-center"
            style={{ backgroundImage: `url('${temple.imageUrl}')` }}
          ></div>
          <div className="p-3">
            <p className="font-semibold text-sm text-text-primary truncate">
              {temple.name}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-text-secondary text-sm">
                location_on
              </span>
              <p className="text-xs text-text-secondary truncate">
                {temple.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
