export function CategoryIcons() {
  return (
    <div>
      <h2 className="text-text-primary text-xl font-bold leading-tight tracking-tight pb-3">
        Popular Rituals
      </h2>
      <div className="grid grid-cols-4 gap-4 py-2">
        <a
          className="flex flex-col items-center justify-center gap-2 text-center"
          href="#"
        >
          <div className="p-4 rounded-full bg-saffron/10">
            <span className="material-symbols-outlined text-saffron text-3xl">temple_hindu</span>
          </div>
          <p className="text-xs font-medium text-text-secondary">Puja</p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-2 text-center"
          href="#"
        >
          <div className="p-4 rounded-full bg-saffron/10">
            <span className="material-symbols-outlined text-saffron text-3xl">favorite</span>
          </div>
          <p className="text-xs font-medium text-text-secondary">Marriage</p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-2 text-center"
          href="#"
        >
          <div className="p-4 rounded-full bg-saffron/10">
            <span className="material-symbols-outlined text-saffron text-3xl">settings_accessibility</span>
          </div>
          <p className="text-xs font-medium text-text-secondary">Last Rites</p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-2 text-center"
          href="#"
        >
          <div className="p-4 rounded-full bg-saffron/10">
            <span className="material-symbols-outlined text-saffron text-3xl">celebration</span>
          </div>
          <p className="text-xs font-medium text-text-secondary">Festivals</p>
        </a>
      </div>
    </div>
  );
}
