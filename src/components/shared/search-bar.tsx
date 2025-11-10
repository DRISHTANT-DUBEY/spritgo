import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="py-3 mb-6">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary">
          search
        </span>
        <Input
          placeholder="Search for priests or rituals"
          className="pl-12 pr-4 py-6 rounded-full h-14 shadow-sm border border-border-color bg-card"
        />
      </div>
    </div>
  );
}
