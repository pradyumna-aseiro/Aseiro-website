import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import IndustryGrid from "@/components/IndustriesPage/IndustriesGrid";
import IndustryStats from "@/components/IndustriesPage/IndustriesStats";
import IndustryCTA from "@/components/IndustriesPage/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <IndustriesHero />
      <IndustryGrid />
      <IndustryStats />
      <IndustryCTA />
    </div>
  );
}
