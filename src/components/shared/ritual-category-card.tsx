import Link from "next/link";

interface RitualCategoryCardProps {
  href: string;
  icon: string;
  label: string;
}

export function RitualCategoryCard({
  href,
  icon,
  label,
}: RitualCategoryCardProps) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center gap-2 text-center">
      <div className="p-4 rounded-full bg-saffron/10">
        <span className="material-symbols-outlined text-saffron text-3xl">
          {icon}
        </span>
      </div>
      <p className="text-xs font-medium text-text-secondary">{label}</p>
    </Link>
  );
}
