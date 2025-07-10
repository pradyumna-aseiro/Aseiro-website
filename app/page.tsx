// app/page.tsx  (or pages/index.tsx)
import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import VideoHero from "@/components/MainPage/VideoHero";
import SolutionsCards from "@/components/MainPage/SolutionsCards";
import BenefitsSection from "@/components/MainPage/BenefitsSection";
import IndustryCards from "@/components/MainPage/IndustryCards";
import GlobalPresence from "@/components/MainPage/GlobalPresence";
import CTASection from "@/components/MainPage/CTASection";
import IndustryPartners from "@/components/MainPage/IndustryPartners";

export default function HomePage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <VideoHero />
        <SolutionsCards />
        <BenefitsSection />
        <GlobalPresence />
        <IndustryCards />
        <IndustryPartners />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}