import HeroSection from "@/components/AboutPage/HeroSection";
import OurStorySection from "@/components/AboutPage/OurStorySection";
import WhatSetsUsApart from "@/components/AboutPage/WhatSetsUsApart";
import GlobalPresence from "@/components/MainPage/GlobalPresence";
import MeetTheTeam from "@/components/AboutPage/MeetTheTeam";
import TeamStats from "@/components/AboutPage/TeamStats";

// import Header, Footer, TopBar as you normally do

export default function AboutPage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <HeroSection />
        <OurStorySection />
        <WhatSetsUsApart />
        <GlobalPresence />
        <MeetTheTeam />
        <TeamStats />
      </main>
      <Footer />
    </div>
  );
}
