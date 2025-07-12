import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import SolutionsHero from "@/components/SolutionsPage/SolutionsHero";
import SolutionsDetails from "@/components/SolutionsPage/SolutionsDetails";
import SolutionsBenefits from "@/components/SolutionsPage/SolutionsBenefits";
import SolutionsCTA from "@/components/SolutionsPage/SolutionsCTA";

export const metadata = {
  title: "Industrial Automation & Machine Vision Solutions | Aseiro UK & India",
  description: "Discover Aseiro's comprehensive automation, robotics, and machine vision solutions for quality inspection and manufacturing in the UK and India.",
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
