// components/VideoHero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VideoHero() {
  return (
    <section className="relative h-[600px] min-h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/precision-manufacturing.png"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-automation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10 pointer-events-none"></div>
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
        <p className="text-sm uppercase tracking-wider text-gray-200 mb-4">AUTOMATION & MACHINE VISION</p>
        <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 leading-tight">
          India's Leading <span className="text-[#b59b1d]">Machine Vision </span>
          & Automation Solutions
        </h1>
        <p className="text-xl text-gray-200 mb-8 font-medium">
          Now Expanding to the UK – Quality Inspection & Robotics Integration
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/solutions">
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
          >
            <Link href="/contact">Get Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
