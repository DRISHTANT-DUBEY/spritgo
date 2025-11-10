import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="py-3 mb-6">
      <label className="flex flex-col min-w-40 h-14 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-full h-full shadow-sm border border-border-color bg-card">
          <div className="text-text-secondary flex items-center justify-center pl-5 pr-2">
            <span className="material-symbols-outlined">search</span>
          </div>
          <Input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-text-primary focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-text-secondary px-2 text-base font-normal"
            placeholder="Search for priests or rituals"
          />
        </div>
      </label>
    </div>
  );
}
