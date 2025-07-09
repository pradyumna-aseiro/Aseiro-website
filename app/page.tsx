// app/page.tsx  (or pages/index.tsx)
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import SolutionsCards from "@/components/SolutionsCards";
import IndustryCards from "@/components/IndustryCards";
import GlobalPresence from "@/components/GlobalPresence";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <VideoHero />
        <SolutionsCards />
        <IndustryCards />
        <GlobalPresence />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}