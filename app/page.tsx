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

export const metadata = {
  title: "Aseiro Industries – India's Leading Machine Vision & Automation Solutions (Now in UK)",
  description: "Aseiro Industries is India's top provider of machine vision and industrial automation solutions for manufacturing, quality inspection, and robotics integration. Now expanding to the UK market.",
};

export default function HomePage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <VideoHero />
        <SolutionsCards />
        <BenefitsSection />
        <IndustryPartners />
        <IndustryCards />
        <GlobalPresence />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}