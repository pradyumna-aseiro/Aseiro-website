import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import CaseStudiesHero from "@/components/CaseStudiesPage/CaseStudiesHero";
import CaseStudiesCards from "@/components/CaseStudiesPage/CaseStudiesCards";

export const metadata = {
  title: "Case Studies – Automation & Machine Vision India | Aseiro",
  description: "See how Aseiro's machine vision and automation systems improved quality and efficiency for manufacturers across India and the UK.",
};

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
