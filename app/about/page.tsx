import Header from "@/components/MainPage/Header";
import Footer from "@/components/MainPage/Footer";
import HeroSection from "@/components/AboutPage/HeroSection";
import OurStorySection from "@/components/AboutPage/OurStorySection";
import WhatSetsUsApart from "@/components/AboutPage/WhatSetsUsApart";
import GlobalPresence from "@/components/MainPage/GlobalPresence";
import MeetTheTeam from "@/components/AboutPage/MeetTheTeam";

export const metadata = {
  title: "About Aseiro – India's Machine Vision & Automation Experts (Now in UK)",
  description: "Learn about Aseiro's expertise in machine vision, robotics, and automation. Trusted Indian provider for quality inspection, now expanding to the UK.",
};

export default function AboutPage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <HeroSection />
        <OurStorySection />
        <WhatSetsUsApart />
        <MeetTheTeam />
        <GlobalPresence />
      </main>
      <Footer />
    </div>
  );
}
