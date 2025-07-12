import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import IndustryGrid from "@/components/IndustriesPage/IndustriesGrid";
import IndustryStats from "@/components/IndustriesPage/IndustriesStats";
import IndustryCTA from "@/components/IndustriesPage/IndustriesCTA";

export const metadata = {
  title: "Industries Served – Machine Vision & Automation | Aseiro",
  description: "Aseiro delivers machine vision and automation solutions for pharma, automotive, electronics, and more. Serving manufacturers in the UK and India.",
};

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
