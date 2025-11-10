import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TempleCardProps {
  name: string;
  location: string;
  imageUrl: string;
}

export function TempleCard({ name, location, imageUrl }: TempleCardProps) {
  return (
    <Card className="flex-shrink-0 w-64 bg-card rounded-xl overflow-hidden shadow-sm border border-border-color">
      <div
        className="w-full h-32 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <CardHeader>
        <CardTitle className="font-semibold text-sm text-text-primary truncate">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 mt-1">
          <span className="material-symbols-outlined text-text-secondary text-sm">location_on</span>
          <p className="text-xs text-text-secondary truncate">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
}
