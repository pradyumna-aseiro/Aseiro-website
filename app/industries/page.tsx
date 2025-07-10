import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import IndustryGrid from "@/components/IndustriesPage/IndustriesGrid";
import IndustryStats from "@/components/IndustriesPage/IndustriesStats";
import IndustryCTA from "@/components/IndustriesPage/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <IndustriesHero />
        <IndustryGrid />
        <IndustryStats />
        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
