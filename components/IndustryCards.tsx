// components/IndustryCards.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustryCards() {
  return (
    <section className="py-24 bg-white relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/automation-facility.png"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/automation-overlay.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent z-10 pointer-events-none"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-[#b59b1d] mb-4">INDUSTRIES WE SERVE</p>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
              Tailored Solutions
              <br />
              for Every Sector
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              From pharmaceutical precision to automotive efficiency, we deliver industry-specific automation
              solutions that meet regulatory requirements and exceed performance expectations.
            </p>
            <Link href="/industries">
              <Button className="bg-[#004080] hover:bg-[#004080]/90 text-white px-6 py-3">
                Explore Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { name: "Pharmaceutical", icon: "💊" },
              { name: "Automotive", icon: "🚗" },
              { name: "Electronics", icon: "💻" },
              { name: "Contruction", icon: "🏗️" },
              { name: "Packaging & Logistics", icon: "📦" },
              { name: "Food & Beverage", icon: "🥤" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-medium text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
