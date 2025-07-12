import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import SolutionsHero from "@/components/SolutionsPage/SolutionsHero";
import SolutionsDetails from "@/components/SolutionsPage/SolutionsDetails";
import SolutionsBenefits from "@/components/SolutionsPage/SolutionsBenefits";
import SolutionsCTA from "@/components/SolutionsPage/SolutionsCTA";

export const metadata = {
  title: "Automation & Machine Vision Solutions India | Aseiro (Now in UK)",
  description: "Explore Aseiro’s automation and machine vision solutions for quality inspection, robotics, and manufacturing. India's trusted provider, now expanding to the UK.",
};

export default function SolutionsPage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <SolutionsHero />
        <SolutionsDetails />
        <SolutionsBenefits />
        <SolutionsCTA />
      </main>
      <Footer />
    </div>
  );
}
