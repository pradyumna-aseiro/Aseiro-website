import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import SolutionsHero from "@/components/SolutionsPage/SolutionsHero";
import SolutionsGrid from "@/components/SolutionsPage/SolutionsGrid";
import SolutionsDetails from "@/components/SolutionsPage/SolutionsDetails";
import SolutionsBenefits from "@/components/SolutionsPage/SolutionsBenefits";
import SolutionsCTA from "@/components/SolutionsPage/SolutionsCTA";

export default function SolutionsPage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <SolutionsHero />
        <SolutionsGrid />
        <SolutionsDetails />
        <SolutionsBenefits />
        <SolutionsCTA />
      </main>
      <Footer />
    </div>
  );
}
