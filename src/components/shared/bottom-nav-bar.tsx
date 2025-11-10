import Link from "next/link";

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-card/80 backdrop-blur-lg border-t border-border-color flex justify-around items-center w-full max-w-md mx-auto rounded-t-2xl">
      <Link href="/" className="flex flex-col items-center gap-1 text-saffron active">
        <span className="material-symbols-outlined">home</span>
        <p className="text-xs font-medium">Home</p>
      </Link>
      <Link href="/bookings" className="flex flex-col items-center gap-1 text-text-secondary">
        <span className="material-symbols-outlined">bookmark</span>
        <p className="text-xs font-medium">Bookings</p>
      </Link>
      <Link href="/temples" className="flex flex-col items-center gap-1 text-text-secondary">
        <span className="material-symbols-outlined">synagogue</span>
        <p className="text-xs font-medium">Temples</p>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-1 text-text-secondary">
        <span className="material-symbols-outlined">person</span>
        <p className="text-xs font-medium">Profile</p>
      </Link>
    </nav>
  );
}
