export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-card/80 backdrop-blur-lg border-t border-border-color flex justify-around items-center w-full max-w-md mx-auto rounded-t-2xl">
      <a
        className="flex flex-col items-center gap-1 text-saffron active"
        href="#"
      >
        <span className="material-symbols-outlined">home</span>
        <p className="text-xs font-medium">Home</p>
      </a>
      <a className="flex flex-col items-center gap-1 text-text-secondary" href="#">
        <span className="material-symbols-outlined">bookmark</span>
        <p className="text-xs font-medium">Bookings</p>
      </a>
      <a className="flex flex-col items-center gap-1 text-text-secondary" href="#">
        <span className="material-symbols-outlined">synagogue</span>
        <p className="text-xs font-medium">Temples</p>
      </a>
      <a className="flex flex-col items-center gap-1 text-text-secondary" href="#">
        <span className="material-symbols-outlined">person</span>
        <p className="text-xs font-medium">Profile</p>
      </a>
    </nav>
  );
}
