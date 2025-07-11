import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import CaseStudiesHero from "@/components/CaseStudiesPage/CaseStudiesHero";
import CaseStudiesCards from "@/components/CaseStudiesPage/CaseStudiesCards";

export default function CaseStudiesPage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesCards />
      </main>
      <Footer />
    </div>
  );
}
