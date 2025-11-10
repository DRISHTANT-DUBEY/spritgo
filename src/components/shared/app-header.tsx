import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="p-4 flex justify-between items-center sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="flex items-center gap-2">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Sprigo"
            className="h-10 w-10"
          />
        </Link>
        <h1 className="text-maroon dark:text-saffron text-xl font-bold">
          Sprigo
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <span className="material-symbols-outlined">notifications</span>
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
