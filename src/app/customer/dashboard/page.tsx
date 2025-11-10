import { AppHeader } from "@/components/shared/app-header";
import { BottomNavBar } from "@/components/shared/bottom-nav-bar";
import { RitualCategoryCard } from "@/components/shared/ritual-category-card";
import { SearchBar } from "@/components/shared/search-bar";
import { TempleCarousel } from "@/components/shared/temple-carousel";

const rituals = [
  { href: "#", icon: "temple_hindu", label: "Puja" },
  { href: "#", icon: "favorite", label: "Marriage" },
  { href: "#", icon: "settings_accessibility", label: "Last Rites" },
  { href: "#", icon: "celebration", label: "Festivals" },
];

const temples = [
  {
    name: "Brihadeeswara Temple",
    location: "Thanjavur, India",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVvG1jvrdhGard0Ensf788_CMwh7vQYzM3AXohkAWcRHFZCg92JTApFqmjTg1GVPR4KPfe7WjBIg1cCEsQAuPi7MsZNdG-Y_era-SIN-MIx_hyd6FK0sqSP4aCSuxQn1ef63NKGxWzx4N_tnt1L5x9E5bq-1SR5nZj0VYfX-jmU2z8Pbm1GoZcFo0rSScwbQeyFR5lVAYrpLzSgs4m0Yt7agFHF64j-R_IlGFj5u2z1DKGUSOG9j0V5Hv25B8dva6oTAXJdMVbbpc",
  },
  {
    name: "Golden Temple",
    location: "Amritsar, India",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnyp6yk99cLoYdzMoOGmN1ITXfnsh4uW9Ax3ks04d56sS7jWAwWc8-3Xtfe_B7_eesum9jYN0nQvSnLlasKeQ17wsu4WgrMVxYDoW79vrDbi8H6bSkia-2J0UK56bQNEg8WlyqyLStcFFPO9WcC050r4JPwt_4a_iX7c6ah6TXj8-pHSSDvZ-xvhe6MpYtKaGdV30qVvcOqxjOnODPEfMrFNEEPMRT2LisrTLlhSnLFX0_k9S3WCib2AxA1sbXCI_KRq2niTchhmc",
  },
  {
    name: "Meenakshi Amman Temple",
    location: "Madurai, India",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAe-0mlD6v6rOWo529K93LoQb2f6aHFgBNUmu_o4lmCruFRaz6_iCiDjAWa4SvfXOz1PPEkWIZdknoNolXXy8CjZiiOkVg7bQNGb386YP5Hq97IvsAjHGFI5soxtsQciQRUzKWEvoj3-DtkpxA-ucckNyQpTYG2FRCJ39NU8HCsbjK97d0luF6lB5JGaqwvb2XOuotipM-khKZnOnfc9DE8GnXl_iaRIfQVfXqJzkmqD0-uXvkeEPszn-DVk6OsuqRzKBr-SBAVYc",
  },
  {
    name: "Jagannath Temple",
    location: "Puri, India",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRIemd4G8p3QQptYS9ldmR5iusfmk-2CL6dcjP_-KJEWIyzfp8f1l7GS_jyCO5esAtdezbLoBCMDN_BMiKYRiIS_4wAhHKJsVV-PrUZLrCKvr9XnNxsF9_exoTWY2hqTlFUZO_CUw96A4izt3IgTNrlJj1wJBVXLNw6bxwJV6qaSX1m1bsUR7yV7CnPcBiGBbljiNWni3IncUqKhqAB1-C3KKuxyg5HL3UWloLGuCbdbSkFZpKD3lEAkgfIEPnRYMjowpJ0SpX6Jo",
  },
];

export default function CustomerDashboard() {
  return (
    <div className="w-full max-w-md mx-auto bg-background min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-1 overflow-y-auto px-4 pb-24">
        <SearchBar />

        <h2 className="text-text-primary text-xl font-bold leading-tight tracking-tight pb-3">
          Popular Rituals
        </h2>
        <div className="grid grid-cols-4 gap-4 py-2">
          {rituals.map((ritual) => (
            <RitualCategoryCard key={ritual.label} {...ritual} />
          ))}
        </div>

        <h2 className="text-text-primary text-xl font-bold leading-tight tracking-tight pb-3 pt-8">
          Popular Temples
        </h2>
        <TempleCarousel temples={temples} />
      </main>
      <BottomNavBar />
    </div>
  );
}
