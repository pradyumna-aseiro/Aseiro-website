import HeroSection from "@/components/AboutPage/HeroSection";
import OurStorySection from "@/components/AboutPage/OurStorySection";
import ValuesSection from "@/components/AboutPage/ValuesSection";
import WhatSetsUsApart from "@/components/AboutPage/WhatSetsUsApart";
import GlobalPresence from "@/components/MainPage/GlobalPresence";
import MeetTheTeam from "@/components/AboutPage/MeetTheTeam";
import TeamStats from "@/components/AboutPage/TeamStats"; // optional

// import Header, Footer, TopBar as you normally do

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <TopBar /> */}
      {/* <Header /> */}
      <HeroSection />
      <OurStorySection />
      <ValuesSection />
      <WhatSetsUsApart />
      <GlobalPresence />
      <MeetTheTeam />
      <TeamStats />
      {/* CTA and Footer sections here */}
    </div>
  );
}
